"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { LogoIcon } from "@/components/logo-icon";

export function DashboardShell({
  children,
  userEmail,
}: {
  children: React.ReactNode;
  userEmail: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/dashboard", label: "Tableau de bord" },
    { href: "/english", label: "Anglais" },
    { href: "/toefl", label: "TOEFL" },
    { href: "/iq", label: "Test de QI" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[family-name:var(--font-body)]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/dashboard" className="flex items-center gap-2">
            <LogoIcon size={32} />
            <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-ink)]">
              LearnIQ
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--color-ink)] md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[var(--color-accent)]">
                {link.label}
              </a>
            ))}
            <button
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
              className="flex items-center gap-2 hover:text-[var(--color-accent)]"
            >
              {userEmail} <span className="text-lg">👤</span>
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center justify-center rounded border border-black/10 p-2 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-semibold text-[var(--color-ink)]">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
                className="text-left"
              >
                Déconnexion ({userEmail})
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}