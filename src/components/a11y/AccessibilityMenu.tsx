"use client";

// Menu flutuante de acessibilidade.
// Recursos:
//   • Aumentar/diminuir o zoom da página (baixa visão)
//   • Alto contraste (baixa visão / daltonismo)
//   • Leitura em voz alta do conteúdo (cegueira / dificuldade de leitura)
// As preferências de zoom e contraste são persistidas em localStorage.

import {useTranslations, useLocale} from "next-intl";
import {useCallback, useEffect, useRef, useState} from "react";
import {
  Accessibility,
  Minus,
  Plus,
  RotateCcw,
  Contrast,
  Volume2,
  Square,
  X
} from "lucide-react";
import {cn} from "@/lib/utils";

// Níveis de zoom disponíveis (1 = 100%).
const ZOOM_LEVELS = [1, 1.15, 1.3, 1.5] as const;

// Mapeia o locale do site para o código de idioma usado pela síntese de voz.
const SPEECH_LANG: Record<string, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
};

export default function AccessibilityMenu() {
  const t = useTranslations("a11y");
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // ── Aplica o zoom no documento e persiste a preferência ──
  const applyZoom = useCallback((index: number) => {
    const zoom = ZOOM_LEVELS[index] ?? 1;
    // `zoom` escala todo o layout (texto, imagens, espaçamentos).
    document.documentElement.style.setProperty("zoom", String(zoom));
    window.localStorage.setItem("a11y-zoom", String(index));
  }, []);

  // ── Aplica o alto contraste via classe no <html> e persiste ──
  const applyContrast = useCallback((enabled: boolean) => {
    document.documentElement.classList.toggle("a11y-contrast", enabled);
    window.localStorage.setItem("a11y-contrast", enabled ? "1" : "0");
  }, []);

  // Restaura as preferências salvas ao montar o componente.
  useEffect(() => {
    const savedZoom = Number(window.localStorage.getItem("a11y-zoom") ?? "0");
    const savedContrast = window.localStorage.getItem("a11y-contrast") === "1";
    setZoomIndex(savedZoom);
    setHighContrast(savedContrast);
    applyZoom(savedZoom);
    applyContrast(savedContrast);
  }, [applyZoom, applyContrast]);

  // Encerra qualquer leitura em andamento ao sair da página.
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  // ── Controles de zoom ──
  function increaseZoom() {
    const next = Math.min(zoomIndex + 1, ZOOM_LEVELS.length - 1);
    setZoomIndex(next);
    applyZoom(next);
  }

  function decreaseZoom() {
    const next = Math.max(zoomIndex - 1, 0);
    setZoomIndex(next);
    applyZoom(next);
  }

  function resetZoom() {
    setZoomIndex(0);
    applyZoom(0);
  }

  // ── Alto contraste ──
  function toggleContrast() {
    const next = !highContrast;
    setHighContrast(next);
    applyContrast(next);
  }

  // ── Leitura em voz alta (Web Speech API) ──
  function toggleReadAloud() {
    const synth = window.speechSynthesis;
    if (!synth) return;

    // Se já está lendo, para.
    if (synth.speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }

    const main = document.getElementById("main-content");
    const text = main?.innerText?.trim();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = SPEECH_LANG[locale] ?? "pt-BR";
    utterance.rate = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    synth.cancel();
    synth.speak(utterance);
    setSpeaking(true);
  }

  return (
    <div className="fixed bottom-5 left-5 z-[60] print:hidden">
      {/* Painel de opções */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={t("title")}
          className={cn(
            "mb-3 w-64 rounded-2xl p-4",
            "border border-[var(--color-border)]",
            "bg-[var(--color-surface)] shadow-2xl shadow-black/30"
          )}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">
              {t("title")}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label={t("close")}
              className="rounded-lg p-1 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
            >
              <X size={16} />
            </button>
          </div>

          {/* Tamanho do texto / zoom */}
          <p className="mb-2 text-xs font-medium text-[var(--color-text-secondary)]">
            {t("fontSize")}
          </p>
          <div className="mb-4 flex items-center gap-2">
            <button
              onClick={decreaseZoom}
              aria-label={t("decrease")}
              className="flex-1 rounded-lg border border-[var(--color-border)] py-2 text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-40"
              disabled={zoomIndex === 0}
            >
              <Minus size={16} className="mx-auto" />
            </button>
            <button
              onClick={resetZoom}
              aria-label={t("reset")}
              className="flex-1 rounded-lg border border-[var(--color-border)] py-2 text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <RotateCcw size={16} className="mx-auto" />
            </button>
            <button
              onClick={increaseZoom}
              aria-label={t("increase")}
              className="flex-1 rounded-lg border border-[var(--color-border)] py-2 text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-40"
              disabled={zoomIndex === ZOOM_LEVELS.length - 1}
            >
              <Plus size={16} className="mx-auto" />
            </button>
          </div>

          {/* Alto contraste */}
          <button
            onClick={toggleContrast}
            aria-pressed={highContrast}
            className={cn(
              "mb-2 flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
              highContrast
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)]"
            )}
          >
            <Contrast size={16} />
            {t("contrast")}
          </button>

          {/* Leitura em voz alta */}
          <button
            onClick={toggleReadAloud}
            aria-pressed={speaking}
            className={cn(
              "flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
              speaking
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)]"
            )}
          >
            {speaking ? <Square size={16} /> : <Volume2 size={16} />}
            {speaking ? t("stopReading") : t("readPage")}
          </button>
        </div>
      )}

      {/* Botão flutuante que abre o menu */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t("menuLabel")}
        aria-expanded={open}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full",
          "bg-[var(--color-accent)] text-white shadow-lg shadow-black/25",
          "transition-transform duration-200 hover:scale-105",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)]"
        )}
      >
        <Accessibility size={22} />
      </button>
    </div>
  );
}
