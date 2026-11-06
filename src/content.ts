/**
 * Todo o texto do site, em português e inglês.
 * Para atualizar o portfólio, edite só este arquivo.
 *
 * Onde houver TODO, troque por um número real quando tiver (ex.: "reduzi o LCP em 40%").
 * Recrutadores e a busca com IA dão muito mais peso a resultados com números.
 */

export type Lang = "pt" | "en";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://andremrod.github.io").replace(/\/$/, "");

export const person = {
  name: "André Macedo Rodrigues",
  email: "andremrodr@gmail.com",
  linkedin: "https://www.linkedin.com/in/andr%C3%A9-macedo-rodrigues-074628176/",
  github: "https://github.com/andremrod",
  githubUser: "andremrod",
  city: "São Paulo, Brasil",
  startYear: 2016,
};

export type Role = {
  company: string;
  title: Record<Lang, string>;
  start: string; // AAAA-MM
  end: string | null;
  stack: string[];
  summary: Record<Lang, string>;
  points: Record<Lang, string[]>;
};

/** Experiências, da mais recente para a mais antiga. Fatos do perfil do LinkedIn (nov/2026). */
export const roles: Role[] = [
  {
    company: "Globo",
    title: { pt: "Desenvolvedor Front-end Sênior", en: "Senior Frontend Engineer" },
    start: "2022-05",
    end: null,
    stack: ["Next.js", "React Native", "React", "TypeScript", "Micro frontends"],
    summary: {
      pt: "Front-end da plataforma digital da Globo, na web e no app.",
      en: "Front end of Globo's digital platform, on web and mobile.",
    },
    points: {
      pt: [
        "Desenvolvo o front-end da plataforma digital com Next.js (web) e React Native (app).",
        "Trabalho com arquitetura de micro frontends, integrando partes da plataforma com Module Federation e Web Components.",
        "Code review e trabalho junto com produto e design em times ágeis (Kanban).",
        // TODO: adicione 1–2 resultados com número (performance, engajamento, entregas).
      ],
      en: [
        "Build the front end of the digital platform with Next.js (web) and React Native (mobile).",
        "Work on a micro-frontend architecture, composing parts of the platform with Module Federation and Web Components.",
        "Code review and close collaboration with product and design in agile (Kanban) teams.",
      ],
    },
  },
  {
    company: "QuintoAndar",
    title: { pt: "Desenvolvedor Front-end Sênior", en: "Senior Frontend Engineer" },
    start: "2021-04",
    end: "2022-05",
    stack: ["Next.js", "React Native", "React", "Micro frontends"],
    summary: {
      pt: "Aplicação web e app da plataforma de aluguel e venda de imóveis.",
      en: "Web application and mobile app of the real-estate rental and sales platform.",
    },
    points: {
      pt: [
        "Desenvolvi o front-end da aplicação web em Next.js e do app em React Native.",
        "Atuei em uma arquitetura de micro frontends na aplicação web.",
        "Contribuí para o crescimento e a fidelização de clientes da plataforma.",
      ],
      en: [
        "Built the web front end in Next.js and the mobile app in React Native.",
        "Worked within a micro-frontend architecture on the web application.",
        "Contributed to customer growth and retention on the platform.",
      ],
    },
  },
  {
    company: "Carguero",
    title: { pt: "Desenvolvedor Front-end · Líder do squad Embarcador", en: "Frontend Engineer · Shipper squad lead" },
    start: "2020-03",
    end: "2021-04",
    stack: ["React", "Redux", "Micro frontends"],
    summary: {
      pt: "Liderança do front-end do squad que conecta embarcadores e transportadoras.",
      en: "Led the frontend of the squad connecting shippers and carriers.",
    },
    points: {
      pt: [
        "Liderei o front-end do squad Embarcador na plataforma de logística.",
        "Mantive e refatorei a aplicação em React e Redux, melhorando a integração entre embarcadores e transportadoras.",
        "Desenvolvi o front-end do squad dentro de uma arquitetura de micro frontends.",
      ],
      en: [
        "Led the frontend of the Shipper squad on the logistics platform.",
        "Maintained and refactored the React and Redux application, improving the integration between shippers and carriers.",
        "Built the squad's frontend within a micro-frontend architecture.",
      ],
    },
  },
  {
    company: "Daimler Truck Financial Services",
    title: { pt: "Desenvolvedor Front-end", en: "Frontend Engineer" },
    start: "2019-03",
    end: "2020-03",
    stack: ["Angular 8+", "AngularJS"],
    summary: {
      pt: "Sistema de gestão do banco Daimler e sua migração de framework.",
      en: "Daimler's banking back office and its framework migration.",
    },
    points: {
      pt: [
        "Migrei o sistema de gestão do banco de AngularJS para Angular 8+.",
        "Desenvolvi funcionalidades seguindo as regras de negócio do banco e melhorei a plataforma.",
      ],
      en: [
        "Migrated the bank's back office from AngularJS to Angular 8+.",
        "Shipped features following the bank's business rules and improved the platform.",
      ],
    },
  },
  {
    company: "TAQE",
    title: { pt: "Desenvolvedor Front-end · Líder de front-end", en: "Frontend Engineer · Frontend lead" },
    start: "2018-08",
    end: "2019-03",
    stack: ["Angular 7+", "AngularJS", "Ionic", "Node.js"],
    summary: {
      pt: "App de recrutamento e liderança do front-end da nova plataforma.",
      en: "Recruiting app and frontend lead for the new platform.",
    },
    points: {
      pt: [
        "Desenvolvi o aplicativo em AngularJS e Ionic consumindo API em Node.",
        "Liderei, em paralelo, o front-end da plataforma criada em Angular 7+.",
      ],
      en: [
        "Built the mobile app with AngularJS and Ionic on top of a Node API.",
        "Led, in parallel, the frontend of the platform built with Angular 7+.",
      ],
    },
  },
  {
    company: "Ts Tech",
    title: { pt: "Desenvolvedor Front-end", en: "Frontend Developer" },
    start: "2016-02",
    end: "2018-08",
    stack: ["HTML", "CSS", "jQuery", "PHP"],
    summary: {
      pt: "Início da carreira: sistemas web do zero.",
      en: "Where it started: web systems built from scratch.",
    },
    points: {
      pt: ["Desenvolvi sistemas web com HTML, CSS, PHP e jQuery."],
      en: ["Built web systems with HTML, CSS, PHP and jQuery."],
    },
  },
];

