import { Archivo, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

// Baixadas no build e servidas pelo próprio site (sem depender do Google em produção).
export const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" });
export const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500"] });

export const fontVars = `${display.variable} ${body.variable} ${mono.variable}`;
