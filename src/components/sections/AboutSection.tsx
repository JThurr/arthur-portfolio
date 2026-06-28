"use client";

import {motion, useInView} from "framer-motion";
import {useTranslations} from "next-intl";
import {useRef} from "react";
import Image from "next/image";
import {
  Gamepad2,
  Dices,
  BookOpen,
  Bike,
  PawPrint,
  PenLine,
  Heart,
  Quote
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const statKeys = ["experience", "projects", "stacks"] as const;

// Palavras da mantra pessoal — a ordem reflete o quadro do home office.
const mantraWords = ["discipline", "focus", "consistency", "execution"] as const;

// Hobbies/curiosidades, cada um com seu ícone do Lucide.
const interests = [
  {key: "games", Icon: Gamepad2},
  {key: "tabletop", Icon: Dices},
  {key: "reading", Icon: BookOpen},
  {key: "movement", Icon: Bike},
  {key: "animals", Icon: PawPrint},
  {key: "writing", Icon: PenLine}
] as const;

export default function AboutSection() {
  const t = useTranslations("about");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {once: true, margin: "-90px"});

  // Listas do quadro "Me conquista / Não é muito pra mim" (arrays no JSON).
  const loves = t.raw("vibes.loves") as string[];
  const avoids = t.raw("vibes.avoids") as string[];

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-portfolio">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.5}}
        >
          <SectionLabel text={t("label")} />
          <h2 className="text-4xl font-bold text-[color:var(--color-text-primary)] md:text-5xl">
            {t("title")}
          </h2>
        </motion.div>

        {/* ── Bio + foto + estatísticas ── */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <motion.p
            initial={{opacity: 0, x: -20}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.58, delay: 0.08}}
            className="max-w-3xl whitespace-pre-line text-base leading-8 text-[color:var(--color-text-secondary)] md:text-lg"
          >
            {t("bio")}
          </motion.p>

          <div className="flex flex-col gap-4">
            {/* Foto da seção Sobre (José Arthur no home office) */}
            <motion.div
              initial={{opacity: 0, scale: 0.96}}
              animate={isInView ? {opacity: 1, scale: 1} : {}}
              transition={{duration: 0.6, delay: 0.1}}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[color:var(--color-border)]"
            >
              <Image
                src="/images/about.png"
                alt={t("photoAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {statKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{opacity: 0, x: 20}}
                  animate={isInView ? {opacity: 1, x: 0} : {}}
                  transition={{duration: 0.48, delay: 0.12 + index * 0.08}}
                  className="flex min-h-28 items-center gap-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5"
                >
                  <span className="h-14 w-1 rounded-full bg-accent" />
                  <span>
                    <strong className="block text-3xl text-[color:var(--color-text-primary)]">
                      {t(`stats.${key}.value`)}
                    </strong>
                    <span className="mt-1 block text-sm text-[color:var(--color-text-secondary)]">
                      {t(`stats.${key}.label`)}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mantra / mentalidade ── */}
        <motion.div
          initial={{opacity: 0, y: 24}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.1}}
          className="mt-12 overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-7 md:p-9"
        >
          <SectionLabel text={t("mantra.label")} />

          {/* As quatro palavras, separadas por um ponto em destaque */}
          <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
            {mantraWords.map((word, index) => (
              <span key={word} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
                  {t(`mantra.words.${word}`)}
                </span>
                {index < mantraWords.length - 1 && (
                  <span className="text-2xl font-bold text-accent md:text-3xl">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="max-w-3xl text-base leading-8 text-[color:var(--color-text-secondary)]">
            {t("mantra.text")}
          </p>

          {/* Frase-guia em destaque */}
          <blockquote className="mt-6 flex gap-3 border-l-2 border-accent pl-4">
            <Quote className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
            <span className="text-lg font-medium italic text-[color:var(--color-text-primary)] md:text-xl">
              {t("mantra.quote")}
            </span>
          </blockquote>

          <p className="mt-4 text-sm tracking-wide text-[color:var(--color-text-secondary)]">
            {t("mantra.signature")}
          </p>
        </motion.div>

        {/* ── Curiosidades & hobbies ── */}
        <div className="mt-12">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5}}
          >
            <SectionLabel text={t("interests.label")} />
            <h3 className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
              {t("interests.title")}
            </h3>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map(({key, Icon}, index) => (
              <motion.div
                key={key}
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.45, delay: 0.08 + index * 0.07}}
                className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 transition-colors hover:border-accent/40"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <h4 className="mb-1 font-semibold text-[color:var(--color-text-primary)]">
                  {t(`interests.items.${key}.title`)}
                </h4>
                <p className="text-sm leading-6 text-[color:var(--color-text-secondary)]">
                  {t(`interests.items.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── "Me conquista / Não é muito pra mim" ── */}
        <motion.div
          initial={{opacity: 0, y: 24}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.1}}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {/* Me conquista */}
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-6">
            <div className="mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-bold text-[color:var(--color-text-primary)]">
                {t("vibes.lovesTitle")}
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {loves.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-[color:var(--color-text-secondary)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Não é muito pra mim */}
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-lg">🙃</span>
              <h3 className="text-lg font-bold text-[color:var(--color-text-primary)]">
                {t("vibes.avoidsTitle")}
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {avoids.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-[color:var(--color-text-secondary)]"
                >
                  <span className="mt-2.5 h-px w-3 flex-shrink-0 bg-[color:var(--color-text-secondary)]/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
