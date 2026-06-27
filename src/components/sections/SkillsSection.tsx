"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {motion, useInView} from "framer-motion";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useTranslations} from "next-intl";
import {useCallback, useRef} from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillPill from "@/components/ui/SkillPill";
import {skills} from "@/lib/data";

export default function SkillsSection() {
  const t = useTranslations("skills");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {once: true, margin: "-90px"});
  const autoplay = useRef(
    Autoplay({delay: 2200, stopOnInteraction: false, stopOnMouseEnter: true})
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {align: "start", dragFree: true, loop: true},
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="skills"
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
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 18}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.55, delay: 0.14}}
          className="mt-12"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-3">
              {[...skills, ...skills].map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="flex-none">
                  <SkillPill name={skill.name} color={skill.color} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex gap-3">
            <button
              type="button"
              aria-label="Skill anterior"
              onClick={scrollPrev}
              className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Próxima skill"
              onClick={scrollNext}
              className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
