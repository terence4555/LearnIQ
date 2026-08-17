import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
import { PageShell, SoftCard } from "@/components/PageShell";

export default async function DashboardPage() {
  const session = await auth();

  const [attemptsCount, progress, lastAttempt] = await Promise.all([
    prisma.testAttempt.count({
      where: { userId: session!.user.id },
    }),
    prisma.progress.findMany({
      where: { userId: session!.user.id },
    }),
    prisma.testAttempt.findFirst({
      where: { userId: session!.user.id },
      orderBy: { completedAt: "desc" },
    }),
  ]);

  const globalProgress =
    progress.length > 0
      ? Math.round(
          progress.reduce((sum, p) => sum + p.completionPercentage, 0) /
            progress.length
        )
      : 0;

  return (
    <PageShell
      title="Tableau de bord"
      subtitle="Suivi de ta progression globale"
      accent="primary"
      stats={[
        { label: "Progression", value: `${globalProgress}%` },
        { label: "Tests réalisés", value: String(attemptsCount) },
      ]}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SoftCard>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-soft)] mb-2">Progression globale</p>
          <p className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-ink)]">{globalProgress}%</p>
        </SoftCard>
        <SoftCard>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-soft)] mb-2">Niveau actuel</p>
          <p className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-ink)]">B1</p>
        </SoftCard>
        <SoftCard>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-soft)] mb-2">Tests réalisés</p>
          <p className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-ink)]">{attemptsCount}</p>
        </SoftCard>
        <SoftCard>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-soft)] mb-2">Dernier score</p>
          <p className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-ink)]">
            {lastAttempt?.score != null ? `${lastAttempt.score}%` : "—"}
          </p>
        </SoftCard>
      </div>

      {progress.length > 0 && (
        <SoftCard className="mt-6">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] font-semibold text-[var(--color-ink)]">
            Progression par section
          </h2>
          <div className="space-y-2">
            {progress.map((p) => (
              <div key={p.id} className="flex items-center justify-between text-sm">
                <span className="capitalize text-[var(--color-ink)]">{p.module} — {p.section}</span>
                <span className="font-medium text-[var(--color-ink-soft)]">{p.score}%</span>
              </div>
            ))}
          </div>
        </SoftCard>
      )}
    </PageShell>
  );
}