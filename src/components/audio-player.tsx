"use client";

import { useState, useRef } from "react";

type AudioPlayerProps = {
  text: string;
  onFinished?: () => void;
};

export function AudioPlayer({ text, onFinished }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  function play() {
    if (!("speechSynthesis" in window)) {
      alert("Ton navigateur ne supporte pas la synthèse vocale.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setHasPlayed(true);
      onFinished?.();
    };
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }

  return (
    <div className="rounded-lg border p-6 text-center">
      <p className="mb-4 text-sm text-gray-500">
        {hasPlayed
          ? "Écoute terminée. Tu peux réécouter si besoin."
          : "Écoute attentivement, le texte ne sera pas affiché."}
      </p>

      <button
        onClick={isPlaying ? stop : play}
        className="rounded-full bg-black px-6 py-3 text-white"
      >
        {isPlaying ? "⏸ Arrêter" : hasPlayed ? "🔁 Réécouter" : "▶ Écouter"}
      </button>
    </div>
  );
}