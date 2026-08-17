"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Stage = {
  stage: number;
  completed: boolean;
  unlocked: boolean;
  score: number | null;
  attempts: number;
  questionCount: number;
};

export default function GrammarStagesPage() {
  const router = useRouter();
  const [stages, setStages] = useState<Stage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stages?module=english&section=grammar")
      .then((res) => res.json())
      .then((data) => {
        setStages(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Chargement...</p>;

  const completedCount = stages.filter((s) => s.completed).length;

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Grammar — Parcours B1</h1>
        <p className="text-sm text-gray-500">{completedCount}/10 étapes validées</p>
        <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
          <div
            className="h-2 rounded-full bg-black"
            style={{ width: `${completedCount * 10}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {stages.map((s) => (
          <button
            key={s.stage}
            onClick={() => s.unlocked && router.push(`/english/grammar/stages/${s.stage}`)}
            disabled={!s.unlocked}
            className={`flex w-full items-center justify-between rounded-lg border p-4 text-left transition ${
              s.unlocked ? "hover:border-black cursor-pointer" : "opacity-50 cursor-not-allowed"
            } ${s.completed ? "border-green-500 bg-green-50" : ""}`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                {s.unlocked ? s.stage : "🔒"}
              </span>
              <div>
                <p className="font-medium">Étape {s.stage}</p>
                <p className="text-xs text-gray-500">{s.questionCount} questions disponibles</p>
              </div>
            </div>

            <div className="text-right text-sm">
              {s.completed ? (
                <span className="text-green-600">✓ Validée ({s.score}%)</span>
              ) : s.unlocked ? (
                s.attempts > 0 ? (
                  <span className="text-orange-600">Dernier essai : {s.score}%</span>
                ) : (
                  <span className="text-gray-400">Non commencée</span>
                )
              ) : (
                <span className="text-gray-400">Verrouillée</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}