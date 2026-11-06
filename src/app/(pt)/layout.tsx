import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontVars } from "@/lib/fonts";
import { PersonJsonLd, buildMetadata } from "@/lib/seo";
import { ui } from "@/content";
import { Motion } from "@/components/Motion";

const MOTION_BOOT = `(function(){try{var d=document.documentElement;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window))return;d.classList.add("motion");setTimeout(function(){if(!window.__motionReady)d.classList.remove("motion")},3000)}catch(e){}})();`;

export const metadata: Metadata = buildMetadata("pt");
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f1" },
    { media: "(prefers-color-scheme: dark)", color: "#101216" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={ui.pt.htmlLang} className={fontVars} suppressHydrationWarning>
      <head>
        {/* ativa as animações antes da primeira pintura; sem JS, nada fica escondido */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT }} />
      </head>
      <body>
        <PersonJsonLd lang="pt" />
        {children}
        <Motion />
      </body>
    </html>
  );
}
