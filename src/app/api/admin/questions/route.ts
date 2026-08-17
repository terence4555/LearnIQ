import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

async function requireAdmin() {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return null;
  }
  return session;
}

export async function GET(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const module = searchParams.get("module");
  const section = searchParams.get("section");
  const status = searchParams.get("status");

  const questions = await prisma.question.findMany({
    where: {
      ...(module && { module }),
      ...(section && { section }),
      ...(status && { status }),
    },
    orderBy: { createdAt: "desc" },
    take: 50,
    select: {
      id: true,
      module: true,
      section: true,
      topic: true,
      level: true,
      difficulty: true,
      content: true,
      correctAnswer: true,
      status: true,
      createdAt: true,
    },
  });

  return NextResponse.json(questions);
}