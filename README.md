# André Macedo Rodrigues — Portfólio

Site pessoal de **André Macedo Rodrigues**, Desenvolvedor Front-end Sênior (React, Next.js, React Native).
Em português (`/`) e inglês (`/en/`).

**Stack:** Next.js 15 (App Router, export estático), React 19 e TypeScript. CSS puro, com tema claro e escuro automático.
Não há JavaScript de terceiros nem rastreamento. As fontes são servidas pelo próprio site.

## Rodar no computador

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera a pasta out/ (site estático)
npm start          # serve a pasta out/
```

## Editar o conteúdo

Todo o texto fica em [`src/content.ts`](src/content.ts): experiências, destaques, stack, formação e certificados, nas duas línguas.
Procure os `TODO` e acrescente resultados com números (ex.: "reduzi o LCP em 40%"), que são o que mais chama atenção de recrutadores.

## Publicar

### Opção A — GitHub Pages (grátis, recomendado)
1. Crie no GitHub um repositório público chamado **`andremrod.github.io`**.
2. Na pasta do projeto:
   ```bash
   git init -b main
   git add .
   git commit -m "Portfólio inicial"
   git remote add origin https://github.com/andremrod/andremrod.github.io.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Source: GitHub Actions**.
4. Em 1–2 minutos o site estará em **https://andremrod.github.io**.

### Opção B — Vercel (grátis)
1. Suba o código para qualquer repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório (detecta Next.js sozinho).
3. Em *Environment Variables*, defina `NEXT_PUBLIC_SITE_URL` com a URL final (ex.: `https://andremrod.vercel.app`).

### Domínio próprio (opcional)
Com um domínio (ex.: `andremacedo.dev`), configure-o em Settings → Pages (ou na Vercel) e troque `NEXT_PUBLIC_SITE_URL` para ele.

## Depois de publicar
- Coloque o link no LinkedIn: **Dados de contato → Site** e em **Destaques**.
- Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie `/sitemap.xml`.
- O site já traz dados estruturados (schema.org `Person`), `hreflang` PT/EN, sitemap e robots, o que ajuda o Google e as buscas com IA a entenderem quem você é.
