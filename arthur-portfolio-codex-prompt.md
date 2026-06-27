# 🚀 Prompt Codex — Portfólio Pessoal de José Arthur

> **Instrução para o Codex:** Construa este projeto **do zero até 100% funcional**, seguindo cada seção deste documento na ordem apresentada. Siga rigorosamente a filosofia de **Clean Code** — cada arquivo deve ser bem comentado, com nomes de variáveis e funções autoexplicativos. Use TypeScript estrito. Não pule etapas.

---

## 📋 Visão Geral do Projeto

**Objetivo:** Site portfólio pessoal de José Arthur — desenvolvedor full-stack de 23 anos, brasileiro, entusiasta de IA e criador dos projetos AetherLink, AetherScroll, Sinfonia da Alma e Protótipo A01 (bot WhatsApp).

**Características obrigatórias:**
- ✅ Responsivo (mobile-first)
- ✅ Dark mode + Light mode com toggle
- ✅ Multi-idioma: Português 🇧🇷 / English 🇺🇸 / Español 🇪🇸
- ✅ Scroll suave ao clicar nos links da navbar
- ✅ Carrossel de skills (Embla Carousel)
- ✅ Animações suaves de entrada (Framer Motion)
- ✅ Código limpo, comentado e de fácil leitura
- ✅ Design clean / minimalista — sem elementos de IA genérica, sem dourado forte

**Identidade visual:**
- Paleta primária: Indigo `#6366F1` (accent) sobre fundos escuros ou claros
- Tipografia: `Inter` (Google Fonts) — clean, tech, legível
- Raio de borda padrão: `12–20px` para cards, `8px` para pills
- Sem gradientes agressivos, sem glassmorphism excessivo

---

## 🗂️ Estrutura Completa de Pastas

```
arthur-portfolio/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx          # Layout com providers (tema + idioma)
│   │   │   └── page.tsx            # Página principal (monta todas as seções)
│   │   └── globals.css             # CSS global com variáveis de cor e fontes
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navbar fixa com logo, nav, lang e theme toggle
│   │   │   └── Footer.tsx          # Rodapé simples
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Seção principal com nome, título e CTAs
│   │   │   ├── AboutSection.tsx    # Quem sou eu + stats cards
│   │   │   ├── SkillsSection.tsx   # Carrossel de skills/tecnologias
│   │   │   ├── ProjectsSection.tsx # Grid de cards de projetos
│   │   │   └── ContactSection.tsx  # Links de contato
│   │   └── ui/
│   │       ├── ThemeToggle.tsx     # Botão toggle dark/light
│   │       ├── LanguageToggle.tsx  # Seletor PT/EN/ES
│   │       ├── ProjectCard.tsx     # Card individual de projeto
│   │       ├── SkillPill.tsx       # Pill individual de skill
│   │       └── SectionLabel.tsx    # Label de seção estilo "// nome"
│   ├── lib/
│   │   ├── data.ts                 # Dados dos projetos, skills e contatos
│   │   └── utils.ts                # Funções utilitárias
│   └── i18n/
│       ├── routing.ts              # Configuração de rotas i18n
│       └── messages/
│           ├── pt.json             # Textos em português
│           ├── en.json             # Textos em inglês
│           └── es.json             # Textos em espanhol
├── public/
│   └── images/
│       ├── avatar.jpg              # Foto de perfil (José Arthur deve substituir)
│       └── projects/
│           ├── aetherscroll.jpg    # Screenshot do AetherScroll
│           ├── aetherlink.jpg      # Screenshot do AetherLink
│           └── sinfonia-da-alma.jpg
├── middleware.ts                   # Middleware de redirecionamento i18n
├── next.config.ts                  # Configuração do Next.js
├── tailwind.config.ts              # Configuração do Tailwind
└── package.json
```

---

## 📦 Package.json — Dependências

```json
{
  "name": "arthur-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "next-themes": "^0.3.0",
    "next-intl": "^3.15.0",
    "framer-motion": "^11.3.0",
    "embla-carousel-react": "^8.1.0",
    "embla-carousel-autoplay": "^8.1.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.4.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.5.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

## ⚙️ Arquivos de Configuração

### `next.config.ts`
```typescript
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Integração do plugin de internacionalização ao Next.js
const withNextIntl = createNextIntlPlugin("./src/i18n/routing.ts");

