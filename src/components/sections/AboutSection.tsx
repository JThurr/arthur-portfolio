"use client";

import {motion, useInView} from "framer-motion";
import {useTranslations} from "next-intl";
import {useRef} from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const statKeys = ["experience", "projects", "stacks"] as const;

export default function AboutSection() {
  const t = useTranslations("about");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {once: true, margin: "-90px"});

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
      </div>
    </section>
  );
}
