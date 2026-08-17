import { PublicNavbar } from "@/components/public-navbar";

const COURSES = [
  {
    title: "Anglais",
    description: "Grammaire, vocabulaire et compréhension écrite, du niveau B1 à C1.",
    icon: "📖",
    bg: "var(--color-accent-soft)",
  },
  {
    title: "TOEFL",
    description: "Reading et Listening académiques, préparation à l'examen officiel.",
    icon: "🎧",
    bg: "var(--color-secondary)",
  },
  {
    title: "Test de QI",
    description: "Évaluation indicative de tes capacités logiques et verbales.",
    icon: "🧠",
    bg: "var(--color-accent-soft)",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[family-name:var(--font-body)]">
      <PublicNavbar />

      {/* Hero */}
      <section className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="bg-[var(--color-accent-soft)] px-8 py-20 md:px-16">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-[var(--color-ink)] md:text-5xl">
            Apprendre en ligne
          </h1>
          <p className="mt-4 max-w-md text-lg text-[color:var(--color-ink-soft)]">
            Anglais, préparation TOEFL et évaluation de tes compétences — progresse à ton rythme.
          </p>
          <a
            href="/auth/register"
            className="mt-8 inline-block rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-accent-strong)]"
          >
            Commencer
          </a>
        </div>

        <div className="h-[400px] md:h-[520px]">
          <img
            src="/images/etudiant seul.png"
            alt="Étudiants apprenant en ligne"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Section cours */}
      <section id="courses" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-ink)]">
          Mes cours
        </h2>
        <p className="mt-3 max-w-xl text-[color:var(--color-ink-soft)]">
          Une plateforme pensée pour t&apos;aider à progresser, avec un suivi précis de ta progression.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {COURSES.map((course) => (
            <div key={course.title}>
              <div
                className="flex h-48 w-full items-center justify-center text-6xl"
                style={{ backgroundColor: course.bg }}
              >
                {course.icon}
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-ink)]">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section à propos, fond gris clair comme le template */}
      <section id="about" className="bg-[var(--color-bg-alt)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-ink)]">
            Pourquoi LearnIQ ?
          </h2>
          <p className="mt-4 text-[color:var(--color-ink-soft)]">
            Une approche structurée de l&apos;apprentissage de l&apos;anglais, avec un suivi de
            progression détaillé par compétence, et un contenu enrichi par intelligence artificielle
            validé avant publication.
          </p>
        </div>
      </section>

      {/* Contact simplifié */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-ink)]">
          Prêt à commencer ?
        </h2>
        <a
          href="/auth/register"
          className="mt-6 inline-block rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-accent-strong)]"
        >
          Créer un compte gratuitement
        </a>
      </section>
    </div>
  );
}