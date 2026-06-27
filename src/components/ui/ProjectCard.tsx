import Image from "next/image";
import {ExternalLink, LockKeyhole} from "lucide-react";
import type {Project} from "@/lib/data";
import {cn} from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  name: string;
  type: string;
  description: string;
  comingSoonLabel: string;
  viewProjectLabel: string;
};

export default function ProjectCard({
  project,
  name,
  type,
  description,
  comingSoonLabel,
  viewProjectLabel
}: ProjectCardProps) {
  const isAvailable = Boolean(project.href) && !project.comingSoon;

  return (
    <article
      className={cn(
        "group h-full overflow-hidden rounded-xl border bg-[color:var(--color-card)]",
        "border-[color:var(--color-border)] transition duration-200 hover:-translate-y-1 hover:shadow-glow"
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-[color:var(--color-surface)]">
        <Image
          src={project.image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[280px] flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {type}
            </p>
            <h3 className="mt-2 text-xl font-bold text-[color:var(--color-text-primary)]">
              {name}
            </h3>
          </div>
          {project.comingSoon ? (
            <span className="inline-flex items-center gap-1 rounded-lg border border-[color:var(--color-border)] px-2.5 py-1 text-xs font-semibold text-[color:var(--color-text-secondary)]">
              <LockKeyhole size={13} />
              {comingSoonLabel}
            </span>
          ) : null}
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-[color:var(--color-text-secondary)]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-[color:var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[color:var(--color-text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {isAvailable ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {viewProjectLabel}
            <ExternalLink size={15} />
          </a>
        ) : null}
      </div>
    </article>
  );
}
