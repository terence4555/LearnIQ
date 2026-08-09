"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Une erreur est survenue");
      setLoading(false);
      return;
    }

    // Connecte automatiquement après inscription
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-lg border p-6"
      >
        <h1 className="text-xl font-semibold">Créer un compte</h1>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded border px-3 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black py-2 text-white disabled:opacity-50"
        >
          {loading ? "Création..." : "S'inscrire"}
        </button>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full rounded border py-2"
        >
          Continuer avec Google
        </button>

        <p className="text-sm">
          Déjà un compte ?{" "}
          <a href="/auth/login" className="underline">
            Se connecter
          </a>
        </p>
      </form>
    </div>
  );
}