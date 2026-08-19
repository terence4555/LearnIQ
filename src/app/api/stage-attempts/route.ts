import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

const schema = z.object({
  module: z.string().min(1).max(50),
  section: z.string().min(1).max(50),
  stage: z.number().int().min(1).max(10),
  answers: z
    .array(
      z.object({
        questionId: z.string().cuid(),
        answer: z.string().min(1).max(500),
      })
    )
    .min(1)
    .max(20),
});

const PASS_THRESHOLD = 80;

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const rawBody = await req.json();
  const parsed = schema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  }

  const { module, section, stage, answers } = parsed.data;

  try {
    const questionIds = answers.map((a) => a.questionId);
    const questions = await prisma.question.findMany({
      where: { id: { in: questionIds } },
      select: { id: true, content: true, correctAnswer: true, explanation: true },
    });
    const questionMap = new Map(questions.map((q) => [q.id, q]));

    const detailedAnswers = answers.map((a) => {
      const q = questionMap.get(a.questionId);
      return {
        questionId: a.questionId,
        content: q?.content ?? "",
        yourAnswer: a.answer,
        correctAnswer: q?.correctAnswer ?? "",
        explanation: q?.explanation ?? null,
        isCorrect: q?.correctAnswer === a.answer,
      };
    });

    const correctCount = detailedAnswers.filter((a) => a.isCorrect).length;
    const score = Math.round((correctCount / answers.length) * 100);
    const passed = score >= PASS_THRESHOLD;

    const existing = await prisma.stageProgress.findUnique({
      where: {
        userId_module_section_stage: { userId: session.user.id, module, section, stage },
      },
    });

    const stageProgress = await prisma.stageProgress.upsert({
      where: {
        userId_module_section_stage: { userId: session.user.id, module, section, stage },
      },
      update: {
        completed: passed || existing?.completed || false,
        score,
        attempts: { increment: 1 },
        completedAt: passed ? new Date() : existing?.completedAt,
      },
      create: {
        userId: session.user.id, module, section, stage,
        completed: passed, score, attempts: 1,
        completedAt: passed ? new Date() : null,
      },
    });

    const totalCompletedStages = await prisma.stageProgress.count({
      where: { userId: session.user.id, module, section, completed: true },
    });

    await prisma.progress.upsert({
      where: { userId_module_section: { userId: session.user.id, module, section } },
      update: { completionPercentage: totalCompletedStages * 10, score },
      create: { userId: session.user.id, module, section, completionPercentage: totalCompletedStages * 10, score },
    });

    return NextResponse.json({
      score,
      correctCount,
      total: answers.length,
      passed,
      stageCompleted: stageProgress.completed,
      threshold: PASS_THRESHOLD,
      details: detailedAnswers, // détail complet, utilisé pour l'affichage du résultat
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Échec de la soumission" }, { status: 500 });
  }
}