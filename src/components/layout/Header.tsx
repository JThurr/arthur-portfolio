"use client";

import {Github, Menu, X} from "lucide-react";
import {useTranslations} from "next-intl";
import {useState} from "react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import ThemeToggle from "@/components/ui/ThemeToggle";
import {cn, scrollToSection} from "@/lib/utils";

const navItems = [
  {id: "about", labelKey: "about"},
  {id: "skills", labelKey: "skills"},
  {id: "projects", labelKey: "projects"},
  {id: "contact", labelKey: "contact"}
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavClick(sectionId: string) {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--color-border)] bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="container-portfolio flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-3 rounded-lg text-left"
          aria-label="Voltar ao início"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-sm font-black text-white">
            JA
          </span>
          <span className="hidden text-sm font-bold text-[color:var(--color-text-primary)] sm:block">
            José Arthur
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--color-text-secondary)] transition-colors hover:text-accent"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/JThurr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir GitHub de José Arthur"
            className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-text-secondary)] transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-text-primary)]"
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)] md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container-portfolio flex flex-col gap-2 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-card)]"
            >
              {t(item.labelKey)}
            </button>
          ))}
          <div className="mt-2 flex items-center justify-between gap-3">
            <LanguageToggle />
            <a
              href="https://github.com/JThurr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 text-sm font-semibold text-[color:var(--color-text-primary)]"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
