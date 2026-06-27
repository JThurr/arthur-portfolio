import {Heart} from "lucide-react";
import {useTranslations} from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-[color:var(--color-border)] py-8">
      <div className="container-portfolio flex flex-col items-center justify-between gap-3 text-sm text-[color:var(--color-text-secondary)] sm:flex-row">
        <p className="inline-flex items-center gap-2">
          {t("made")}
          <Heart size={15} className="fill-accent text-accent" />
          {t("by")}
        </p>
        <p>© 2026 José Arthur</p>
      </div>
    </footer>
  );
}
