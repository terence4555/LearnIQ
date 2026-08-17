"use client";

import { useState, useEffect } from "react";
import type { Question, UserAnswer } from "@/types/quiz";

type QuizProps = {
  questions: Question[];
  onComplete: (answers: UserAnswer[]) => void;
};

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [startTime, setStartTime] = useState(Date.now());

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  useEffect(() => {
    setStartTime(Date.now());
    setSelected(null);
  }, [currentIndex]);

  function handleNext() {
    if (!selected) return;

    const responseTime = Math.round((Date.now() - startTime) / 1000);
    const newAnswers = [
      ...answers,
      { questionId: current.id, answer: selected, responseTime },
    ];
    setAnswers(newAnswers);

    if (isLast) {
      onComplete(newAnswers);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  if (!current) {
    return <p>Aucune question disponible.</p>;
  }

  return (
    <div className="mx-auto max-w-xl space-y-6 px-4">
      <div className="text-sm text-gray-500">
        Question {currentIndex + 1} / {questions.length}
      </div>

      <h2 className="text-lg font-semibold">{current.content}</h2>

      <div className="space-y-2">
        {current.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelected(opt.content)}
            className={`w-full rounded border px-4 py-2 text-left transition ${
              selected === opt.content
                ? "border-black bg-gray-100"
                : "border-gray-300"
            }`}
          >
            {opt.content}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!selected}
        className="w-full rounded bg-black py-2 text-white disabled:opacity-50"
      >
        {isLast ? "Terminer" : "Suivant"}
      </button>
    </div>
  );
}