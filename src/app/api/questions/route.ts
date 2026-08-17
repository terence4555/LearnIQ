import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db/prisma";

const querySchema = z.object({
  module: z.string().max(50).optional(),
  section: z.string().max(50).optional(),
  level: z.string().max(20).optional(),
  limit: z.coerce.number().int().min(1).max(50).default(10),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const parsed = querySchema.safeParse({
    module: searchParams.get("module") ?? undefined,
    section: searchParams.get("section") ?? undefined,
    level: searchParams.get("level") ?? undefined,
    limit: searchParams.get("limit") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
  }

  const { module, section, level, limit } = parsed.data;

  const questions = await prisma.question.findMany({
    where: {
      status: "published",
      ...(module && { module }),
      ...(section && { section }),
      ...(level && { level }),
    },
    take: limit,
    select: {
      id: true,
      module: true,
      section: true,
      topic: true,
      level: true,
      difficulty: true,
      type: true,
      content: true,
      options: {
        select: {
          id: true,
          content: true,
          // on ne renvoie JAMAIS isCorrect au client
        },
      },
      // correctAnswer volontairement exclu de la réponse
    },
  });

  return NextResponse.json(questions);
}