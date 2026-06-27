"use client";

// Link "pular para o conteúdo" — fica invisível até receber foco via Tab.
// Permite que usuários de teclado e leitores de tela saltem a navegação
// e cheguem direto ao conteúdo principal.

import {useTranslations} from "next-intl";

export default function SkipToContent() {
  const t = useTranslations("a11y");

  return (
    <a href="#main-content" className="skip-to-content">
      {t("skip")}
    </a>
  );
}
