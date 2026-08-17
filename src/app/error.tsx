"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold">Une erreur est survenue</h1>
      <p className="text-gray-500">
        Quelque chose s&apos;est mal passé. Réessaie, ou reviens plus tard.
      </p>
      <button
        onClick={reset}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Réessayer
      </button>
    </div>
  );
}