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

  if (!Number.isInteger(stage) || stage < 1 || stage > 10) {
    return NextResponse.json({ error: "Étape invalide" }, { status: 400 });
  }

  if (stage > 1) {
    const previousProgress = await prisma.stageProgress.findUnique({
      where: {
        userId_module_section_stage: {
          userId: session.user.id,
          module,
          section: "reading",
          stage: stage - 1,
        },
      },
    });

    if (!previousProgress?.completed) {
      return NextResponse.json({ error: "Étape verrouillée" }, { status: 403 });
    }
  }

  const passage = await prisma.readingPassage.findFirst({
    where: { module, mode: "reading", stage },
    select: {
      id: true,
      title: true,
      content: true,
      questions: {
        select: {
          id: true,
          content: true,
          options: { select: { id: true, content: true } },
        },
      },
    },
  });

  if (!passage) {
    return NextResponse.json({ error: "Texte introuvable" }, { status: 404 });
  }

  return NextResponse.json(passage);
}