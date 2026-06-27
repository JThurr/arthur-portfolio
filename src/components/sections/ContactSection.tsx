"use client";

import {motion, useInView} from "framer-motion";
import {Github, Linkedin, Mail, MessageCircle} from "lucide-react";
import {useTranslations} from "next-intl";
import {useRef, type ElementType} from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import {contactLinks} from "@/lib/data";

const iconMap: Record<string, ElementType> = {
  Github,
  Linkedin,
  Mail,
  MessageCircle
};

export default function ContactSection() {
  const t = useTranslations("contact");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {once: true, margin: "-90px"});

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[color:var(--color-surface)]"
    >
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
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--color-text-secondary)]">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, index) => {
            const Icon = iconMap[link.icon];

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{opacity: 0, y: 18}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.42, delay: 0.08 + index * 0.08}}
                className="group rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="flex items-center gap-2 text-sm font-bold text-accent">
                  <Icon size={17} />
                  {link.label}
                </span>
                <span className="mt-3 block break-words text-sm text-[color:var(--color-text-secondary)] transition-colors group-hover:text-[color:var(--color-text-primary)]">
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