const nextConfig: NextConfig = {
  images: {
    // Domínios permitidos para otimização de imagens externas
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
```

### `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  // Habilita o modo dark via classe no elemento HTML
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── PALETA DE CORES DO PORTFÓLIO ────────────────────────
      colors: {
        // Fundos — Dark Mode
        "dark-bg":       "#0A0A0F", // fundo principal escuro
        "dark-surface":  "#13131A", // superfícies e seções alternadas
        "dark-card":     "#1A1A25", // fundos de cards
        "dark-border":   "#2A2A35", // bordas e divisores

        // Fundos — Light Mode
        "light-bg":      "#F8F9FC", // fundo principal claro
        "light-surface": "#FFFFFF", // superfícies claras
        "light-card":    "#F1F5F9", // fundos de cards no light
        "light-border":  "#E2E8F0", // bordas no light mode

        // Textos — Dark Mode
        "dark-text-primary":   "#F1F5F9",
        "dark-text-secondary": "#94A3B8",

        // Textos — Light Mode
        "light-text-primary":   "#0F172A",
        "light-text-secondary": "#64748B",

        // Accent Colors — usados nos dois modos
        "accent":       "#6366F1", // indigo — cor primária
        "accent-light": "#818CF8", // indigo claro — hover/glow
        "accent-dark":  "#4F46E5", // indigo escuro — light mode
        "accent-cyan":  "#22D3EE", // cyan — destaque secundário
        "accent-green": "#28B57D", // verde — destaque terciário
      },

      // ─── FONTE PADRÃO ─────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      // ─── ANIMAÇÕES PERSONALIZADAS ─────────────────────────────
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### `src/app/globals.css`
```css
/* Importação da fonte Inter do Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── VARIÁVEIS CSS GLOBAIS ──────────────────────────────────── */
:root {
  /* Variáveis do Light Mode (padrão) */
  --color-bg:           #F8F9FC;
  --color-surface:      #FFFFFF;
  --color-card:         #F1F5F9;
  --color-border:       #E2E8F0;
  --color-text-primary: #0F172A;
  --color-text-sec:     #64748B;
  --color-accent:       #4F46E5;
}

.dark {
  /* Variáveis do Dark Mode */
  --color-bg:           #0A0A0F;
  --color-surface:      #13131A;
  --color-card:         #1A1A25;
  --color-border:       #2A2A35;
  --color-text-primary: #F1F5F9;
  --color-text-sec:     #94A3B8;
  --color-accent:       #6366F1;
}

/* ─── RESET E BASE ───────────────────────────────────────────── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  /* Scroll suave global — ativa o comportamento de scroll animado */
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: "Inter", system-ui, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── CLASSES UTILITÁRIAS DO PROJETO ─────────────────────────── */

/* Largura máxima do conteúdo com padding horizontal */
.container-portfolio {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Padrão de espaçamento vertical das seções */
.section-padding {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
  .container-portfolio {
    padding: 0 2rem;
  }
}

/* Scrollbar customizada para Dark Mode */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6366F1;
}
```

---

## 🌍 Internacionalização (next-intl)

### `src/i18n/routing.ts`
```typescript
import { defineRouting } from "next-intl/routing";

// Define as rotas e idiomas suportados pelo portfólio
export const routing = defineRouting({
  locales: ["pt", "en", "es"],    // Idiomas disponíveis
  defaultLocale: "pt",            // Português como padrão
  localePrefix: "always",         // /pt, /en, /es sempre na URL
});
```

### `middleware.ts`
```typescript
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

// Middleware que redireciona o usuário para a URL correta com o locale
export default createMiddleware(routing);

export const config = {
  // Aplica o middleware em todas as rotas, exceto assets estáticos e API
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

### `src/i18n/messages/pt.json`
```json
{
  "nav": {
    "about":    "Sobre",
    "skills":   "Skills",
    "projects": "Projetos",
    "contact":  "Contato"
  },
  "hero": {
    "greeting":  "Olá, mundo!",
    "name":      "Sou",
    "surname":   "José Arthur.",
    "subtitle":  "Desenvolvedor Full-Stack · UI Designer · Entusiasta de IA",
    "bio":       "Construo produtos digitais com propósito — da ideia ao deploy.\nApaixonado por código limpo, automação inteligente e experiências que fazem sentido para quem usa.",
    "ctaProjects": "Ver Projetos",
    "ctaContact":  "Entrar em contato"
  },
  "about": {
    "label":  "sobre mim",
    "title":  "Quem sou eu?",
    "bio":    "Tenho 23 anos e sou apaixonado por tecnologia desde sempre. Desenvolvo soluções full-stack com foco em performance, usabilidade e escalabilidade — do back-end robusto até interfaces que as pessoas realmente gostam de usar.\n\nUso IA de forma intensiva no meu workflow, especialmente Claude, para acelerar desde a arquitetura até a entrega final. Em breve estarei em Calgary, Canadá, expandindo horizontes e levando minha stack junto.",
    "stats": {
      "experience": { "value": "3+",  "label": "Anos de experiência" },
      "projects":   { "value": "10+", "label": "Projetos entregues" },
      "stacks":     { "value": "5+",  "label": "Stacks dominadas" }
    }
  },
  "skills": {
    "label": "tech stack",
    "title": "Minhas Skills"
  },
  "projects": {
    "label":   "projetos",
    "title":   "Meus Projetos",
    "comingSoon": "Em breve",
    "viewProject": "Ver Projeto",
    "items": {
      "aetherscroll": {
        "type": "Web App",
        "name": "AetherScroll",
        "desc": "Plataforma de leitura e navegação imersiva — experiência fluida e minimalista para consumo de conteúdo digital."
      },
      "aetherlink": {
        "type": "Web App",
        "name": "AetherLink",
        "desc": "Encurtador e gerenciador de links inteligente com analytics integrado e customização avançada de URLs."
      },
      "sinfonia": {
        "type": "Site Institucional",
        "name": "Sinfonia da Alma",
        "desc": "Site para mentora Claudia Porto — plataforma de mentoria com CMS headless, blog e landing pages dinâmicas."
      }
    }
  },
  "contact": {
    "label":    "contato",
    "title":    "Vamos conversar?",
    "subtitle": "Aberto a projetos freelance, colaborações e novas oportunidades."
  },
  "footer": {
    "made":    "Feito com",
    "by":      "por José Arthur"
  }
}
```

### `src/i18n/messages/en.json`
```json
{
  "nav": {
    "about":    "About",
    "skills":   "Skills",
    "projects": "Projects",
    "contact":  "Contact"
  },
  "hero": {
    "greeting":  "Hello, world!",
    "name":      "I'm",
    "surname":   "José Arthur.",
    "subtitle":  "Full-Stack Developer · UI Designer · AI Enthusiast",
    "bio":       "I build digital products with purpose — from idea to deploy.\nPassionate about clean code, intelligent automation, and experiences that truly make sense for their users.",
    "ctaProjects": "View Projects",
    "ctaContact":  "Get in touch"
  },
  "about": {
    "label":  "about me",
    "title":  "Who am I?",
    "bio":    "I'm 23 years old and passionate about technology. I build full-stack solutions focused on performance, usability, and scalability — from robust back-ends to interfaces people genuinely enjoy using.\n\nI use AI extensively in my workflow, especially Claude, to speed up everything from architecture to final delivery. Soon I'll be in Calgary, Canada, expanding horizons while bringing my stack along.",
    "stats": {
      "experience": { "value": "3+",  "label": "Years of experience" },
      "projects":   { "value": "10+", "label": "Delivered projects" },
      "stacks":     { "value": "5+",  "label": "Mastered stacks" }
    }
  },
  "skills": {
    "label": "tech stack",
    "title": "My Skills"
  },
  "projects": {
    "label":   "projects",
    "title":   "My Projects",
    "comingSoon": "Coming soon",
    "viewProject": "View Project",
    "items": {
      "aetherscroll": {
        "type": "Web App",
        "name": "AetherScroll",
        "desc": "Immersive reading and navigation platform — a fluid, minimalist experience for digital content consumption."
      },
      "aetherlink": {
        "type": "Web App",
        "name": "AetherLink",
        "desc": "Smart link shortener and manager with integrated analytics and advanced URL customization."
      },
      "sinfonia": {
        "type": "Institutional Website",
        "name": "Sinfonia da Alma",
        "desc": "Website for mentor Claudia Porto — a mentorship platform with headless CMS, blog, and dynamic landing pages."
      }
    }
  },
  "contact": {
    "label":    "contact",
    "title":    "Let's talk?",
    "subtitle": "Open to freelance projects, collaborations, and new opportunities."
  },
  "footer": {
    "made":    "Made with",
    "by":      "by José Arthur"
  }
}
```

### `src/i18n/messages/es.json`
```json
{
  "nav": {
    "about":    "Sobre mí",
    "skills":   "Skills",
    "projects": "Proyectos",
    "contact":  "Contacto"
  },
  "hero": {
    "greeting":  "¡Hola, mundo!",
    "name":      "Soy",
    "surname":   "José Arthur.",
    "subtitle":  "Desarrollador Full-Stack · Diseñador UI · Entusiasta de IA",
    "bio":       "Construyo productos digitales con propósito — de la idea al deploy.\nApasionado por el código limpio, la automatización inteligente y las experiencias que tienen sentido para quienes las usan.",
    "ctaProjects": "Ver Proyectos",
    "ctaContact":  "Contactarme"
  },
  "about": {
    "label":  "sobre mí",
    "title":  "¿Quién soy?",
    "bio":    "Tengo 23 años y soy apasionado por la tecnología. Desarrollo soluciones full-stack enfocadas en rendimiento, usabilidad y escalabilidad — desde back-ends robustos hasta interfaces que las personas realmente disfrutan usar.\n\nUso IA intensivamente en mi workflow, especialmente Claude, para acelerar desde la arquitectura hasta la entrega final. Pronto estaré en Calgary, Canadá, expandiendo horizontes con mi stack a cuestas.",
    "stats": {
      "experience": { "value": "3+",  "label": "Años de experiencia" },
      "projects":   { "value": "10+", "label": "Proyectos entregados" },
      "stacks":     { "value": "5+",  "label": "Stacks dominadas" }
    }
  },
  "skills": {
    "label": "tech stack",
    "title": "Mis Skills"
  },
  "projects": {
    "label":   "proyectos",
    "title":   "Mis Proyectos",
    "comingSoon": "Próximamente",
    "viewProject": "Ver Proyecto",
    "items": {
      "aetherscroll": {
        "type": "Web App",
        "name": "AetherScroll",
        "desc": "Plataforma de lectura y navegación inmersiva — experiencia fluida y minimalista para consumo de contenido digital."
      },
      "aetherlink": {
        "type": "Web App",
        "name": "AetherLink",
        "desc": "Acortador y gestor de enlaces inteligente con analytics integrado y personalización avanzada de URLs."
      },
      "sinfonia": {
        "type": "Sitio Institucional",
        "name": "Sinfonia da Alma",
        "desc": "Sitio para la mentora Claudia Porto — plataforma de mentoría con CMS headless, blog y landing pages dinámicas."
      }
    }
  },
  "contact": {
    "label":    "contacto",
    "title":    "¿Hablamos?",
    "subtitle": "Abierto a proyectos freelance, colaboraciones y nuevas oportunidades."
  },
  "footer": {
    "made":    "Hecho con",
    "by":      "por José Arthur"
  }
}
```

---

## 📊 Dados Estáticos (`src/lib/data.ts`)

```typescript
// ─── DADOS DO PORTFÓLIO ───────────────────────────────────────
// Centraliza todos os dados estáticos para fácil manutenção

// Tipo para uma skill individual
export interface Skill {
  name: string;                           // Nome da tecnologia
  color: "accent" | "cyan" | "green";    // Cor do pill no carrossel
}

// Tipo para um projeto
export interface Project {
  id:          string;    // Chave do projeto (usada nos textos i18n)
  image:       string;    // Caminho da imagem em /public/images/projects/
  tags:        string[];  // Tags de tecnologia usadas
  accentColor: "accent" | "cyan" | "green"; // Cor accent do card
  href?:       string;    // Link do projeto (undefined = em breve)
  comingSoon:  boolean;   // Se está em breve ou disponível
}

// Tipo para um link de contato
export interface ContactLink {
  label:   string;  // Nome da rede/plataforma
  handle:  string;  // Texto do link exibido
  href:    string;  // URL completa
  icon:    string;  // Nome do ícone Lucide
}

// ─── SKILLS ──────────────────────────────────────────────────
// Lista de tecnologias exibidas no carrossel
export const skills: Skill[] = [
  { name: "React",         color: "accent" },
  { name: "Next.js",       color: "accent" },
  { name: "TypeScript",    color: "cyan"   },
  { name: "JavaScript",    color: "cyan"   },
  { name: "Node.js",       color: "green"  },
  { name: "Python",        color: "green"  },
  { name: "Tailwind CSS",  color: "accent" },
  { name: "Sanity CMS",    color: "cyan"   },
  { name: "Vercel",        color: "accent" },
  { name: "Claude AI",     color: "accent" },
  { name: "HTML & CSS",    color: "cyan"   },
  { name: "UI/UX Design",  color: "green"  },
  { name: "Git / GitHub",  color: "accent" },
  { name: "Figma",         color: "accent" },
  { name: "WhatsApp API",  color: "green"  },
  { name: "n8n",           color: "cyan"   },
];

// ─── PROJETOS ─────────────────────────────────────────────────
// NOTA: AetherLink e AetherScroll são projetos separados no visual,
// mas ambos apontarão para o mesmo link (AetherScroll) quando disponíveis.
export const projects: Project[] = [
  {
    id:          "aetherscroll",
    image:       "/images/projects/aetherscroll.jpg",
    tags:        ["Next.js", "React", "TypeScript"],
    accentColor: "accent",
    href:        undefined,   // Substituir com a URL quando live
    comingSoon:  true,
  },
  {
    id:          "aetherlink",
    image:       "/images/projects/aetherlink.jpg",
    tags:        ["Node.js", "React", "Vercel"],
    accentColor: "cyan",
    href:        undefined,   // Apontará para o mesmo link do AetherScroll
    comingSoon:  true,
  },
  {
    id:          "sinfonia",
    image:       "/images/projects/sinfonia-da-alma.jpg",
    tags:        ["Next.js", "Sanity", "Tailwind"],
    accentColor: "green",
    href:        "https://sinfoniadaalma.com.br", // Substituir com URL real
    comingSoon:  false,
  },
];

// ─── CONTATOS ─────────────────────────────────────────────────
export const contactLinks: ContactLink[] = [
  {
    label:  "GitHub",
    handle: "github.com/jose-arthur",    // Substituir com GitHub real
    href:   "https://github.com/",
    icon:   "Github",
  },
  {
    label:  "LinkedIn",
    handle: "in/jose-arthur-porto-ribeiro",        // Substituir com LinkedIn real
    href:   "https://linkedin.com/in/",
    icon:   "Linkedin",
  },
  {
    label:  "WhatsApp",
    handle: "+55 12 9xxxx-xxxx",        // Substituir com número real
    href:   "https://wa.me/55129",
    icon:   "MessageCircle",
  },
  {
    label:  "E-mail",
    handle: "jose12.ja510@gmail.com",
    href:   "mailto:jose12.ja510@gmail.com",
    icon:   "Mail",
  },
];
```

---

## 🛠️ Utilitários (`src/lib/utils.ts`)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── cn() ─────────────────────────────────────────────────────
// Mescla classes CSS do Tailwind sem conflito
// Uso: cn("base-class", condition && "conditional-class")
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── scrollToSection() ────────────────────────────────────────
// Faz scroll suave até a seção pelo ID
// Uso: scrollToSection("projects") → rola até <section id="projects">
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
```

---

## 📐 Layout Principal

### `src/app/[locale]/layout.tsx`
```tsx
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

// Metadados da página para SEO
export const metadata: Metadata = {
  title:       "José Arthur — Desenvolvedor Full-Stack",
  description: "Portfólio de José Arthur — desenvolvedor full-stack, UI designer e entusiasta de IA. Criador dos projetos AetherScroll, AetherLink e Sinfonia da Alma.",
  keywords:    ["desenvolvedor full-stack", "UI designer", "portfólio", "Next.js", "React"],
  authors:     [{ name: "José Arthur" }],
  openGraph: {
    title:       "José Arthur — Full-Stack Developer",
    description: "Portfolio of José Arthur — developer, UI designer and AI enthusiast.",
    type:        "website",
  },
};

interface LocaleLayoutProps {
  children:    React.ReactNode;
  params:      { locale: string };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  // Verifica se o locale é válido — retorna 404 caso não seja
  if (!routing.locales.includes(locale as "pt" | "en" | "es")) {
    notFound();
  }

  // Carrega os textos do idioma atual no servidor
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        {/* ThemeProvider: gerencia dark/light mode via classe no <html> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {/* NextIntlClientProvider: disponibiliza os textos para os componentes */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### `src/app/[locale]/page.tsx`
```tsx
import Header          from "@/components/layout/Header";
import Footer          from "@/components/layout/Footer";
import HeroSection     from "@/components/sections/HeroSection";
import AboutSection    from "@/components/sections/AboutSection";
import SkillsSection   from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection  from "@/components/sections/ContactSection";

// Página principal — monta todas as seções do portfólio em ordem
export default function HomePage() {
  return (
    <>
      {/* Navbar fixa no topo */}
      <Header />

      <main>
        {/* ── SEÇÃO 1: Hero ── */}
        <HeroSection />

        {/* ── SEÇÃO 2: Sobre Mim ── */}
        <AboutSection />

        {/* ── SEÇÃO 3: Skills / Carrossel ── */}
        <SkillsSection />

        {/* ── SEÇÃO 4: Projetos ── */}
        <ProjectsSection />

        {/* ── SEÇÃO 5: Contato ── */}
        <ContactSection />
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  );
}
```

---

## 🧩 Componentes UI Reutilizáveis

### `src/components/ui/SectionLabel.tsx`
```tsx
// Label de identificação de seção no estilo "// nome"
// Exibido acima do título de cada seção

interface SectionLabelProps {
  text: string; // Texto da label (ex: "sobre mim")
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="
      inline-block
      text-[13px] font-medium tracking-wide
      text-[#6366F1] dark:text-[#818CF8]
      mb-3
    ">
      {/* Prefixo de comentário de código — identidade visual */}
      <span className="opacity-60 mr-1">//</span>
      {text}
    </span>
  );
}
```

### `src/components/ui/SkillPill.tsx`
```tsx
// Pill individual de skill — exibido no carrossel de tecnologias

import { cn } from "@/lib/utils";

interface SkillPillProps {
  name:  string;                           // Nome da tecnologia
  color: "accent" | "cyan" | "green";     // Variante de cor
}

// Mapeamento de variantes de cor para classes Tailwind
const colorVariants = {
  accent: {
    bg:     "bg-[#6366F1]/10 dark:bg-[#6366F1]/10",
    border: "border-[#6366F1]/40",
    text:   "text-[#6366F1] dark:text-[#818CF8]",
  },
  cyan: {
    bg:     "bg-[#22D3EE]/10",
    border: "border-[#22D3EE]/40",
    text:   "text-[#22D3EE]",
  },
  green: {
    bg:     "bg-[#28B57D]/10",
    border: "border-[#28B57D]/40",
    text:   "text-[#28B57D]",
  },
};

export default function SkillPill({ name, color }: SkillPillProps) {
  const variant = colorVariants[color];

  return (
    <div className={cn(
      "inline-flex items-center gap-2",
      "px-4 py-2 rounded-full",
      "border text-[14px] font-medium",
      "whitespace-nowrap select-none",
      "transition-all duration-200",
      "hover:scale-105 hover:brightness-110",
      variant.bg,
      variant.border,
      variant.text,
    )}>
      {name}
    </div>
  );
}
```

### `src/components/ui/ThemeToggle.tsx`
```tsx
"use client";

// Botão que alterna entre dark e light mode
// Persiste a preferência via next-themes (localStorage)

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Evita hidratação incorreta verificando se o componente está montado
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Retorna placeholder enquanto ainda não montou (evita mismatch SSR/CSR)
  if (!mounted) {
    return <div className="w-[52px] h-7 rounded-full bg-dark-surface" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={cn(
        "relative w-[52px] h-7 rounded-full",
        "transition-colors duration-300 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]",
        isDark ? "bg-[#6366F1]" : "bg-slate-300",
      )}
    >
      {/* Círculo deslizante do toggle */}
      <span className={cn(
        "absolute top-[3px] w-[22px] h-[22px] rounded-full",
        "flex items-center justify-center",
        "transition-all duration-300 ease-in-out",
        "bg-white shadow-sm",
        isDark ? "left-[27px]" : "left-[3px]",
      )}>
        {/* Ícone muda de acordo com o tema atual */}
        {isDark
          ? <Moon size={12} className="text-[#6366F1]" />
          : <Sun  size={12} className="text-slate-500" />
        }
      </span>
    </button>
  );
}
```

### `src/components/ui/LanguageToggle.tsx`
```tsx
"use client";

// Dropdown/selector de idioma — permite trocar entre PT, EN e ES
// Usa next-intl para navegação entre locales

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// Idiomas disponíveis com seus rótulos
const languages = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English"   },
  { code: "es", label: "ES", name: "Español"   },
] as const;

