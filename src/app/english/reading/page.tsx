"use client";

import { useEffect, useState } from "react";
import { Quiz } from "@/components/quiz";
import { PageShell, SoftCard } from "@/components/PageShell";
import type { Question, UserAnswer } from "@/types/quiz";

type Passage = {
  id: string;
  title: string;
  content: string;
  questions: Question[];
};

export default function ReadingPage() {
  const [passage, setPassage] = useState<Passage | null>(null);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<{ score: number; correctCount: number; total: number } | null>(null);

  useEffect(() => {
    fetch("/api/reading")
      .then((res) => res.json())
      .then((data) => {
        setPassage(data);
        setLoading(false);
      });
  }, []);

  async function handleComplete(answers: UserAnswer[]) {
    const res = await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ module: "english", answers }),
    });

    if (res.ok) {
      const data = await res.json();
      setResult(data);
    }
  }

  if (loading)
    return (
      <PageShell title="Chargement..." subtitle="Préparation du texte">
        <SoftCard>Chargement du passage...</SoftCard>
      </PageShell>
    );
  if (!passage)
    return (
      <PageShell title="Pas de contenu" subtitle="">
        <SoftCard>Aucun texte disponible pour le moment.</SoftCard>
      </PageShell>
    );

  if (result) {
    return (
      <PageShell
        title="Résultat du Quiz"
        subtitle="Reading Comprehension"
        accent="primary"
        stats={[
          { label: "Score", value: `${result.score}%` },
          { label: "Correctes", value: `${result.correctCount}/${result.total}` },
        ]}
      >
        <SoftCard>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-ink)] mb-4">
            Excellent !
          </h2>
          <p className="text-[var(--color-ink-soft)]">
            Tu as obtenu {result.correctCount} réponses correctes sur {result.total}.
          </p>
        </SoftCard>
      </PageShell>
    );
  }

  if (!started) {
    return (
      <PageShell
        eyebrow="Module · Anglais"
        title="Reading Comprehension"
        subtitle="Lis le passage puis réponds aux questions"
        accent="primary"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "English", href: "/english" },
          { label: "Reading" },
        ]}
      >
        <SoftCard className="mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-ink)] mb-4">
            {passage.title}
          </h2>
          <p className="whitespace-pre-line leading-relaxed text-[var(--color-ink-soft)]">
            {passage.content}
          </p>
        </SoftCard>
        <SoftCard>
          <button
            onClick={() => setStarted(true)}
            className="rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-2.5 font-semibold text-white hover:bg-[var(--color-accent-strong)] transition-colors"
          >
            Commencer les questions
          </button>
        </SoftCard>
      </PageShell>
    );
  }

  return (
    <PageShell
      eyebrow="Module · Anglais"
      title="Reading Comprehension"
      subtitle="Réponds aux questions sur le texte"
      accent="primary"
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "English", href: "/english" },
        { label: "Reading" },
      ]}
    >
      <SoftCard>
        <Quiz questions={passage.questions.map((q) => ({ ...q, module: "english", section: "reading", level: "B1", difficulty: 1, type: "MCQ" as const }))} onComplete={handleComplete} />
      </SoftCard>
    </PageShell>
  );
}