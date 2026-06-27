"use client";

import {motion, useInView} from "framer-motion";
import {useTranslations} from "next-intl";
import {useRef} from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import {projects} from "@/lib/data";

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {once: true, margin: "-90px"});

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{opacity: 0, y: 24}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.48, delay: 0.08 + index * 0.08}}
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
