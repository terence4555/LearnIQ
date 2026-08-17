"use client";

import { useEffect, useState } from "react";
import { Quiz } from "@/components/quiz";
import type { Question, UserAnswer } from "@/types/quiz";

type ExamStatus = {
  eligible: boolean;
  alreadyPassed: boolean;
  sectionsStatus: { section: string; completedStages: number; total: number; ready: boolean }[];
  lastAttempt: { score: number; passed: boolean; completedAt: string } | null;
};

export default function LevelExamPage() {
  const [status, setStatus] = useState<ExamStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<{
    score: number;
    correctCount: number;
    total: number;
    passed: boolean;
    threshold: number;
    nextLevel: string | null;
  } | null>(null);

  useEffect(() => {
    fetch("/api/level-exam?module=english&level=B1")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setLoading(false);
      });
  }, []);

  async function startExam() {
    const res = await fetch("/api/level-exam/questions?module=english&level=B1");
    const data = await res.json();
    setQuestions(data);
    setStarted(true);
  }

  async function handleComplete(answers: UserAnswer[]) {
    const res = await fetch("/api/level-exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module: "english",
        level: "B1",
        answers: answers.map((a) => ({ questionId: a.questionId, answer: a.answer })),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setResult(data);
    }
  }

  if (loading) return <p className="p-6">Chargement...</p>;
  if (!status) return <p className="p-6">Erreur de chargement.</p>;

  if (result) {
    return (
      <div className="mx-auto max-w-md space-y-4 p-6 text-center">
        <h1 className="text-2xl font-bold">
          {result.passed ? "🎉 Niveau B1 validé !" : "Examen non réussi"}
        </h1>
        <p className="text-4xl font-bold">{result.score}%</p>
        <p className="text-sm text-gray-500">
          {result.correctCount}/{result.total} bonnes réponses — seuil requis : {result.threshold}%
        </p>

        {result.passed ? (
          <p className="text-green-600">
            {result.nextLevel
              ? `Niveau ${result.nextLevel} débloqué !`
              : "Félicitations, tu as complété tous les niveaux disponibles."}
          </p>
        ) : (
          <p className="text-orange-600">
            Retravaille tes points faibles et retente l&apos;examen quand tu es prêt.
          </p>
        )}

        <a href="/english" className="block rounded bg-black py-2 text-white">
          Retour au module Anglais
        </a>
      </div>
    );
  }

  if (started) {
    return (
      <div className="p-6">
        <p className="mb-4 text-center text-sm text-gray-500">
          Examen de niveau B1 — 20 questions, seuil de réussite : 80%
        </p>
        <Quiz questions={questions} onComplete={handleComplete} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      <h1 className="text-2xl font-bold">Examen de niveau B1</h1>

      {status.alreadyPassed && (
        <p className="rounded bg-green-50 p-3 text-sm text-green-700">
          Tu as déjà validé ce niveau ✓
        </p>
      )}

      <div className="space-y-2">
        {status.sectionsStatus.map((s) => (
          <div key={s.section} className="flex items-center justify-between rounded border p-3 text-sm">
            <span className="capitalize">{s.section}</span>
            <span className={s.ready ? "text-green-600" : "text-gray-400"}>
              {s.completedStages}/{s.total} étapes {s.ready ? "✓" : ""}
            </span>
          </div>
        ))}
      </div>

      {status.eligible ? (
        <button onClick={startExam} className="w-full rounded bg-black py-3 text-white">
          Commencer l&apos;examen
        </button>
      ) : (
        <p className="text-center text-sm text-orange-600">
          Complète toutes les étapes de chaque section pour débloquer l&apos;examen.
        </p>
      )}
    </div>
  );
}