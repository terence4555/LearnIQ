"use client";

import { useEffect, useState } from "react";
import { Quiz } from "@/components/quiz";
import { PageShell, SoftCard } from "@/components/PageShell";
import type { Question, UserAnswer } from "@/types/quiz";

export default function VocabularyPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<{ score: number; correctCount: number; total: number } | null>(null);

  useEffect(() => {
    fetch("/api/questions?module=english&section=vocabulary&level=B1&limit=10")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
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
      <PageShell title="Chargement..." subtitle="Préparation du quiz">
        <SoftCard>Chargement des questions...</SoftCard>
      </PageShell>
    );

  if (result) {
    return (
      <PageShell
        title="Résultat du Quiz"
        subtitle="Vocabulary"
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

  return (
    <PageShell
      eyebrow="Module · Anglais"
      title="Vocabulary"
      subtitle="10 questions pour renforcer ton vocabulaire"
      accent="primary"
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "English", href: "/english" },
        { label: "Vocabulary" },
      ]}
    >
      <SoftCard>
        <Quiz questions={questions} onComplete={handleComplete} />
      </SoftCard>
    </PageShell>
  );
}