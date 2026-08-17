import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const module = searchParams.get("module") ?? "english";
  const mode = searchParams.get("mode") ?? "reading";

  const count = await prisma.readingPassage.count({ where: { module, mode } });

  if (count === 0) {
    return NextResponse.json(null);
  }

  const skip = Math.floor(Math.random() * count);

  const passage = await prisma.readingPassage.findFirst({
    where: { module, mode },
    skip,
    select: {
      id: true,
      title: true,
      content: true,
      questions: {
        select: {
          id: true,
          content: true,
          options: {
            select: { id: true, content: true },
          },
        },
      },
    },
  });

  return NextResponse.json(passage);
}