"use client";

import {motion} from "framer-motion";
import {ArrowDown, Github, MessageCircle} from "lucide-react";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {cn, scrollToSection} from "@/lib/utils";

const heroVariants = {
  hidden: {opacity: 0, y: 22},
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {duration: 0.58, delay, ease: "easeOut"}
  })
};

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-1px)] overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(34,211,238,0.1),transparent_30%)]" />

      <div className="container-portfolio grid min-h-[calc(100svh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_420px]">
        <div className="max-w-3xl">
          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="max-w-[760px] text-5xl font-extrabold leading-[1.03] text-[color:var(--color-text-primary)] sm:text-6xl lg:text-7xl"
          >
            <span className="block">{t("name")}</span>
            <span className="block text-accent">{t("surname")}</span>
          </motion.h1>

          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0.16}
            className="mt-6 text-lg font-semibold text-[color:var(--color-text-primary)] sm:text-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="mt-4 max-w-2xl whitespace-pre-line text-base leading-8 text-[color:var(--color-text-secondary)]"
          >
            {t("bio")}
          </motion.p>

          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0.32}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
            >
              {t("ctaProjects")}
              <ArrowDown size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-xl border px-6 text-sm font-bold",
                "border-accent/45 text-accent transition-colors hover:bg-accent/10"
              )}
            >
              <MessageCircle size={17} />
              {t("ctaContact")}
            </button>
            <a
              href="https://github.com/JThurr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub de José Arthur"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[color:var(--color-border)] px-6 text-sm font-bold text-[color:var(--color-text-primary)] transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={17} />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, scale: 0.94}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.7, ease: "easeOut", delay: 0.18}}
          className="mx-auto hidden w-full max-w-[380px] lg:block"
        >
          <div className="relative aspect-square animate-float rounded-full border border-accent/25 p-4">
            <div className="absolute inset-8 rounded-full border border-cyan-400/20" />
            <div className="relative h-full overflow-hidden rounded-full border-2 border-accent/45 bg-[color:var(--color-card)] shadow-glow">
              <Image
                src="/images/avatar.svg"
                alt="José Arthur"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
