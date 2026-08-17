import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

const submitSchema = z.object({
  module: z.string().min(1).max(50),
  answers: z
    .array(
      z.object({
        questionId: z.string().cuid(),
        answer: z.string().min(1).max(500),
        responseTime: z.number().int().min(0).max(3600),
      })
    )
    .min(1)
    .max(100),
});

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const rawBody = await req.json();
  const parsed = submitSchema.safeParse(rawBody);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { module, answers } = parsed.data;

  try {
    // Récupère les vraies bonnes réponses côté serveur (jamais faire confiance au client)
    const questionIds = answers.map((a) => a.questionId);
    const questions = await prisma.question.findMany({
      where: { id: { in: questionIds } },
      select: { id: true, correctAnswer: true },
    });

    const correctMap = new Map(questions.map((q) => [q.id, q.correctAnswer]));

    const gradedAnswers = answers.map((a) => ({
      questionId: a.questionId,
      answer: a.answer,
      responseTime: a.responseTime,
      isCorrect: correctMap.get(a.questionId) === a.answer,
    }));

    const correctCount = gradedAnswers.filter((a) => a.isCorrect).length;
    const score = Math.round((correctCount / gradedAnswers.length) * 100);
    const totalDuration = gradedAnswers.reduce((sum, a) => sum + a.responseTime, 0);

    const attempt = await prisma.testAttempt.create({
      data: {
        userId: session.user.id,
        module,
        completedAt: new Date(),
        score,
        duration: totalDuration,
        answers: {
          create: gradedAnswers,
        },
      },
      include: { answers: true },
    });

    const firstQuestion = await prisma.question.findUnique({
      where: { id: gradedAnswers[0].questionId },
      select: { section: true },
    });

    if (firstQuestion) {
      await prisma.progress.upsert({
        where: {
          userId_module_section: {
            userId: session.user.id,
            module,
            section: firstQuestion.section,
          },
        },
        update: { score, completionPercentage: 100 },
        create: {
          userId: session.user.id,
          module,
          section: firstQuestion.section,
          score,
          completionPercentage: 100,
        },
      });
    }

    return NextResponse.json({
      attemptId: attempt.id,
      score: attempt.score,
      correctCount,
      total: gradedAnswers.length,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Échec de la soumission" }, { status: 500 });
  }
}