import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500">Cette page n&apos;existe pas.</p>
      <Link href="/dashboard" className="rounded bg-black px-4 py-2 text-white">
        Retour au tableau de bord
      </Link>
    </div>
  );
}