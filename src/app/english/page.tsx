import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
import Link from "next/link";
import { PageShell, SoftCard } from "@/components/PageShell";

const SECTIONS = [
  { key: "grammar", label: "Grammar", href: "/english/grammar/stages", description: "10 étapes, du présent simple aux conditionnels" },
  { key: "vocabulary", label: "Vocabulary", href: "/english/vocabulary/stages", description: "10 étapes, synonymes, phrasal verbs, collocations" },
  { key: "reading", label: "Reading", href: "/english/reading/stages", description: "10 étapes, textes de difficulté croissante" },
];

export default async function EnglishHubPage() {
  const session = await auth();

  const progress = await prisma.progress.findMany({
    where: { userId: session!.user.id, module: "english" },
  });

  const progressBySection = new Map(progress.map((p) => [p.section, p]));

  return (
    <PageShell
      eyebrow="Module · Anglais"
      title="English Learning"
      subtitle="Grammaire, vocabulaire et compréhension écrite"
      accent="primary"
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "English" },
      ]}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((section) => {
          const p = progressBySection.get(section.key);

          return (
            <Link
              key={section.key}
              href={section.href}
              className="block"
            >
              <SoftCard className="hover:shadow-md transition-shadow h-full">
                <h2 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-[var(--color-ink)]">{section.label}</h2>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{section.description}</p>

                <div className="mt-4">
                  {p ? (
                    <>
                      <div className="h-2 w-full rounded-full bg-[var(--color-accent-soft)]">
                        <div
                          className="h-2 rounded-full bg-[var(--color-accent)]"
                          style={{ width: `${p.completionPercentage}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-[var(--color-ink-soft)]">
                        {p.completionPercentage}% · dernier score {p.score}%
                      </p>
                    </>
                  ) : (
                    <p className="text-xs text-[var(--color-ink-soft)]">Pas encore commencé</p>
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