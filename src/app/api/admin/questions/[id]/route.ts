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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();

  const question = await prisma.question.update({
    where: { id },
    data: {
      ...(body.content !== undefined && { content: body.content }),
      ...(body.status !== undefined && { status: body.status }),
      ...(body.difficulty !== undefined && { difficulty: body.difficulty }),
      ...(body.topic !== undefined && { topic: body.topic }),
    },
  });

  return NextResponse.json(question);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { id } = await params;
  await prisma.question.delete({ where: { id } });

  return NextResponse.json({ success: true });
}