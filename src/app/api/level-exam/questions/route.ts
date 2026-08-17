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
  const level = searchParams.get("level") ?? "B1";

  const [grammarIds, vocabIds, readingIds] = await Promise.all([
    prisma.question.findMany({
      where: { module, section: "grammar", level, status: "published" },
      select: { id: true },
    }),
    prisma.question.findMany({
      where: { module, section: "vocabulary", level, status: "published" },
      select: { id: true },
    }),
    prisma.question.findMany({
      where: { module, section: "reading", level, status: "published" },
      select: { id: true },
    }),
  ]);

  const pickRandom = (arr: { id: string }[], n: number) =>
    arr.sort(() => Math.random() - 0.5).slice(0, n).map((q) => q.id);

  // Mix pondéré : 8 grammar + 8 vocabulary + 4 reading = 20 questions
  const selectedIds = [
    ...pickRandom(grammarIds, 8),
    ...pickRandom(vocabIds, 8),
    ...pickRandom(readingIds, 4),
  ];

  const questions = await prisma.question.findMany({
    where: { id: { in: selectedIds } },
    select: {
      id: true,
      module: true,
      section: true,
      topic: true,
      level: true,
      difficulty: true,
      type: true,
      content: true,
      options: { select: { id: true, content: true } },
    },
  });

  const shuffled = questions.sort(() => Math.random() - 0.5);

  return NextResponse.json(shuffled);
}