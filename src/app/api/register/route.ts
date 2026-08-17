import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db/prisma";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  name: z.string().min(1).max(100).optional(),
});

export async function POST(req: Request) {
  const rawBody = await req.json();
  const parsed = registerSchema.safeParse(rawBody);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Email invalide ou mot de passe trop court (8 caractères minimum)" },
      { status: 400 }
    );
  }

  const { email, password, name } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { error: "Un compte existe déjà avec cet email" },
      { status: 409 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, passwordHash, name },
  });

  return NextResponse.json({ id: user.id, email: user.email });
}