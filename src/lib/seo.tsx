import type { Metadata } from "next";
import { SITE_URL, education, person, roles, skills, ui, type Lang } from "@/content";

export function buildMetadata(lang: Lang): Metadata {
  const t = ui[lang];
  const path = lang === "pt" ? "/" : "/en/";
  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    alternates: { canonical: path, languages: { "pt-BR": "/", en: "/en/", "x-default": "/" } },
    openGraph: {
      type: "profile",
      title: t.title,
      description: t.description,
      url: path,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      firstName: "André",
      lastName: "Macedo Rodrigues",
    },
    twitter: { card: "summary", title: t.title, description: t.description },
    robots: { index: true, follow: true },
  };
}

/** Dados estruturados (schema.org/Person): ajudam Google e buscas com IA a entender quem você é. */
export function PersonJsonLd({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const current = roles.find((r) => r.end === null);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: SITE_URL + (lang === "pt" ? "/" : "/en/"),
    email: `mailto:${person.email}`,
    jobTitle: t.role,
    description: t.description,
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
    worksFor: current ? { "@type": "Organization", name: current.company } : undefined,
    alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
    knowsAbout: skills.flatMap((g) => g.items),
    knowsLanguage: ["pt-BR", "en"],
    sameAs: [person.linkedin, person.github],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
