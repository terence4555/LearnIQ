"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Stage = {
  stage: number;
  completed: boolean;
  unlocked: boolean;
  score: number | null;
  attempts: number;
  topics: string[];
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
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Grammar — Parcours B1</h1>
        <p className="text-sm text-gray-500">{completedCount}/10 étapes validées</p>
        <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
          <div className="h-2 rounded-full bg-black" style={{ width: `${completedCount * 10}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((s) => (
          <button
            key={s.stage}
            onClick={() => s.unlocked && router.push(`/english/grammar/stages/${s.stage}`)}
            disabled={!s.unlocked}
            className={`flex flex-col gap-3 rounded-xl border p-5 text-left transition ${
              s.unlocked ? "hover:border-black hover:shadow-md cursor-pointer" : "opacity-50 cursor-not-allowed"
            } ${s.completed ? "border-green-500 bg-green-50" : "bg-white"}`}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                {s.unlocked ? s.stage : "🔒"}
              </span>
              {s.completed && <span className="text-sm text-green-600">✓ {s.score}%</span>}
            </div>

            <div>
              <p className="font-semibold">Étape {s.stage}</p>
              <p className="mt-1 text-xs text-gray-500">
                {s.topics.length > 0 ? s.topics.join(" · ") : "Thème non défini"}
              </p>
            </div>

            {!s.completed && s.unlocked && s.attempts > 0 && (
              <span className="text-xs text-orange-600">Dernier essai : {s.score}%</span>
            )}
            {!s.unlocked && <span className="text-xs text-gray-400">Verrouillée</span>}
          </button>
        ))}
      </div>
    </div>
  );
}