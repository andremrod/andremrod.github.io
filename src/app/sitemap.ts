import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, alternates: { languages: { en: `${SITE_URL}/en/` } } },
    { url: `${SITE_URL}/en/`, lastModified: now, alternates: { languages: { "pt-BR": `${SITE_URL}/` } } },
  ];
}
