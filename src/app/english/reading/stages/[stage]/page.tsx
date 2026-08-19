"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Quiz } from "@/components/quiz";
import type { UserAnswer } from "@/types/quiz";

type Passage = {
  id: string;
  title: string;
  content: string;
  questions: {
    id: string;
    content: string;
    options: { id: string; content: string }[];
  }[];
};

export default function ReadingStageQuizPage() {
  const params = useParams();
  const router = useRouter();
  const stage = Number(params.stage);

  const [passage, setPassage] = useState<Passage | null>(null);
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(false);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    correctCount: number;
    total: number;
    passed: boolean;
    threshold: number;
    details: any[];
  } | null>(null);

  useEffect(() => {
    fetch(`/api/reading-stages/${stage}?module=english`).then(async (res) => {
      if (res.status === 403) {
        setLocked(true);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setPassage(data);
      setLoading(false);
    });
  }, [stage]);

  async function handleComplete(answers: UserAnswer[]) {
    const res = await fetch("/api/stage-attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module: "english",
        section: "reading",
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
          onClick={() => router.push("/english/reading/stages")}
          className="mt-4 rounded bg-black px-4 py-2 text-white"
        >
          Retour aux étapes
        </button>
      </div>
    );
  }

  if (!passage) return <p className="p-6">Texte introuvable.</p>;

  if (result) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 p-6">
        <div className="text-center">
          <h1 className="text-xl font-bold">
            {result.passed ? "✓ Étape validée !" : "Étape non validée"}
          </h1>
          <p className="mt-2 text-3xl font-bold">{result.score}%</p>
          <p className="text-sm text-gray-500">
            {result.correctCount}/{result.total} bonnes réponses — seuil requis : {result.threshold}%
          </p>
        </div>

        {result.details && result.details.some((d: any) => !d.isCorrect) && (
          <div className="space-y-3">
            <h2 className="font-semibold text-gray-700">Corrections</h2>
            {result.details
              .filter((d: any) => !d.isCorrect)
              .map((d: any, i: number) => (
                <div key={i} className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="text-sm font-medium">{d.content}</p>
                  <p className="mt-2 text-sm text-red-700">
                    Ta réponse : <span className="font-medium">{d.yourAnswer}</span>
                  </p>
                  <p className="text-sm text-green-700">
                    Bonne réponse : <span className="font-medium">{d.correctAnswer}</span>
                  </p>
                  {d.explanation && (
                    <p className="mt-1 text-xs text-gray-500">{d.explanation}</p>
                  )}
                </div>
              ))}
          </div>
        )}

        <div className="flex gap-2">
          <button onClick={() => window.location.reload()} className="flex-1 rounded border py-2">
            Réessayer
          </button>
          <button
            onClick={() => router.push("/english/reading/stages")}
            className="flex-1 rounded bg-black py-2 text-white"
          >
            Retour aux étapes
          </button>
        </div>
      </div>
    );
  }
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl space-y-4 p-6">
        <h1 className="text-xl font-bold">{passage.title}</h1>
        <p className="whitespace-pre-line leading-relaxed text-gray-700">{passage.content}</p>
        <button onClick={() => setStarted(true)} className="rounded bg-black px-4 py-2 text-white">
          Commencer les questions
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Quiz
        questions={passage.questions.map((q) => ({
          ...q,
          module: "english",
          section: "reading",
          level: "B1",
          difficulty: 1,
          type: "MCQ" as const,
        }))}
        onComplete={handleComplete}
      />
    </div>
  );
}