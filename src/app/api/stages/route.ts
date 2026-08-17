import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const module = searchParams.get("module") ?? "english";
  const section = searchParams.get("section");

  if (!section) {
    return NextResponse.json({ error: "section requise" }, { status: 400 });
  }

  const [stageProgress, questionCounts] = await Promise.all([
    prisma.stageProgress.findMany({
      where: { userId: session.user.id, module, section },
    }),
    prisma.question.groupBy({
      by: ["stage"],
      where: { module, section, status: "published", stage: { not: null } },
      _count: true,
    }),
  ]);

  const progressByStage = new Map(stageProgress.map((s) => [s.stage, s]));
  const countByStage = new Map(questionCounts.map((c) => [c.stage, c._count]));

  const stages = [];
  let previousCompleted = true; // stage 1 toujours débloqué

  for (let stage = 1; stage <= 10; stage++) {
    const progress = progressByStage.get(stage);
    const completed = progress?.completed ?? false;
    const questionCount = countByStage.get(stage) ?? 0;

    stages.push({
      stage,
      completed,
      unlocked: previousCompleted,
      score: progress?.score ?? null,
      attempts: progress?.attempts ?? 0,
      questionCount,
    });

    previousCompleted = completed;
  }

  return NextResponse.json(stages);
}