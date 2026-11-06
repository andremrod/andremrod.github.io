import type { Lang } from "@/content";
import { ui } from "@/content";

export function toIndex(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

export function nowIndex(): number {
  const d = new Date();
  return d.getFullYear() * 12 + d.getMonth();
}

/** Meses de trabalho, contando o mês de início e o de fim (como o LinkedIn). */
export function monthsWorked(start: string, end: string | null): number {
  return (end ? toIndex(end) : nowIndex()) - toIndex(start) + 1;
}

export function formatMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split("-").map(Number);
  return `${ui[lang].months[m - 1]} ${y}`;
}

export function formatDuration(months: number, lang: Lang): string {
  const t = ui[lang];
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? t.yr(y) : "", m ? t.mo(m) : ""].filter(Boolean).join(" ");
}
