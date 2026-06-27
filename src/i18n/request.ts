import {getRequestConfig} from "next-intl/server";
import {routing, type Locale} from "./routing";

function isSupportedLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export default getRequestConfig(async ({requestLocale}) => {
  // `requestLocale` é a API atual do next-intl (substitui o `locale` deprecado)
  const requested = await requestLocale;
  const locale =
    requested && isSupportedLocale(requested)
      ? requested
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
