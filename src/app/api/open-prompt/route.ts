import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("mode");

  if (mode !== "writing" && mode !== "speaking") {
    return NextResponse.json({ error: "mode invalide" }, { status: 400 });
  }

  const count = await prisma.openPrompt.count({ where: { mode } });
  if (count === 0) {
    return NextResponse.json(null);
  }

  const skip = Math.floor(Math.random() * count);
  const openPrompt = await prisma.openPrompt.findFirst({
    where: { mode },
    skip,
    select: { id: true, title: true, prompt: true },
  });

  return NextResponse.json(openPrompt);
}