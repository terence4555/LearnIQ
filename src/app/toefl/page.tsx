import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
import Link from "next/link";
import { PageShell, SoftCard } from "@/components/PageShell";

const SECTIONS = [
  { key: "reading", label: "Reading", href: "/toefl/reading", description: "Textes académiques + questions", available: true },
  { key: "listening", label: "Listening", href: "/toefl/listening", description: "Lectures et conversations audio", available: true },
  { key: "speaking", label: "Speaking", href: "/toefl/speaking", description: "Réponses orales + feedback IA", available: true },
  { key: "writing", label: "Writing", href: "/toefl/writing", description: "Rédaction assistée par IA", available: true },
];

export default async function ToeflHubPage() {
  const session = await auth();

  const progress = await prisma.progress.findMany({
    where: { userId: session!.user.id, module: "toefl" },
  });

  const progressBySection = new Map(progress.map((p) => [p.section, p]));

  return (
    <PageShell
      eyebrow="Module · TOEFL iBT"
      title="Préparation TOEFL"
      subtitle="Entraîne-toi sur les 4 compétences du TOEFL"
      accent="primary"
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "TOEFL" },
      ]}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SECTIONS.map((section) => {
          const p = progressBySection.get(section.key);

          return (
            <Link
              key={section.key}
              href={section.available ? section.href : "#"}
              className={`block ${!section.available ? "pointer-events-none opacity-50" : ""}`}
            >
              <SoftCard className="hover:shadow-md transition-shadow h-full">
                <h2 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-[var(--color-ink)]">{section.label}</h2>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{section.description}</p>

                <div className="mt-4">
                  {p ? (
                    <>
                      <div className="h-2 w-full rounded-full bg-[var(--color-secondary-soft)]">
                        <div
                          className="h-2 rounded-full bg-[var(--color-secondary)]"
                          style={{ width: `${p.completionPercentage}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-[var(--color-ink-soft)]">
                        {p.completionPercentage}% · dernier score {p.score}%
                      </p>
                    </>
                  ) : section.available ? (
                    <p className="text-xs text-[var(--color-ink-soft)]">Pas encore commencé</p>
                  ) : (
                    <p className="text-xs text-[var(--color-ink-soft)]">Bientôt disponible</p>
                  )}
                </div>
              </SoftCard>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}