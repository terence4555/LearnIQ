/**
 * PageShell — template de page pour landing / dashboard / english / toefl
 * ---------------------------------------------------------------------
 * Direction : template Wix "Tuteur" — fond crème uni, un accent sauge
 * (+ un accent terracotta en soutien), typo sans-serif arrondie et
 * grasse, cartes très arrondies + ombre douce, boutons pilule.
 *
 * ⚠️ Ne pas utiliser sur /admin — le back-office garde l'ancien
 * système "papier d'examen" → voir AdminPageShell.tsx.
 *
 * Emplacement suggéré : src/components/layout/PageShell.tsx
 *
 * Prérequis dans app/layout.tsx (next/font/google) :
 *   const poppins = Poppins({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-poppins" });
 *   const dmSans  = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
 * puis <body className={`${poppins.variable} ${dmSans.variable}`}>
 *
 * Et dans globals.css, importer tokens.css (--color-*, --font-heading, --font-body).
 *
 * Usage :
 *
 *   <PageShell
 *     eyebrow="Module · Anglais B1"
 *     title="Grammar"
 *     subtitle="19 sous-thèmes, du présent simple aux conditionnels."
 *     accent="secondary"
 *     breadcrumbs={[
 *       { label: "Dashboard", href: "/dashboard" },
 *       { label: "English", href: "/english" },
 *       { label: "Grammar" },
 *     ]}
 *     stats={[{ label: "Progression", value: "76%" }]}
 *     actions={<PillButton href="/english/grammar/quiz">Commencer</PillButton>}
 *   >
 *     <SoftCard>...</SoftCard>
 *   </PageShell>
 */

import type { ReactNode } from "react";
import Link from "next/link";

type Accent = "primary" | "secondary";

const ACCENT_STYLES: Record<Accent, { text: string; bg: string; ring: string }> = {
  primary: {
    text: "text-[var(--color-accent-strong)]",
    bg: "bg-[var(--color-accent-soft)]",
    ring: "ring-1 ring-[var(--color-accent)]/25",
  },
  secondary: {
    text: "text-[var(--color-secondary)]",
    bg: "bg-[var(--color-secondary-soft)]",
    ring: "ring-1 ring-[var(--color-secondary)]/25",
  },
};

interface Breadcrumb {
  label: string;
  href?: string;
}

interface Stat {
  label: string;
  value: string;
}

interface PageShellProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  accent?: Accent;
  stats?: Stat[];
  actions?: ReactNode;
  children: ReactNode;
  maxWidth?: "default" | "wide" | "narrow";
}

const MAX_WIDTH_CLASS: Record<NonNullable<PageShellProps["maxWidth"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
};

export function PageShell({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  accent = "primary",
  stats,
  actions,
  children,
  maxWidth = "default",
}: PageShellProps) {
  const style = ACCENT_STYLES[accent];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[family-name:var(--font-body)]">
      <div className={`mx-auto px-6 py-12 sm:px-8 ${MAX_WIDTH_CLASS[maxWidth]}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Fil d'ariane" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label} className="flex items-center gap-2">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="rounded-[var(--radius-pill)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink-soft)] shadow-sm transition-colors hover:text-[var(--color-ink)]"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className={`rounded-[var(--radius-pill)] px-3 py-1.5 text-xs font-medium ${style.bg} ${style.text}`}
                      >
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && <span className="text-[var(--color-rule)]">›</span>}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <header className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            {eyebrow && (
              <span
                className={`mb-3 inline-block rounded-[var(--radius-pill)] px-3 py-1 text-xs font-semibold uppercase tracking-wide ${style.bg} ${style.text}`}
              >
                {eyebrow}
              </span>
            )}
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
                {subtitle}
              </p>
            )}
          </div>

          {(stats && stats.length > 0) || actions ? (
            <div className="flex flex-shrink-0 flex-col items-start gap-4 sm:items-end">
              {stats && stats.length > 0 && (
                <dl className="flex flex-wrap gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-2xl px-4 py-2.5 ${style.bg} ${style.ring}`}
                    >
                      <dt className="text-[10px] font-medium uppercase tracking-wide text-[var(--color-ink-soft)]">
                        {stat.label}
                      </dt>
                      <dd
                        className={`font-[family-name:var(--font-heading)] text-lg font-semibold ${style.text}`}
                      >
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              {actions && <div className="flex gap-3">{actions}</div>}
            </div>
          ) : null}
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}

/**
 * Carte arrondie avec ombre douce — équivalent des blocs de contenu
 * du template Wix (feature card, bloc quiz, bloc statistique...).
 */
export function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-card)] bg-[var(--color-surface)] p-6 shadow-[0_4px_24px_-4px_rgba(43,42,39,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Bouton pilule — CTA principal, dans l'esprit des boutons Wix
 * "Réserver un cours" / "S'inscrire".
 */
export function PillButton({
  children,
  href,
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-2.5 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-ink)]/15 bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface)]";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
