"use client";

import { useEffect, useState } from "react";
import type { Feedback } from "@/lib/ai/feedback";

type OpenPrompt = {
  id: string;
  title: string;
  prompt: string;
};

export default function ToeflWritingPage() {
  const [openPrompt, setOpenPrompt] = useState<OpenPrompt | null>(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    fetch("/api/open-prompt?mode=writing")
      .then((res) => res.json())
      .then((data) => {
        setOpenPrompt(data);
        setLoading(false);
      });
  }, []);

  async function handleSubmit() {
    if (!openPrompt || response.trim().length < 10) return;
    setSubmitting(true);

    const res = await fetch("/api/open-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ promptId: openPrompt.id, mode: "writing", responseText: response }),
    });

    setSubmitting(false);

    if (res.ok) {
      const data = await res.json();
      setFeedback(data.feedback);
    }
  }

  if (loading) return <p className="p-6">Chargement...</p>;
  if (!openPrompt) return <p className="p-6">Aucun sujet disponible.</p>;

  const wordCount = response.trim().split(/\s+/).filter(Boolean).length;

  if (feedback) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 p-6">
        <h1 className="text-xl font-bold">Feedback IA</h1>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <ScoreBox label="Grammar" value={feedback.scores.grammar} />
          <ScoreBox label="Vocabulary" value={feedback.scores.vocabulary} />
          <ScoreBox label="Coherence" value={feedback.scores.coherence} />
          <ScoreBox label="Task Response" value={feedback.scores.taskResponse} />
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Score global</p>
          <p className="text-3xl font-bold">{feedback.overallScore}/100</p>
        </div>

        <p className="text-sm text-gray-700">{feedback.summary}</p>

        <div>
          <h2 className="mb-2 font-semibold text-green-700">Points forts</h2>
          <ul className="list-inside list-disc text-sm text-gray-700">
            {feedback.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 font-semibold text-orange-700">À améliorer</h2>
          <ul className="list-inside list-disc text-sm text-gray-700">
            {feedback.improvements.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-6">
      <h1 className="text-xl font-bold">{openPrompt.title}</h1>
      <p className="rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">{openPrompt.prompt}</p>

      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        rows={12}
        placeholder="Écris ta réponse ici (250 mots minimum recommandé)..."
        className="w-full rounded border p-3 text-sm"
      />

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{wordCount} mots</span>
      </div>

      <button
        onClick={handleSubmit}
        disabled={submitting || response.trim().length < 10}
        className="w-full rounded bg-black py-2 text-white disabled:opacity-50"
      >
        {submitting ? "Évaluation en cours (IA)..." : "Soumettre pour évaluation"}
      </button>
    </div>
  );
}

function ScoreBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border p-3 text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}