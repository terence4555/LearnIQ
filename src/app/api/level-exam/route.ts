import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

const SECTIONS = ["grammar", "vocabulary", "reading"]; // sections avec système d'étapes actuellement

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const module = searchParams.get("module") ?? "english";
  const level = searchParams.get("level") ?? "B1";

  const [stageProgress, lastAttempt, bestAttempt] = await Promise.all([
    prisma.stageProgress.findMany({
      where: { userId: session.user.id, module, section: { in: SECTIONS } },
    }),
    prisma.levelExamAttempt.findFirst({
      where: { userId: session.user.id, module, level },
      orderBy: { completedAt: "desc" },
    }),
    prisma.levelExamAttempt.findFirst({
      where: { userId: session.user.id, module, level, passed: true },
    }),
  ]);

  const sectionsStatus = SECTIONS.map((section) => {
    const completedStages = stageProgress.filter(
      (s) => s.section === section && s.completed
    ).length;
    return { section, completedStages, total: 10, ready: completedStages === 10 };
  });

  const eligible = sectionsStatus.every((s) => s.ready);

  return NextResponse.json({
    eligible,
    alreadyPassed: !!bestAttempt,
    sectionsStatus,
    lastAttempt: lastAttempt
      ? { score: lastAttempt.score, passed: lastAttempt.passed, completedAt: lastAttempt.completedAt }
      : null,
  });
}

const submitSchema = z.object({
  module: z.string().min(1).max(50),
  level: z.string().min(1).max(20),
  answers: z
    .array(
      z.object({
        questionId: z.string().cuid(),
        answer: z.string().min(1).max(500),
      })
    )
    .min(1)
    .max(50),
});

const EXAM_PASS_THRESHOLD = 80;

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const rawBody = await req.json();
  const parsed = submitSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  }

  const { module, level, answers } = parsed.data;

  // Revérifie l'éligibilité côté serveur (jamais faire confiance au client)
  const stageProgress = await prisma.stageProgress.findMany({
    where: { userId: session.user.id, module, section: { in: SECTIONS }, completed: true },
  });
  const eligible = SECTIONS.every(
    (section) => stageProgress.filter((s) => s.section === section).length === 10
  );

  if (!eligible) {
    return NextResponse.json(
      { error: "Toutes les sections doivent être complétées avant l'examen" },
      { status: 403 }
    );
  }

  try {
    const questionIds = answers.map((a) => a.questionId);
    const questions = await prisma.question.findMany({
      where: { id: { in: questionIds } },
      select: { id: true, correctAnswer: true },
    });
    const correctMap = new Map(questions.map((q) => [q.id, q.correctAnswer]));

    const correctCount = answers.filter((a) => correctMap.get(a.questionId) === a.answer).length;
    const score = Math.round((correctCount / answers.length) * 100);
    const passed = score >= EXAM_PASS_THRESHOLD;

    const attempt = await prisma.levelExamAttempt.create({
      data: { userId: session.user.id, module, level, score, passed },
    });

    return NextResponse.json({
      attemptId: attempt.id,
      score,
      correctCount,
      total: answers.length,
      passed,
      threshold: EXAM_PASS_THRESHOLD,
      nextLevel: passed ? getNextLevel(level) : null,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Échec de la soumission" }, { status: 500 });
  }
}

function getNextLevel(level: string): string | null {
  const order = ["B1", "B2", "C1"];
  const idx = order.indexOf(level);
  return idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;
}