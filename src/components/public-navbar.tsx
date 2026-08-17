"use client";

import { useState } from "react";
import { LogoIcon } from "@/components/logo-icon";

export function PublicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#courses", label: "Cours" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2">
          <LogoIcon />
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
          <a
            href="/auth/login"
            className="rounded-[var(--radius-pill)] border border-[var(--color-ink)]/15 px-4 py-1.5 hover:bg-[var(--color-bg-alt)]"
          >
            Connexion
          </a>
          <a
            href="/auth/register"
            className="rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-4 py-1.5 text-white hover:bg-[var(--color-accent-strong)]"
          >
            S&apos;inscrire
          </a>
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
            <a href="/auth/login" className="font-semibold text-[var(--color-accent)]">
              Connexion
            </a>
            <a href="/auth/register" className="font-semibold text-[var(--color-accent)]">
              S&apos;inscrire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}