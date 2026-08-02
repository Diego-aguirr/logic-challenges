"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const categories = [
  { label: "Fundamentos", href: "/ejercicios?cat=fundamentos" },
  { label: "Cadenas", href: "/ejercicios?cat=cadenas" },
  { label: "Arreglos", href: "/ejercicios?cat=arreglos" },
  { label: "Objetos", href: "/ejercicios?cat=objetos" },
  { label: "Lógica", href: "/ejercicios?cat=logica" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Code2 className="h-6 w-6 text-primary" />
          <span>Lógica</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-2 pt-2">
            {categories.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