export default function LanguageToggle() {
  const router   = useRouter();
  const pathname = usePathname();
  const locale   = useLocale();
  const [open, setOpen] = useState(false);

  // Navega para a mesma página, mas no idioma selecionado
  function handleSelect(code: string) {
    // Substitui o locale atual na URL pelo novo
    const newPath = pathname.replace(`/${locale}`, `/${code}`);
    router.push(newPath);
    setOpen(false);
  }

  const current = languages.find((l) => l.code === locale);

  return (
    <div className="relative">
      {/* Botão que abre o dropdown */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Selecionar idioma"
        className={cn(
          "flex items-center gap-1.5",
          "px-3 py-1.5 rounded-full",
          "text-[13px] font-medium",
          "border border-dark-border dark:border-dark-border",
          "bg-dark-surface dark:bg-dark-surface",
          "text-dark-text-secondary dark:text-dark-text-secondary",
          "hover:text-[#6366F1] hover:border-[#6366F1]/40",
          "transition-all duration-200",
        )}
      >
        <Globe size={13} />
        <span>{current?.label}</span>
        <ChevronDown size={12} className={cn(
          "transition-transform duration-200",
          open && "rotate-180",
        )} />
      </button>

      {/* Dropdown com as opções de idioma */}
      {open && (
        <div className={cn(
          "absolute top-full right-0 mt-2 z-50",
          "min-w-[120px] py-1 rounded-xl",
          "border border-dark-border dark:border-dark-border",
          "bg-dark-card dark:bg-dark-card",
          "shadow-xl shadow-black/20",
        )}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={cn(
                "w-full flex items-center gap-2 px-4 py-2",
                "text-[13px] text-left",
                "transition-colors duration-150",
                "hover:bg-[#6366F1]/10",
                locale === lang.code
                  ? "text-[#6366F1] font-medium"
                  : "text-dark-text-secondary dark:text-dark-text-secondary",
              )}
            >
              <span className="font-medium w-6">{lang.label}</span>
              <span className="opacity-70">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### `src/components/ui/ProjectCard.tsx`
```tsx
import Image from "next/image";
import { ExternalLink, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project:     Project;
  name:        string;  // Título traduzido
  type:        string;  // Tipo traduzido (ex: "Web App")
  description: string;  // Descrição traduzida
  comingSoonLabel:  string; // "Em breve" / "Coming soon" etc
  viewProjectLabel: string; // "Ver Projeto" / "View Project" etc
}

// Mapeamento de accent color para classes visuais
const accentMap = {
  accent: {
    top:    "bg-[#6366F1]",
    badge:  "bg-[#6366F1]/10 text-[#6366F1]",
    btn:    "text-[#6366F1] border-[#6366F1]/30 hover:bg-[#6366F1]/10",
  },
  cyan: {
    top:    "bg-[#22D3EE]",
    badge:  "bg-[#22D3EE]/10 text-[#22D3EE]",
    btn:    "text-[#22D3EE] border-[#22D3EE]/30 hover:bg-[#22D3EE]/10",
  },
  green: {
    top:    "bg-[#28B57D]",
    badge:  "bg-[#28B57D]/10 text-[#28B57D]",
    btn:    "text-[#28B57D] border-[#28B57D]/30 hover:bg-[#28B57D]/10",
  },
};

export default function ProjectCard({
  project, name, type, description, comingSoonLabel, viewProjectLabel,
}: ProjectCardProps) {
  const accent = accentMap[project.accentColor];

  return (
    <article className={cn(
      "relative flex flex-col rounded-2xl overflow-hidden",
      "border border-dark-border dark:border-dark-border",
      "bg-dark-surface dark:bg-dark-surface",
      "bg-white light:bg-white",
      "transition-all duration-300 ease-out",
      "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20",
      "hover:border-[#6366F1]/30",
    )}>
      {/* Barra de cor accent no topo do card */}
      <div className={cn("h-[3px] w-full", accent.top)} />

      {/* Preview de imagem do projeto */}
      <div className="relative h-48 bg-dark-card dark:bg-dark-card overflow-hidden">
        <Image
          src={project.image}
          alt={`Preview do projeto ${name}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          // Placeholder enquanto a imagem carrega
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>

      {/* Conteúdo do card */}
      <div className="flex flex-col flex-1 p-6">
        {/* Badge de tipo do projeto */}
        <span className={cn(
          "self-start text-[11px] font-semibold px-3 py-1 rounded-full mb-3",
          accent.badge,
        )}>
          {type}
        </span>

        {/* Nome do projeto */}
        <h3 className="text-xl font-bold mb-2 text-dark-text-primary dark:text-dark-text-primary">
          {name}
        </h3>

        {/* Descrição */}
        <p className="text-[14px] leading-relaxed text-dark-text-secondary dark:text-dark-text-secondary mb-5 flex-1">
          {description}
        </p>

        {/* Tags de tecnologia */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-dark-card dark:bg-dark-card text-dark-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botão de ação — "Ver Projeto" ou "Em breve" */}
        {project.comingSoon || !project.href ? (
          // Estado "Em breve" — botão desabilitado
          <div className="flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-medium border border-dark-border text-dark-text-secondary opacity-60 cursor-not-allowed">
            <Clock size={14} />
            {comingSoonLabel}
          </div>
        ) : (
          // Link ativo para o projeto
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2",
              "py-3 rounded-xl text-[14px] font-medium border",
              "transition-all duration-200",
              accent.btn,
            )}
          >
            <ExternalLink size={14} />
            {viewProjectLabel}
          </a>
        )}
      </div>
    </article>
  );
}
```

---

## 🏗️ Componentes de Layout

### `src/components/layout/Header.tsx`
```tsx
"use client";

// Header/Navbar fixo no topo da página
// Funcionalidades: logo, navegação com scroll suave, toggle de tema e idioma

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/utils";
import { cn }              from "@/lib/utils";
import ThemeToggle         from "@/components/ui/ThemeToggle";
import LanguageToggle      from "@/components/ui/LanguageToggle";

export default function Header() {
  const t = useTranslations("nav");

  // Controla o estado de scroll para aplicar fundo sutil ao header
  const [scrolled, setScrolled] = useState(false);
  // Controla abertura do menu mobile (hamburger)
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Listener de scroll para adicionar backdrop blur quando rolar a página
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Itens de navegação — id corresponde ao <section id="..."> no DOM
  const navItems = [
    { key: "about",    id: "about"    },
    { key: "skills",   id: "skills"   },
    { key: "projects", id: "projects" },
    { key: "contact",  id: "contact"  },
  ] as const;

  // Clique no item da nav — faz scroll suave + fecha menu mobile
  function handleNavClick(sectionId: string) {
    scrollToSection(sectionId);
    setMobileOpen(false);
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "transition-all duration-300",
      "border-b",
      scrolled
        ? "bg-dark-bg/95 dark:bg-dark-bg/95 backdrop-blur-sm border-dark-border/50"
        : "bg-transparent border-transparent",
    )}>
      <div className="container-portfolio h-[72px] flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => scrollToSection("hero")}
          aria-label="Ir para o início"
          className="text-[22px] font-bold text-[#6366F1] hover:opacity-80 transition-opacity"
        >
          AC.
        </button>

        {/* ── Navegação Desktop ── */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.id)}
              className="text-[15px] font-medium text-dark-text-secondary dark:text-dark-text-secondary hover:text-[#6366F1] transition-colors duration-200"
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        {/* ── Controles: Idioma + Tema ── */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* ── Botão Hamburger (mobile) ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            mobileOpen && "rotate-45 translate-y-2",
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            mobileOpen && "opacity-0",
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            mobileOpen && "-rotate-45 -translate-y-2",
          )} />
        </button>
      </div>

      {/* ── Menu Mobile (expandido) ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-dark-border bg-dark-bg/98 dark:bg-dark-bg/98 backdrop-blur-sm">
          <nav className="container-portfolio py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-[16px] font-medium text-dark-text-secondary hover:text-[#6366F1] transition-colors py-2"
              >
                {t(item.key)}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-dark-border">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
```

### `src/components/layout/Footer.tsx`
```tsx
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-dark-border dark:border-dark-border bg-dark-surface dark:bg-dark-surface">
      <div className="container-portfolio py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-[14px] text-dark-text-secondary dark:text-dark-text-secondary">
          © 2025 · {t("made")} 💜 {t("by")}
        </p>

        {/* Logo */}
        <span className="text-[18px] font-bold text-[#6366F1]">
          AC.
        </span>
      </div>
    </footer>
  );
}
```

---

## 📌 Seções do Portfólio

### `src/components/sections/HeroSection.tsx`
```tsx
"use client";

