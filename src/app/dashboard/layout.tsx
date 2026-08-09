import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">
        <h2 className="mb-6 text-lg font-semibold">LearnIQ</h2>
        <nav className="flex flex-col gap-2 text-sm">
          <a href="/dashboard">Tableau de bord</a>
          <a href="/english">Anglais</a>
          <a href="/toefl">TOEFL</a>
          <a href="/iq">Test de QI</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Connecté en tant que {session.user?.email}
          </p>
        </header>
        {children}
      </main>
    </div>
  );
}