/** Casos em destaque: histórias curtas que mostram o tipo de problema que você resolve. */
export const cases: { slug: string; company: string; title: Record<Lang, string>; body: Record<Lang, string>; tags: string[] }[] = [
  {
    slug: "globo",
    company: "Globo",
    title: { pt: "Uma plataforma, web e app", en: "One platform, web and app" },
    body: {
      pt: "Na Globo, construo o front-end da plataforma digital com Next.js na web e React Native no app, mantendo a experiência consistente entre as duas.",
      en: "At Globo I build the digital platform's front end with Next.js on the web and React Native on mobile, keeping the experience consistent across both.",
    },
    tags: ["Next.js", "React Native"],
  },
  {
    slug: "micro-frontends",
    company: "Globo · QuintoAndar · Carguero",
    title: { pt: "Micro frontends em três empresas", en: "Micro frontends at three companies" },
    body: {
      pt: "Trabalhei com micro frontends na Globo, no QuintoAndar e no Carguero, compondo aplicações com Module Federation e Web Components para que times diferentes publiquem partes do produto de forma independente.",
      en: "I worked with micro frontends at Globo, QuintoAndar and Carguero, composing applications with Module Federation and Web Components so different teams can ship parts of the product independently.",
    },
    tags: ["Module Federation", "Web Components"],
  },
  {
    slug: "daimler",
    company: "Daimler Truck Financial Services",
    title: { pt: "Migração de AngularJS para Angular 8+", en: "Migrating AngularJS to Angular 8+" },
    body: {
      pt: "Levei o sistema de gestão do banco de AngularJS para Angular 8+, mantendo as regras de negócio de um produto financeiro em uso.",
      en: "Moved the bank's back office from AngularJS to Angular 8+ while keeping the business rules of a live financial product intact.",
    },
    tags: ["Angular", "Migração"],
  },
  {
    slug: "carguero",
    company: "Carguero",
    title: { pt: "Liderança de front-end em squad", en: "Leading frontend in a squad" },
    body: {
      pt: "Fui a referência de front-end do squad Embarcador: mantive e refatorei a aplicação React + Redux que liga embarcadores e transportadoras.",
      en: "I was the frontend lead of the Shipper squad, maintaining and refactoring the React + Redux app that connects shippers and carriers.",
    },
    tags: ["React", "Redux", "Liderança"],
  },
];

