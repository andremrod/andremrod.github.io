import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { EraChart } from "@/components/EraChart";
import { backendWork, cases, certifications, education, infra, layers, person, projects, roles, skills, ui, type Lang } from "@/content";
import { formatDuration, formatMonth, monthsWorked } from "@/lib/dates";
import type { CSSProperties } from "react";

/** Marca um elemento para animar ao entrar na tela; i = ordem no escalonamento. */
const reveal = (i = 0) => ({ "data-reveal": "", style: { "--i": i } as CSSProperties });

export function Portfolio({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const initials = person.name
    .split(" ")
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .join("");

  return (
    <>
      <a className="skip" href="#conteudo">
        {lang === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <header className="topbar">
        <div className="wrap topbar__inner">
          <Link className="mark" href={lang === "pt" ? "/" : "/en/"} aria-label={person.name}>
            {initials}
          </Link>
          <nav aria-label={lang === "pt" ? "Seções" : "Sections"}>
            <a href="#trajetoria">{t.nav.work}</a>
            <a href="#destaques">{t.nav.cases}</a>
            <a href="#projetos">{t.nav.projects}</a>
            <a href="#fullstack">{t.nav.fullstack}</a>
            <a href="#stack">{t.nav.skills}</a>
            <a href="#contato">{t.nav.contact}</a>
          </nav>
          <Link className="lang" href={t.langHref} hrefLang={lang === "pt" ? "en" : "pt-BR"}>
            {t.langSwitch}
          </Link>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero wrap">
          <p className="eyebrow" {...reveal(0)}>
            {person.city} · {lang === "pt" ? "front-end desde" : "frontend since"} {person.startYear}
          </p>
          <h1 className="hero__name" {...reveal(1)}>{person.name}</h1>
          <p className="hero__role" {...reveal(2)}>{t.role}</p>
          <p className="hero__intro" {...reveal(3)}>{t.intro}</p>
          <p className="status" {...reveal(4)}>
            <span className="status__dot" aria-hidden="true" />
            {t.available}
          </p>
          <div className="hero__actions" {...reveal(5)}>
            <CopyEmail email={person.email} label={t.copy} done={t.copied} fail={t.copyFail} />
            <div className="links">
              <a className="btn" href={person.linkedin} target="_blank" rel="noopener me">
                LinkedIn
              </a>
              <a className="btn" href={person.github} target="_blank" rel="noopener me">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="era-title">
          <div className="wrap">
            <h2 id="era-title" className="h2" {...reveal(0)}>
              {t.eraTitle}
            </h2>
            <p className="muted" {...reveal(1)}>
              {t.eraNote}
            </p>
            <EraChart lang={lang} />
          </div>
        </section>

        <section id="trajetoria" className="wrap section" aria-labelledby="work-title">
          <h2 id="work-title" className="h2" {...reveal(0)}>
            {t.workTitle}
          </h2>
          <ol className="roles">
            {roles.map((r) => {
              const months = monthsWorked(r.start, r.end);
              return (
                <li key={r.company + r.start} className="role" {...reveal(0)}>
                  <div className="role__when">
                    <span>
                      {formatMonth(r.start, lang)} – {r.end ? formatMonth(r.end, lang) : t.now}
                    </span>
                    <span className="muted">{formatDuration(months, lang)}</span>
                  </div>
                  <div className="role__body">
                    <h3 className="role__title">
                      {r.title[lang]} <span className="role__at">· {r.company}</span>
                    </h3>
                    <p className="role__summary">{r.summary[lang]}</p>
                    <ul className="role__points">
                      {r.points[lang].map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <ul className="chips" aria-label="Stack">
                      {r.stack.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section id="destaques" className="wrap section" aria-labelledby="cases-title">
          <h2 id="cases-title" className="h2" {...reveal(0)}>
            {t.casesTitle}
          </h2>
          <div className="cases">
            {cases.map((c, i) => (
              <article key={c.slug} className="case" {...reveal(i)}>
                <p className="eyebrow">{c.company}</p>
                <h3 className="case__title">{c.title[lang]}</h3>
                <p>{c.body[lang]}</p>
                <ul className="chips">
                  {c.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projetos" className="wrap section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="h2" {...reveal(0)}>
            {t.projectsTitle}
          </h2>
          <p className="lead" {...reveal(1)}>
            {t.projectsLead}
          </p>
          <div className="projects">
            {projects.map((p, i) => (
              <article key={p.slug} className="case project" {...reveal(i % 2)}>
                <p className="eyebrow">{p.kind[lang]}</p>
                <h3 className="case__title">{p.name}</h3>
                <p>{p.body[lang]}</p>
                <ul className="chips">
                  {p.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="project__links">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      className={l.primary ? "btn btn--primary" : "btn"}
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                    >
                      {l.label[lang]}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="fullstack" className="wrap section" aria-labelledby="fs-title">
          <h2 id="fs-title" className="h2" {...reveal(0)}>
            {t.fsTitle}
          </h2>
          <p className="lead" {...reveal(1)}>
            {t.fsLead}
          </p>
          <div className="fs">
            <figure className="stackmap" aria-label={t.fsTitle} {...reveal(0)}>
              <ol className="stackmap__layers">
                {layers.map((l) => (
                  <li key={l.slug} className={`stackmap__layer stackmap__layer--${l.slug}`}>
                    <span className="stackmap__name">{l.name[lang]}</span>
                    <span className="stackmap__items mono">{l.items.join(" · ")}</span>
                  </li>
                ))}
              </ol>
              <div className="stackmap__infra">
                <span className="stackmap__name">{t.fsInfra}</span>
                <span className="stackmap__items mono">{infra.join(" · ")}</span>
              </div>
            </figure>
            <ul className="fs__work">
              {backendWork.map((w, i) => (
                <li key={w.title.en} {...reveal(i + 2)}>
                  <h3 className="fs__title">{w.title[lang]}</h3>
                  <p className="muted-2">{w.body[lang]}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stack" className="wrap section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="h2" {...reveal(0)}>
            {t.skillsTitle}
          </h2>
          <dl className="skills">
            {skills.map((g, i) => (
              <div key={g.group.en} className="skills__row" {...reveal(i)}>
                <dt>{g.group[lang]}</dt>
                <dd>
                  <ul className="chips">
                    {g.items.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>

          <div className="edu">
            <div {...reveal(0)}>
              <h3 className="h3">{t.educationTitle}</h3>
              <p>
                <strong>{education.course[lang]}</strong>
                <br />
                {education.school} · <span className="mono">{education.years}</span>
              </p>
            </div>
            <div {...reveal(1)}>
              <h3 className="h3">{t.certsTitle}</h3>
              <ul className="certs">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <span>{c.name}</span>
                    <span className="muted mono">
                      {c.issuer} · {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <h2 id="contact-title" className="contact__title" {...reveal(0)}>
              {t.contactTitle}
            </h2>
            <p className="contact__body" {...reveal(1)}>
              {t.contactBody}
            </p>
            <div className="contact__actions" {...reveal(2)}>
              <CopyEmail email={person.email} label={t.copy} done={t.copied} fail={t.copyFail} big />
            </div>
            <div className="links" {...reveal(3)}>
              <a className="btn" href={person.linkedin} target="_blank" rel="noopener me">
                LinkedIn
              </a>
              <a className="btn" href={person.github} target="_blank" rel="noopener me">
                github.com/{person.githubUser}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <p className="muted">{t.footer}</p>
        <p className="muted mono">© {new Date().getFullYear()} {person.name}</p>
      </footer>
    </>
  );
}
