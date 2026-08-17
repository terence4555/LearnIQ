"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGeneratePage() {
  const router = useRouter();
  const [module, setModule] = useState("english");
  const [section, setSection] = useState("grammar");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("B1");
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/admin/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ module, section, topic, level, count }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setMessage(`Erreur : ${data.error}`);
      return;
    }

    setMessage(`${data.count} questions générées en brouillon.`);
  }

  return (
    <div className="mx-auto max-w-lg space-y-4 p-6">
      <h1 className="text-2xl font-bold">Générer des questions avec l&apos;IA</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Module</label>
          <select value={module} onChange={(e) => setModule(e.target.value)} className="w-full rounded border px-3 py-2">
            <option value="english">English</option>
            <option value="toefl">TOEFL</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Section</label>
          <select value={section} onChange={(e) => setSection(e.target.value)} className="w-full rounded border px-3 py-2">
            <option value="grammar">Grammar</option>
            <option value="vocabulary">Vocabulary</option>
            <option value="reading">Reading</option>
            <option value="listening">Listening</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Sujet / Topic précis</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="ex: Third Conditional"
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Niveau</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full rounded border px-3 py-2">
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="toefl">TOEFL</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Nombre de questions</label>
          <input
            type="number"
            min={1}
            max={20}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black py-2 text-white disabled:opacity-50"
        >
          {loading ? "Génération en cours..." : "Générer"}
        </button>
      </form>

      {message && <p className="text-sm">{message}</p>}

      <a href="/admin/questions?status=draft" className="block text-sm text-blue-600 underline">
        Voir les brouillons générés →
      </a>
    </div>
  );
}