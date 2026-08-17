"use client";

import { useEffect, useState } from "react";

type AdminQuestion = {
  id: string;
  module: string;
  section: string;
  topic: string | null;
  level: string;
  difficulty: number;
  content: string;
  correctAnswer: string;
  status: string;
  createdAt: string;
};

export default function AdminQuestionsPage() {
  const [questions, setQuestions] = useState<AdminQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterModule, setFilterModule] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  async function load() {
    setLoading(true);
    const params = new URLSearchParams();
    if (filterModule) params.set("module", filterModule);
    if (filterStatus) params.set("status", filterStatus);

    const res = await fetch(`/api/admin/questions?${params.toString()}`);
    const data = await res.json();
    setQuestions(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterModule, filterStatus]);

  async function toggleStatus(q: AdminQuestion) {
    const newStatus = q.status === "published" ? "draft" : "published";
    await fetch(`/api/admin/questions/${q.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    load();
  }

  async function remove(id: string) {
    if (!confirm("Supprimer cette question ?")) return;
    await fetch(`/api/admin/questions/${id}`, { method: "DELETE" });
    load();
  }

  function startEdit(q: AdminQuestion) {
    setEditingId(q.id);
    setEditContent(q.content);
  }

  async function saveEdit(id: string) {
    await fetch(`/api/admin/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: editContent }),
    });
    setEditingId(null);
    load();
  }

  const draftCount = questions.filter((q) => q.status === "draft").length;

  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gestion des questions</h1>
          {filterStatus === "draft" && (
            <p className="text-sm text-gray-500">{draftCount} question(s) en attente de validation</p>
          )}
        </div>
        <a href="/admin/generate" className="rounded bg-black px-4 py-2 text-sm text-white">
          + Générer avec l&apos;IA
        </a>
      </div>

      <div className="flex gap-2">
        <select
          value={filterModule}
          onChange={(e) => setFilterModule(e.target.value)}
          className="rounded border px-2 py-1 text-sm"
        >
          <option value="">Tous les modules</option>
          <option value="english">English</option>
          <option value="toefl">TOEFL</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded border px-2 py-1 text-sm"
        >
          <option value="">Tous les statuts</option>
          <option value="draft">Draft (à valider)</option>
          <option value="published">Published</option>
        </select>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : questions.length === 0 ? (
        <p className="text-sm text-gray-500">Aucune question ne correspond à ces filtres.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="p-2">Contenu</th>
                <th className="p-2">Bonne réponse</th>
                <th className="p-2">Module / Section / Topic</th>
                <th className="p-2">Statut</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="border-b align-top">
                  <td className="max-w-sm p-2">
                    {editingId === q.id ? (
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="w-full rounded border p-1 text-sm"
                        rows={3}
                      />
                    ) : (
                      q.content
                    )}
                  </td>
                  <td className="p-2 text-green-700">{q.correctAnswer}</td>
                  <td className="p-2">{q.module} / {q.section} / {q.topic ?? "—"}</td>
                  <td className="p-2">
                    <span className={`rounded px-2 py-0.5 text-xs ${q.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="space-y-1 p-2">
                    {editingId === q.id ? (
                      <div className="space-x-2">
                        <button onClick={() => saveEdit(q.id)} className="text-blue-600 underline">
                          Enregistrer
                        </button>
                        <button onClick={() => setEditingId(null)} className="text-gray-500 underline">
                          Annuler
                        </button>
                      </div>
                    ) : (
                      <div className="space-x-2">
                        <button onClick={() => startEdit(q)} className="text-gray-700 underline">
                          Modifier
                        </button>
                        <button onClick={() => toggleStatus(q)} className="text-blue-600 underline">
                          {q.status === "published" ? "Dépublier" : "✓ Valider & publier"}
                        </button>
                        <button onClick={() => remove(q.id)} className="text-red-600 underline">
                          Rejeter
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        </div>
      );
}