import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ stage: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { stage: stageParam } = await params;
  const stage = Number(stageParam);

  const { searchParams } = new URL(req.url);
  const module = searchParams.get("module") ?? "english";
  const section = searchParams.get("section");

  if (!section || !Number.isInteger(stage) || stage < 1 || stage > 10) {
    return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
  }

  // Vérifie que l'étape est bien débloquée avant de servir les questions
  if (stage > 1) {
    const previousProgress = await prisma.stageProgress.findUnique({
      where: {
        userId_module_section_stage: {
          userId: session.user.id,
          module,
          section,
          stage: stage - 1,
        },
      },
    });

    if (!previousProgress?.completed) {
      return NextResponse.json({ error: "Étape verrouillée" }, { status: 403 });
    }
  }

  const allQuestions = await prisma.question.findMany({
    where: { module, section, stage, status: "published" },
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

  // Pioche 15 questions au hasard parmi celles de l'étape
  const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, 15);

  return NextResponse.json(shuffled);
}