/** Seção "Do banco à tela": as camadas em que você trabalha, de cima (tela) para baixo (dados). */
export const layers: { slug: string; name: Record<Lang, string>; items: string[] }[] = [
  { slug: "interface", name: { pt: "Interface", en: "Interface" }, items: ["React", "Next.js", "React Native", "TypeScript"] },
  { slug: "composicao", name: { pt: "Composição", en: "Composition" }, items: ["Micro frontends", "Module Federation", "Web Components"] },
  { slug: "bff", name: { pt: "BFF / API Gateway", en: "BFF / API Gateway" }, items: ["Node.js", "Express", "Autenticação", "Integrações"] },
  { slug: "servicos", name: { pt: "Serviços", en: "Services" }, items: ["REST APIs", "Java", ".NET (C#)", "Node.js"] },
  { slug: "dados", name: { pt: "Dados", en: "Data" }, items: ["PostgreSQL", "MongoDB"] },
];
export const infra = ["Docker", "CI/CD", "Azure"];

export const backendWork: { title: Record<Lang, string>; body: Record<Lang, string> }[] = [
  {
    title: { pt: "APIs REST para os front-ends", en: "REST APIs for the front ends" },
    body: {
      pt: "Desenho e construo os endpoints que as aplicações web e mobile consomem, em Node.js com Express, Java e .NET.",
      en: "I design and build the endpoints that web and mobile apps consume, in Node.js with Express, Java and .NET.",
    },
  },
  {
    title: { pt: "BFF e API Gateway", en: "BFF and API Gateway" },
    body: {
      pt: "Crio camadas Backend for Frontend que agregam vários serviços e entregam a cada tela só o que ela precisa.",
      en: "I build Backend-for-Frontend layers that aggregate several services and give each screen exactly what it needs.",
    },
  },
  {
    title: { pt: "Integrações e autenticação", en: "Integrations and authentication" },
    body: {
      pt: "Integro sistemas externos e implemento autenticação, com dados em PostgreSQL e MongoDB e entrega em Docker e CI/CD.",
      en: "I integrate external systems and implement authentication, with data in PostgreSQL and MongoDB and delivery through Docker and CI/CD.",
    },
  },
];

/** Competências agrupadas. Inclua aqui só o que você usa de verdade (ex.: testes, performance, acessibilidade). */
export const skills: { group: Record<Lang, string>; items: string[] }[] = [
  { group: { pt: "Front-end", en: "Frontend" }, items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "React Hooks", "Angular", "HTML", "CSS / Sass", "Design responsivo"] },
  { group: { pt: "Micro frontends", en: "Micro frontends" }, items: ["Module Federation", "Web Components", "iframes"] },
  { group: { pt: "Back-end", en: "Backend" }, items: ["Node.js", "Express", "Java", ".NET (C#)", "REST APIs", "BFF / API Gateway", "Autenticação", "Integrações"] },
  { group: { pt: "Dados", en: "Data" }, items: ["PostgreSQL", "MongoDB"] },
  { group: { pt: "Infra e entrega", en: "Infra & delivery" }, items: ["Docker", "CI/CD", "Azure", "Git", "GitHub"] },
  { group: { pt: "Mobile", en: "Mobile" }, items: ["React Native", "Ionic"] },
  { group: { pt: "Forma de trabalho", en: "Ways of working" }, items: ["Kanban", "Code review", "Liderança de front-end"] },
];

export const education = {
  school: "FATEC Zona Leste",
  course: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
  years: "2017 – 2020",
};

export const certifications = [
  { name: "React + Redux", issuer: "Udemy", year: 2020 },
  { name: "Node.js", issuer: "Alura", year: 2019 },
  { name: "Git", issuer: "Alura", year: 2019 },
  { name: "NPM", issuer: "Alura", year: 2019 },
  { name: "Sass e Compass", issuer: "Alura", year: 2019 },
  { name: "Programador Angular", issuer: "Alura", year: 2018 },
  { name: "Desenvolvimento web com ES6, TypeScript e Angular", issuer: "Udemy", year: 2018 },
  { name: "JavaScript", issuer: "Udacity Brasil", year: 2018 },
  { name: "React Native", issuer: "Udemy", year: 2018 },
];

