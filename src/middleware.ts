import createMiddleware from "next-intl/middleware";
import {routing} from "./i18n/routing";

// Middleware do next-intl: redireciona "/" para o locale padrão (/pt)
// e gerencia a negociação de idioma. DEVE ficar dentro de src/ porque
// o projeto usa o diretório src — na raiz o Next.js ignora o arquivo.
export default createMiddleware(routing);

export const config = {
  // Aplica a todas as rotas, exceto API, assets internos e arquivos com extensão
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
