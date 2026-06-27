import type {Metadata} from "next";
import {NextIntlClientProvider, useMessages} from "next-intl";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import type {ReactNode} from "react";
import "@/app/globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ThemeProvider from "@/components/providers/ThemeProvider";
import {routing, type Locale} from "@/i18n/routing";

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

function isSupportedLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: LocaleLayoutProps): Promise<Metadata> {
  const locale = isSupportedLocale(params.locale)
    ? params.locale
    : routing.defaultLocale;
  const t = await getTranslations({locale, namespace: "metadata"});

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://github.com/JThurr"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website"
    }
  };
}

export default function LocaleLayout({children, params}: LocaleLayoutProps) {
  if (!isSupportedLocale(params.locale)) {
    notFound();
  }

  // Habilita renderização estática para o locale atual (next-intl static rendering)
  setRequestLocale(params.locale);

  const messages = useMessages();

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Header />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
