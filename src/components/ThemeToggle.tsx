"use client";

import { useEffect, useState } from "react";
import { THEME_KEY } from "@/lib/boot";

type Theme = "light" | "dark";

const BG: Record<Theme, string> = { light: "#f3f4f1", dark: "#101216" };

function resolved(): Theme {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function paintThemeColor(theme: Theme) {
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", BG[theme]));
}

/** Alterna claro/escuro. Sem escolha salva, segue o sistema. */
export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const t = resolved();
    setTheme(t);
    if (document.documentElement.hasAttribute("data-theme")) paintThemeColor(t);

    // Sem escolha manual, acompanha a troca de tema do sistema.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!document.documentElement.hasAttribute("data-theme")) setTheme(mq.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = resolved() === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      paintThemeColor(next);
      setTheme(next);
    };
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (!reduce && doc.startViewTransition) doc.startViewTransition(apply);
    else apply();
  };

  const isDark = theme === "dark";
  const label = isDark ? toLight : toDark;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
      data-state={theme ?? "unknown"}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="theme-toggle__icon">
        <mask id="theme-moon">
          <rect width="24" height="24" fill="#fff" />
          <circle className="theme-toggle__bite" cx="24" cy="6" r="7" fill="#000" />
        </mask>
        <circle className="theme-toggle__core" cx="12" cy="12" r="5" mask="url(#theme-moon)" fill="currentColor" />
        <g className="theme-toggle__rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="1.5" x2="12" y2="3.5" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.4" y2="4.6" />
        </g>
      </svg>
    </button>
  );
}
