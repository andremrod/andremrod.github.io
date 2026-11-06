import type { NextConfig } from "next";

// Site 100% estático (pasta out/): roda em GitHub Pages, Vercel, Netlify ou qualquer servidor.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Se publicar num repositório que NÃO se chama andremrod.github.io no GitHub Pages,
  // defina NEXT_PUBLIC_BASE_PATH=/nome-do-repo no build.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
