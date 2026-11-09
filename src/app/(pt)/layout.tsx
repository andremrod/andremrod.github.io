import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontVars } from "@/lib/fonts";
import { PersonJsonLd, buildMetadata } from "@/lib/seo";
import { ui } from "@/content";
import { Motion } from "@/components/Motion";
import { BOOT } from "@/lib/boot";

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
        {/* tema salvo + animações, antes da primeira pintura (ver lib/boot.ts) */}
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <PersonJsonLd lang="pt" />
        {children}
        <Motion />
      </body>
    </html>
  );
}
