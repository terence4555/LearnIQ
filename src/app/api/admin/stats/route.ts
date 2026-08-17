import { NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const [
    totalUsers,
    totalAttempts,
    totalQuestions,
    publishedQuestions,
    draftQuestions,
    avgScoreResult,
    attemptsByModule,
    newUsersLast7Days,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.testAttempt.count(),
    prisma.question.count(),
    prisma.question.count({ where: { status: "published" } }),
    prisma.question.count({ where: { status: "draft" } }),
    prisma.testAttempt.aggregate({ _avg: { score: true } }),
    prisma.testAttempt.groupBy({
      by: ["module"],
      _count: { _all: true },
      _avg: { score: true },
    }),
    prisma.user.count({
      where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
    }),
  ]);

  return NextResponse.json({
    totalUsers,
    newUsersLast7Days,
    totalAttempts,
    averageScore: Math.round(avgScoreResult._avg.score ?? 0),
    totalQuestions,
    publishedQuestions,
    draftQuestions,
    attemptsByModule: attemptsByModule.map((m) => ({
      module: m.module,
      count: m._count._all,
      averageScore: Math.round(m._avg.score ?? 0),
    })),
  });
}