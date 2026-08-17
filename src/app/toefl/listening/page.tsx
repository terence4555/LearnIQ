"use client";

import { useEffect, useState } from "react";
import { Quiz } from "@/components/quiz";
import { AudioPlayer } from "@/components/audio-player";
import { PageShell, SoftCard } from "@/components/PageShell";
import type { Question, UserAnswer } from "@/types/quiz";

type Passage = {
  id: string;
  title: string;
  content: string;
  questions: Question[];
};

export default function ToeflListeningPage() {
  const [passage, setPassage] = useState<Passage | null>(null);
  const [loading, setLoading] = useState(true);
  const [canProceed, setCanProceed] = useState(false);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<{ score: number; correctCount: number; total: number } | null>(null);

  useEffect(() => {
    fetch("/api/reading?module=toefl&mode=listening")
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
      body: JSON.stringify({ module: "toefl", answers }),
    });

    if (res.ok) {
      const data = await res.json();
      setResult(data);
    }
  }

  if (loading)
    return (
      <PageShell title="Chargement..." subtitle="Préparation de l'audio">
        <SoftCard>Chargement du passage audio...</SoftCard>
      </PageShell>
    );
  if (!passage)
    return (
      <PageShell title="Pas de contenu" subtitle="">
        <SoftCard>Aucun extrait disponible pour le moment.</SoftCard>
      </PageShell>
    );

  if (result) {
    return (
      <PageShell
        title="Résultat du Quiz"
        subtitle="TOEFL Listening"
        accent="secondary"
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
        eyebrow="Module · TOEFL"
        title="Listening Comprehension"
        subtitle="Écoute l'extrait en entier avant de répondre aux questions"
        accent="secondary"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "TOEFL", href: "/toefl" },
          { label: "Listening" },
        ]}
      >
        <SoftCard className="mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-ink)] mb-4">
            {passage.title}
          </h2>
          <AudioPlayer text={passage.content} onFinished={() => setCanProceed(true)} />
        </SoftCard>
        <SoftCard>
          <button
            onClick={() => setStarted(true)}
            disabled={!canProceed}
            className="w-full rounded-[var(--radius-pill)] bg-[var(--color-secondary)] px-6 py-2.5 font-semibold text-white hover:bg-[var(--color-accent-strong)] disabled:opacity-50 transition-colors"
          >
            {canProceed ? "Passer aux questions" : "Écoute d'abord l'extrait en entier"}
          </button>
        </SoftCard>
      </PageShell>
    );
  }

  return (
    <PageShell
      eyebrow="Module · TOEFL"
      title="Listening Comprehension"
      subtitle="Réponds aux questions sur l'extrait audio"
      accent="secondary"
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "TOEFL", href: "/toefl" },
        { label: "Listening" },
      ]}
    >
      <SoftCard>
        <Quiz
          questions={passage.questions.map((q) => ({
            ...q,
            module: "toefl",
            section: "listening",
            level: "toefl",
            difficulty: 3,
            type: "MCQ" as const,
          }))}
          onComplete={handleComplete}
        />
      </SoftCard>
    </PageShell>
  );
}