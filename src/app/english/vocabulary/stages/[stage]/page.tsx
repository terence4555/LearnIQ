"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Quiz } from "@/components/quiz";
import type { Question, UserAnswer } from "@/types/quiz";

export default function VocabularyStageQuizPage() {
  const params = useParams();
  const router = useRouter();
  const stage = Number(params.stage);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    correctCount: number;
    total: number;
    passed: boolean;
    threshold: number;
  } | null>(null);

  useEffect(() => {
    fetch(`/api/stages/${stage}/questions?module=english&section=vocabulary`)
      .then(async (res) => {
        if (res.status === 403) {
          setLocked(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setQuestions(data);
        setLoading(false);
      });
  }, [stage]);

  async function handleComplete(answers: UserAnswer[]) {
    const res = await fetch("/api/stage-attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module: "english",
        section: "vocabulary",
        stage,
        answers: answers.map((a) => ({ questionId: a.questionId, answer: a.answer })),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setResult(data);
    }
  }

  if (loading) return <p className="p-6">Chargement...</p>;

  if (locked) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600">Cette étape est verrouillée. Valide l&apos;étape précédente d&apos;abord.</p>
        <button
          onClick={() => router.push("/english/vocabulary/stages")}
          className="mt-4 rounded bg-black px-4 py-2 text-white"
        >
          Retour aux étapes
        </button>
      </div>
    );
  }

  if (result) {
    return (
      <div className="mx-auto max-w-md space-y-4 p-6 text-center">
        <h1 className="text-xl font-bold">
          {result.passed ? "✓ Étape validée !" : "Étape non validée"}
        </h1>
        <p className="text-3xl font-bold">{result.score}%</p>
        <p className="text-sm text-gray-500">
          {result.correctCount}/{result.total} bonnes réponses — seuil requis : {result.threshold}%
        </p>

        {!result.passed && (
          <p className="text-sm text-orange-600">
            Retente cette étape pour la valider et débloquer la suivante.
          </p>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => window.location.reload()}
            className="flex-1 rounded border py-2"
          >
            Réessayer
          </button>
          <button
            onClick={() => router.push("/english/vocabulary/stages")}
            className="flex-1 rounded bg-black py-2 text-white"
          >
            Retour aux étapes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <p className="mb-4 text-center text-sm text-gray-500">
        Étape {stage} — seuil de réussite : 80%
      </p>
      <Quiz questions={questions} onComplete={handleComplete} />
    </div>
  );
}