"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export default function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = isMounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-lg border transition-colors",
        "border-[color:var(--color-border)] bg-[color:var(--color-card)]",
        "text-[color:var(--color-text-secondary)] hover:text-accent"
      )}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
