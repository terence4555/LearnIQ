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

  const [stageProgress, passages] = await Promise.all([
    prisma.stageProgress.findMany({
      where: { userId: session.user.id, module, section: "reading" },
    }),
    prisma.readingPassage.findMany({
      where: { module, mode: "reading", stage: { not: null } },
      select: { stage: true, title: true },
      orderBy: { stage: "asc" },
    }),
  ]);

  const progressByStage = new Map(stageProgress.map((s) => [s.stage, s]));
  const passageByStage = new Map(passages.map((p) => [p.stage as number, p.title]));

  const stages = [];
  let previousCompleted = true;

  for (let stage = 1; stage <= 10; stage++) {
    const progress = progressByStage.get(stage);
    const completed = progress?.completed ?? false;

    stages.push({
      stage,
      title: passageByStage.get(stage) ?? null,
      completed,
      unlocked: previousCompleted,
      score: progress?.score ?? null,
      attempts: progress?.attempts ?? 0,
    });

    previousCompleted = completed;
  }

  return NextResponse.json(stages);
}