"use client";

import {useParams, usePathname, useRouter} from "next/navigation";
import {routing, type Locale} from "@/i18n/routing";
import {cn} from "@/lib/utils";

const languageLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES"
};

function replaceLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || `/${locale}`;
}

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{locale: Locale}>();
  const activeLocale = params.locale ?? routing.defaultLocale;

  return (
    <div
      aria-label="Selecionar idioma"
      className="flex h-10 items-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-1"
    >
      {routing.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => router.push(replaceLocaleInPath(pathname, locale))}
          aria-pressed={activeLocale === locale}
          className={cn(
            "h-8 min-w-9 rounded-md px-2 text-xs font-bold transition-colors",
            activeLocale === locale
              ? "bg-accent text-white"
              : "text-[color:var(--color-text-secondary)] hover:text-accent"
          )}
        >
          {languageLabels[locale]}
        </button>
      ))}
    </div>
  );
}
