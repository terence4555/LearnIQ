"use client";

import { useEffect, useRef, useState } from "react";
import type { Feedback } from "@/lib/ai/feedback";

type OpenPrompt = {
  id: string;
  title: string;
  prompt: string;
};

export default function ToeflSpeakingPage() {
  const [openPrompt, setOpenPrompt] = useState<OpenPrompt | null>(null);
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState<"prep" | "recording" | "review" | "done">("prep");
  const [transcript, setTranscript] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    fetch("/api/open-prompt?mode=speaking")
      .then((res) => res.json())
      .then((data) => {
        setOpenPrompt(data);
        setLoading(false);
      });

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let finalText = "";
      for (let i = 0; i < event.results.length; i++) {
        finalText += event.results[i][0].transcript + " ";
      }
      setTranscript(finalText.trim());
    };

    recognitionRef.current = recognition;
  }, []);

  function startRecording() {
    setTranscript("");
    setPhase("recording");
    recognitionRef.current?.start();
  }

  function stopRecording() {
    recognitionRef.current?.stop();
    setPhase("review");
  }

  async function handleSubmit() {
    if (!openPrompt || transcript.trim().length < 10) return;
    setSubmitting(true);

    const res = await fetch("/api/open-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ promptId: openPrompt.id, mode: "speaking", responseText: transcript }),
    });

    setSubmitting(false);

    if (res.ok) {
      const data = await res.json();
      setFeedback(data.feedback);
      setPhase("done");
    }
  }

  if (loading) return <p className="p-6">Chargement...</p>;
  if (!openPrompt) return <p className="p-6">Aucun sujet disponible.</p>;

  if (!supported) {
    return (
      <div className="p-6">
        <p className="text-orange-600">
          La reconnaissance vocale n&apos;est disponible que sur les navigateurs basés Chromium
          (Chrome, Edge, Brave...). Firefox et Safari ne l&apos;implémentent pas encore. Essaie
          avec Chrome ou Edge pour utiliser ce module.
        </p>
      </div>
    );
  }

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

        <details className="text-sm text-gray-500">
          <summary className="cursor-pointer">Voir ta transcription</summary>
          <p className="mt-2 rounded bg-gray-50 p-3">{transcript}</p>
        </details>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-6">
      <h1 className="text-xl font-bold">{openPrompt.title}</h1>
      <p className="rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">{openPrompt.prompt}</p>

      {phase === "prep" && (
        <button onClick={startRecording} className="w-full rounded bg-black py-3 text-white">
          🎤 Commencer à parler
        </button>
      )}

      {phase === "recording" && (
        <div className="space-y-3 text-center">
          <p className="animate-pulse text-red-600">● Enregistrement en cours...</p>
          <p className="min-h-[80px] rounded border bg-gray-50 p-3 text-left text-sm text-gray-600">
            {transcript || "Parle maintenant..."}
          </p>
          <button onClick={stopRecording} className="w-full rounded bg-red-600 py-3 text-white">
            ⏹ Arrêter
          </button>
        </div>
      )}

      {phase === "review" && (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">Voici ce qui a été transcrit :</p>
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            rows={6}
            className="w-full rounded border p-3 text-sm"
          />
          <p className="text-xs text-gray-400">
            Tu peux corriger la transcription si elle contient des erreurs avant de soumettre.
          </p>
          <div className="flex gap-2">
            <button onClick={startRecording} className="flex-1 rounded border py-2">
              🔁 Recommencer
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitting || transcript.trim().length < 10}
              className="flex-1 rounded bg-black py-2 text-white disabled:opacity-50"
            >
              {submitting ? "Évaluation..." : "Soumettre"}
            </button>
          </div>
        </div>
      )}
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