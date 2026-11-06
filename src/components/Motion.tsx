"use client";

import { useEffect } from "react";

/**
 * Animações de entrada e estado do cabeçalho.
 * Progressivo: o conteúdo é visível sem JS; a classe "motion" só entra se o usuário
 * não pediu movimento reduzido, e só então os elementos começam escondidos.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onScroll = () => root.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (reduce.matches || !("IntersectionObserver" in window)) {
      root.classList.remove("motion");
      return () => window.removeEventListener("scroll", onScroll);
    }

    (window as unknown as { __motionReady?: boolean }).__motionReady = true;
    root.classList.add("motion");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    // Pulos de rolagem (links âncora, tecla End): o que ficou acima da tela aparece direto.
    let raf = 0;
    const revealPassed = () => {
      raf = 0;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => {
        if (el.getBoundingClientRect().bottom < 0) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      });
    };
    const onJump = () => {
      if (!raf) raf = window.requestAnimationFrame(revealPassed);
    };
    window.addEventListener("scroll", onJump, { passive: true });

    // Segurança: se algo não for observado (aba em segundo plano, print), mostra tudo.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("is-in");
      });
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", onJump);
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
