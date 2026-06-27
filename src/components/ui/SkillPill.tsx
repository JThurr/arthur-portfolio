import type {Skill} from "@/lib/data";
import {cn} from "@/lib/utils";

const colorClasses: Record<Skill["color"], string> = {
  indigo: "border-accent/35 bg-accent/10 text-accent",
  cyan: "border-cyan-400/35 bg-cyan-400/10 text-cyan-500 dark:text-cyan-300",
  green: "border-emerald-400/35 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300",
  neutral:
    "border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-text-primary)]"
};

type SkillPillProps = {
  name: string;
  color: Skill["color"];
};

export default function SkillPill({name, color}: SkillPillProps) {
  return (
    <div
      className={cn(
        "grid h-12 place-items-center rounded-lg border px-5 text-sm font-semibold shadow-sm",
        "whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5",
        colorClasses[color]
      )}
    >
      {name}
    </div>
  );
}
