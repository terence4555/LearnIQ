import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
import { generateQuestions } from "@/lib/ai/gemini";

const generateSchema = z.object({
  module: z.enum(["english", "toefl"]),
  section: z.enum(["grammar", "vocabulary", "reading", "listening"]),
  topic: z.string().min(2).max(100),
  level: z.string().min(1).max(20),
  count: z.number().int().min(1).max(20),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const rawBody = await req.json();
  const parsed = generateSchema.safeParse(rawBody);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Paramètres invalides", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { module, section, topic, level, count } = parsed.data;

  try {
    const generated = await generateQuestions({ module, section, topic, level, count });

    if (generated.length === 0) {
      return NextResponse.json({ error: "Aucune question valide générée" }, { status: 422 });
    }

    const created = await Promise.all(
      generated.map((q) =>
        prisma.question.create({
          data: {
            module,
            section,
            topic,
            level,
            difficulty: 2,
            type: "MCQ",
            content: q.content,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            status: "draft",
            options: {
              create: q.options.map((opt) => ({
                content: opt,
                isCorrect: opt === q.correctAnswer,
              })),
            },
          },
        })
      )
    );

    return NextResponse.json({ count: created.length, questions: created });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Échec de la génération" }, { status: 500 });
  }
}