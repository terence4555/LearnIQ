"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

type Stats = {
  totalUsers: number;
  newUsersLast7Days: number;
  totalAttempts: number;
  averageScore: number;
  totalQuestions: number;
  publishedQuestions: number;
  draftQuestions: number;
  attemptsByModule: { module: string; count: number; averageScore: number }[];
};

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Administration</h1>
        <button
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
          className="text-sm text-red-600 underline"
        >
          Déconnexion
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Chargement des statistiques...</p>
      ) : stats ? (
        <>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Utilisateurs</p>
              <p className="text-2xl font-semibold">{stats.totalUsers}</p>
              <p className="text-xs text-gray-400">+{stats.newUsersLast7Days} cette semaine</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Tentatives totales</p>
              <p className="text-2xl font-semibold">{stats.totalAttempts}</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Score moyen</p>
              <p className="text-2xl font-semibold">{stats.averageScore}%</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Questions</p>
              <p className="text-2xl font-semibold">{stats.totalQuestions}</p>
              <p className="text-xs text-gray-400">
                {stats.publishedQuestions} publiées · {stats.draftQuestions} brouillons
              </p>
            </div>
          </div>

          {stats.attemptsByModule.length > 0 && (
            <div className="rounded-lg border p-4">
              <h2 className="mb-3 font-semibold">Activité par module</h2>
              <div className="space-y-2">
                {stats.attemptsByModule.map((m) => (
                  <div key={m.module} className="flex items-center justify-between text-sm">
                    <span className="capitalize">{m.module}</span>
                    <span className="text-gray-500">
                      {m.count} tentative(s) · score moyen {m.averageScore}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-sm text-red-600">Impossible de charger les statistiques.</p>
      )}

      <div className="flex gap-4">
        <a href="/admin/questions" className="rounded border p-4 hover:border-black">
          Gestion des questions
        </a>
      </div>
    </div>
  );
}