export const ui = {
  pt: {
    htmlLang: "pt-BR",
    title: "André Macedo Rodrigues · Desenvolvedor Front-end Sênior · Fullstack",
    description:
      "Desenvolvedor Front-end Sênior e Fullstack em São Paulo, com 10 anos de experiência. React, Next.js, React Native e micro frontends no front; Node.js, Java, .NET, PostgreSQL, MongoDB e Docker no back. Hoje na Globo; antes QuintoAndar, Carguero e Daimler.",
    role: "Desenvolvedor Front-end Sênior · Fullstack",
    intro:
      "Construo produtos web e mobile de ponta a ponta: a interface em React, Next.js e React Native, em arquiteturas de micro frontends, e as APIs e BFFs que a alimentam, em Node.js, Java e .NET. São 10 anos de experiência, passando por Globo, QuintoAndar, Carguero e Daimler.",
    available: "Aberto a vagas de Front-end Sênior e Fullstack · remoto ou São Paulo",
    nav: { work: "Trajetória", cases: "Destaques", fullstack: "Fullstack", skills: "Stack", contact: "Contato" },
    eraTitle: "10 anos, 6 empresas, 4 gerações de front-end",
    eraNote: "Cada faixa é uma empresa, com largura proporcional ao tempo e a stack que eu usei lá.",
    workTitle: "Trajetória",
    now: "hoje",
    casesTitle: "Destaques",
    fsTitle: "Do banco à tela",
    fsLead: "Além do front-end, trabalho nas camadas que o alimentam. Estas são as camadas em que atuo, da tela até os dados.",
    fsInfra: "Em todas as camadas",
    skillsTitle: "Stack",
    educationTitle: "Formação",
    certsTitle: "Certificados",
    contactTitle: "Vamos conversar",
    contactBody: "Estou aberto a vagas de Front-end Sênior e Fullstack, presenciais em São Paulo ou remotas. O jeito mais rápido é por e-mail ou mensagem no LinkedIn.",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
    copyFail: "Selecione o e-mail e copie",
    langSwitch: "English",
    langHref: "/en/",
    footer: "Feito por André com Next.js e TypeScript. Código aberto no GitHub.",
    months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    yr: (n: number) => (n === 1 ? "1 ano" : `${n} anos`),
    mo: (n: number) => (n === 1 ? "1 mês" : `${n} meses`),
  },
  en: {
    htmlLang: "en",
    title: "André Macedo Rodrigues · Senior Frontend / Full Stack Engineer",
    description:
      "Senior Frontend / Full Stack Engineer in São Paulo, Brazil, with 10 years of experience. React, Next.js, React Native and micro frontends on the front end; Node.js, Java, .NET, PostgreSQL, MongoDB and Docker on the back end. Currently at Globo; previously QuintoAndar, Carguero and Daimler.",
    role: "Senior Frontend / Full Stack Engineer",
    intro:
      "I build web and mobile products end to end: the interface in React, Next.js and React Native on micro-frontend architectures, and the APIs and BFFs behind it in Node.js, Java and .NET. Ten years of experience across Globo, QuintoAndar, Carguero and Daimler.",
    available: "Open to Senior Frontend and Full Stack roles · remote or São Paulo",
    nav: { work: "Experience", cases: "Highlights", fullstack: "Full stack", skills: "Stack", contact: "Contact" },
    eraTitle: "10 years, 6 companies, 4 generations of frontend",
    eraNote: "Each band is a company, sized by time spent, with the stack I used there.",
    workTitle: "Experience",
    now: "present",
    casesTitle: "Highlights",
    fsTitle: "From database to screen",
    fsLead: "Beyond the front end, I work on the layers that feed it. These are the layers I work in, from the screen down to the data.",
    fsInfra: "Across every layer",
    skillsTitle: "Stack",
    educationTitle: "Education",
    certsTitle: "Certifications",
    contactTitle: "Let's talk",
    contactBody: "I'm open to Senior Frontend and Full Stack roles, remote or in São Paulo. Email or a LinkedIn message is the fastest way to reach me.",
    copy: "Copy email",
    copied: "Email copied",
    copyFail: "Select the email to copy it",
    langSwitch: "Português",
    langHref: "/",
    footer: "Built by André with Next.js and TypeScript. Source on GitHub.",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    yr: (n: number) => (n === 1 ? "1 yr" : `${n} yrs`),
    mo: (n: number) => (n === 1 ? "1 mo" : `${n} mos`),
  },
} as const;
