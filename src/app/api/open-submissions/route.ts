import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
import { generateFeedback } from "@/lib/ai/feedback";

const submitSchema = z.object({
  promptId: z.string().cuid(),
  mode: z.enum(["writing", "speaking"]),
  responseText: z.string().min(10).max(5000),
});

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

  const { promptId, mode, responseText } = parsed.data;

  try {
    const promptRecord = await prisma.openPrompt.findUnique({ where: { id: promptId } });
    if (!promptRecord) {
      return NextResponse.json({ error: "Sujet introuvable" }, { status: 404 });
    }

    const feedback = await generateFeedback({ mode, prompt: promptRecord.prompt, response: responseText });

    const submission = await prisma.openSubmission.create({
      data: {
        userId: session.user.id,
        promptId,
        mode,
        responseText,
        feedback: feedback as object,
        score: feedback.overallScore,
      },
    });

    await prisma.progress.upsert({
      where: {
        userId_module_section: {
          userId: session.user.id,
          module: "toefl",
          section: mode,
        },
      },
      update: { score: feedback.overallScore, completionPercentage: 100 },
      create: {
        userId: session.user.id,
        module: "toefl",
        section: mode,
        score: feedback.overallScore,
        completionPercentage: 100,
      },
    });

    return NextResponse.json({ submissionId: submission.id, feedback });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Échec de l'évaluation" }, { status: 500 });
  }
}