import Image           from "next/image";
import { useTranslations } from "next-intl";
import { motion }      from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { cn }              from "@/lib/utils";

// Variantes de animação para entrada dos elementos do Hero
const heroVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[72px]"
    >
      {/* Glow sutil no fundo — decorativo, não grita IA */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#6366F1]/5 blur-3xl" />
      </div>

      <div className="container-portfolio w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Conteúdo Texto ── */}
          <div className="flex flex-col">

            {/* Pill de saudação */}
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/8"
            >
              <span className="text-[13px] font-medium text-[#6366F1]">
                👋 {t("greeting")}
              </span>
            </motion.div>

            {/* Nome principal */}
            <motion.h1
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-[64px] md:text-[80px] font-extrabold leading-none tracking-tight"
            >
              {/* Linha 1: nome em branco/preto */}
              <span className="block text-dark-text-primary dark:text-dark-text-primary">
                {t("name")}
              </span>
              {/* Linha 2: sobrenome em accent indigo */}
              <span className="block text-[#6366F1]">
                {t("surname")}
              </span>
            </motion.h1>

            {/* Subtitle / cargo */}
            <motion.p
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 text-[18px] md:text-[20px] text-dark-text-secondary dark:text-dark-text-secondary"
            >
              {t("subtitle")}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-4 text-[16px] leading-[1.8] text-dark-text-secondary/80 dark:text-dark-text-secondary/80 max-w-lg whitespace-pre-line"
            >
              {t("bio")}
            </motion.p>

            {/* Botões CTA */}
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {/* CTA primário — scroll até projetos */}
              <button
                onClick={() => scrollToSection("projects")}
                className={cn(
                  "flex items-center justify-center gap-2",
                  "px-6 py-3.5 rounded-xl",
                  "bg-[#6366F1] hover:bg-[#4F46E5]",
                  "text-white font-semibold text-[15px]",
                  "transition-all duration-200",
                  "hover:shadow-lg hover:shadow-[#6366F1]/30",
                )}
              >
                {t("ctaProjects")}
                <ArrowDown size={16} />
              </button>

              {/* CTA secundário — scroll até contato */}
              <button
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "flex items-center justify-center gap-2",
                  "px-6 py-3.5 rounded-xl",
                  "border border-[#6366F1]/50 bg-transparent",
                  "text-[#6366F1] font-semibold text-[15px]",
                  "transition-all duration-200",
                  "hover:bg-[#6366F1]/10 hover:border-[#6366F1]",
                )}
              >
                <MessageCircle size={16} />
                {t("ctaContact")}
              </button>
            </motion.div>
          </div>

          {/* ── Avatar / Foto ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Anel decorativo externo */}
              <div className="absolute inset-[-12px] rounded-full border border-[#6366F1]/20 animate-pulse" />
              {/* Anel secundário */}
              <div className="absolute inset-[-24px] rounded-full border border-[#6366F1]/10" />
              {/* Foto circular */}
              <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-2 border-[#6366F1]/40">
                <Image
                  src="/images/avatar.jpg"
                  alt="José Arthur"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```

### `src/components/sections/AboutSection.tsx`
```tsx
"use client";

import { useTranslations } from "next-intl";
import { motion }          from "framer-motion";
import { useInView }       from "framer-motion";
import { useRef }          from "react";
import SectionLabel        from "@/components/ui/SectionLabel";

// Stats exibidos nos cards ao lado da bio
const STAT_KEYS = ["experience", "projects", "stacks"] as const;

export default function AboutSection() {
  const t   = useTranslations("about");
  const ref = useRef(null);

  // Detecta quando a seção entra na viewport para disparar animação
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="container-portfolio">

        {/* Label + Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text={t("label")} />
          <h2 className="text-[40px] md:text-[52px] font-bold text-dark-text-primary dark:text-dark-text-primary">
            {t("title")}
          </h2>
        </motion.div>

        {/* Grid: Bio (esquerda) + Stats (direita) */}
        <div className="mt-12 grid lg:grid-cols-[1fr_340px] gap-12 items-start">

          {/* ── Texto de Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[16px] md:text-[17px] leading-[1.85] text-dark-text-secondary dark:text-dark-text-secondary whitespace-pre-line">
              {t("bio")}
            </p>
          </motion.div>

          {/* ── Cards de Estatísticas ── */}
          <div className="flex flex-col gap-4">
            {STAT_KEYS.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-dark-border dark:border-dark-border bg-dark-surface dark:bg-dark-surface"
              >
                {/* Barra vertical accent */}
                <div className="w-1 h-14 rounded-full bg-[#6366F1] flex-shrink-0" />

                <div>
                  {/* Valor do stat */}
                  <p className="text-[34px] font-bold text-dark-text-primary dark:text-dark-text-primary leading-none">
                    {t(`stats.${key}.value`)}
                  </p>
                  {/* Label do stat */}
                  <p className="text-[13px] text-dark-text-secondary dark:text-dark-text-secondary mt-1">
                    {t(`stats.${key}.label`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
```

### `src/components/sections/SkillsSection.tsx`
```tsx
"use client";

// Seção de Skills com carrossel animado (Embla Carousel + autoplay)

import { useTranslations } from "next-intl";
import { motion }          from "framer-motion";
import { useInView }       from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel    from "embla-carousel-react";
import Autoplay            from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills }          from "@/lib/data";
import SkillPill           from "@/components/ui/SkillPill";
import SectionLabel        from "@/components/ui/SectionLabel";
import { cn }              from "@/lib/utils";

export default function SkillsSection() {
  const t      = useTranslations("skills");
  const ref    = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Inicializa o carrossel com plugin de autoplay (delay 0ms = loop manual)
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2200, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop:       true,           // Loop infinito
      align:      "start",        // Alinha o item à esquerda
      dragFree:   true,           // Arrasto livre sem snap
    },
    [autoplayPlugin.current],
  );

  // Navegação manual
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-dark-surface/50 dark:bg-dark-surface/50"
    >
      <div className="container-portfolio">

        {/* Label + Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text={t("label")} />
          <h2 className="text-[40px] md:text-[52px] font-bold text-dark-text-primary dark:text-dark-text-primary">
            {t("title")}
          </h2>
        </motion.div>

        {/* Carrossel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative"
        >
          {/* Container do carrossel com overflow oculto */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 select-none">
              {/* Duplica os pills para criar ilusão de loop contínuo */}
              {[...skills, ...skills].map((skill, i) => (
                <div key={`skill-${i}`} className="flex-shrink-0">
                  <SkillPill name={skill.name} color={skill.color} />
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <div className="flex items-center gap-3 mt-8">
            {/* Botão Anterior */}
            <button
              onClick={scrollPrev}
              aria-label="Skill anterior"
              className={cn(
                "p-2.5 rounded-full border border-dark-border",
                "text-dark-text-secondary hover:text-[#6366F1] hover:border-[#6366F1]/40",
                "transition-all duration-200",
              )}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={scrollNext}
              aria-label="Próxima skill"
              className={cn(
                "p-2.5 rounded-full border border-dark-border",
                "text-dark-text-secondary hover:text-[#6366F1] hover:border-[#6366F1]/40",
                "transition-all duration-200",
              )}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
```

### `src/components/sections/ProjectsSection.tsx`
```tsx
"use client";

import { useTranslations } from "next-intl";
import { motion }          from "framer-motion";
import { useInView }       from "framer-motion";
import { useRef }          from "react";
import { projects }        from "@/lib/data";
import ProjectCard         from "@/components/ui/ProjectCard";
import SectionLabel        from "@/components/ui/SectionLabel";

export default function ProjectsSection() {
  const t      = useTranslations("projects");
  const ref    = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="container-portfolio">

        {/* Label + Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text={t("label")} />
          <h2 className="text-[40px] md:text-[52px] font-bold text-dark-text-primary dark:text-dark-text-primary">
            {t("title")}
          </h2>
        </motion.div>

        {/* Grid de cards de projetos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
            >
              <ProjectCard
                project={project}
                name={t(`items.${project.id}.name`)}
                type={t(`items.${project.id}.type`)}
                description={t(`items.${project.id}.desc`)}
                comingSoonLabel={t("comingSoon")}
                viewProjectLabel={t("viewProject")}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

### `src/components/sections/ContactSection.tsx`
```tsx
"use client";

import { useTranslations } from "next-intl";
import { motion }          from "framer-motion";
import { useInView }       from "framer-motion";
import { useRef }          from "react";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { contactLinks }    from "@/lib/data";
import SectionLabel        from "@/components/ui/SectionLabel";
import { cn }              from "@/lib/utils";

// Mapa de ícones — associa string (do data.ts) ao componente Lucide
const iconMap: Record<string, React.ElementType> = {
  Github:        Github,
  Linkedin:      Linkedin,
  MessageCircle: MessageCircle,
  Mail:          Mail,
};

export default function ContactSection() {
  const t        = useTranslations("contact");
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-dark-surface/50 dark:bg-dark-surface/50"
    >
      <div className="container-portfolio">

        {/* Label + Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text={t("label")} />
          <h2 className="text-[40px] md:text-[52px] font-bold text-dark-text-primary dark:text-dark-text-primary">
            {t("title")}
          </h2>
          <p className="mt-4 text-[18px] text-dark-text-secondary dark:text-dark-text-secondary">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Grid de links de contato */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className={cn(
                  "flex flex-col gap-2 p-5 rounded-2xl",
                  "border border-dark-border dark:border-dark-border",
                  "bg-dark-card dark:bg-dark-card",
                  "group transition-all duration-200",
                  "hover:-translate-y-1 hover:border-[#6366F1]/40 hover:bg-dark-card/80",
                )}
              >
                {/* Ícone + label da rede */}
                <div className="flex items-center gap-2">
                  {IconComponent && (
                    <IconComponent
                      size={16}
                      className="text-[#6366F1] flex-shrink-0"
                    />
                  )}
                  <span className="text-[12px] font-semibold text-[#6366F1]">
                    {link.label}
                  </span>
                </div>

                {/* Handle / endereço */}
                <span className="text-[13px] text-dark-text-secondary dark:text-dark-text-secondary group-hover:text-dark-text-primary transition-colors">
                  {link.handle}
                </span>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
```

---

## 📸 Imagens Placeholder

Crie as seguintes imagens **placeholder** em `/public/images/`:

- `avatar.jpg` — Foto de perfil de José Arthur (300×300px mínimo, quadrada)
- `projects/aetherscroll.jpg` — Screenshot do AetherScroll (800×450px, 16:9)
- `projects/aetherlink.jpg` — Screenshot do AetherLink (800×450px, 16:9)
- `projects/sinfonia-da-alma.jpg` — Screenshot do Sinfonia da Alma (800×450px, 16:9)

> 💡 **Dica:** Enquanto as imagens reais não estão disponíveis, use imagens placeholder de `https://picsum.photos/800/450` ou crie SVGs simples como fallback.

---

## 🚀 Como Rodar o Projeto

```bash
# 1. Criar o projeto Next.js
npx create-next-app@latest arthur-portfolio --typescript --tailwind --eslint --app --src-dir

# 2. Entrar na pasta
cd arthur-portfolio

# 3. Instalar dependências
npm install next-themes next-intl framer-motion embla-carousel-react embla-carousel-autoplay lucide-react clsx tailwind-merge

# 4. Criar toda a estrutura de arquivos conforme este documento

# 5. Iniciar servidor de desenvolvimento
npm run dev

# 6. Build para produção
npm run build

# 7. Deploy na Vercel
vercel --prod
```

---

## ✅ Checklist de Qualidade

Antes de considerar o site pronto, verifique:

- [ ] **Responsivo** — testar em 320px, 768px e 1440px de largura
- [ ] **Dark Mode** — toggle funciona, cores estão corretas em ambos os modos
- [ ] **Light Mode** — cores do light mode visíveis e agradáveis
- [ ] **3 Idiomas** — PT, EN e ES trocam corretamente sem recarregar a página
- [ ] **Scroll suave** — todos os links da navbar fazem scroll animado
- [ ] **Carrossel** — skills rolam em loop com autoplay e botões funcionais
- [ ] **Projetos** — cards exibem imagem, descrição, tags e botão correto
- [ ] **Animações** — elementos entram suavemente na viewport ao rolar
- [ ] **SEO** — metadados definidos, título e description corretos
- [ ] **Acessibilidade** — aria-labels presentes, foco visível nos botões
- [ ] **Performance** — imagens otimizadas com `next/image`, fonte carregada corretamente
- [ ] **Links** — contatos apontam para URLs corretas
- [ ] **Código limpo** — todos os arquivos comentados e organizados

---

## 🔧 Próximos Passos (Pós-Build)

1. Substituir `avatar.jpg` pela foto real de José Arthur
2. Substituir screenshots dos projetos pelas imagens reais
3. Atualizar handles de GitHub e LinkedIn no `data.ts`
4. Adicionar número real do WhatsApp
5. Quando AetherScroll e AetherLink forem live: atualizar `href` e `comingSoon: false` no `data.ts`
6. AetherLink deve apontar para o mesmo link do AetherScroll
7. Configurar domínio personalizado na Vercel
8. Adicionar Google Analytics ou Plausible (opcional)

---

*Prompt gerado por Claude (Cláudia) em 26/06/2026 para José Arthur.*
*Design base: [Figma — José Arthur Portfolio Design System](https://www.figma.com/design/dDQxdZAEy0ZmfnE6in5V78)*
*Resumo do projeto: [Notion](https://app.notion.com/p/38b2868939f081daad58f2144da2c33b)*
