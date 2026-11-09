/**
 * Roda no <head> antes da primeira pintura:
 * 1. aplica o tema salvo (claro/escuro) para não piscar o tema errado;
 * 2. ativa as animações (sem JS, nada fica escondido).
 */
export const THEME_KEY = "theme";

export const BOOT = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark")d.setAttribute("data-theme",t)}catch(e){}try{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window))return;d.classList.add("motion");setTimeout(function(){if(!window.__motionReady)d.classList.remove("motion")},3000)}catch(e){}})();`;
