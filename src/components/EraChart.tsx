import { roles, ui, type Lang } from "@/content";
import { formatDuration, monthsWorked, nowIndex, toIndex } from "@/lib/dates";

/**
 * Linha do tempo em escala: uma faixa por empresa, posicionada pelos meses reais.
 * Mais antiga em cima, para a evolução da stack ler de cima para baixo.
 */
export function EraChart({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const first = Math.min(...roles.map((r) => toIndex(r.start)));
  const startYear = Math.floor(first / 12);
  const endIdx = nowIndex();
  const endYear = Math.floor(endIdx / 12) + 1;
  const span = (endYear - startYear) * 12;
  const pct = (idx: number) => ((idx - startYear * 12) / span) * 100;
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  const ordered = [...roles].reverse();

  return (
    <figure className="era">
      <div className="era__axis" aria-hidden="true">
        {years.map((y, i) => (
          <span key={y} className={i % 2 ? "era__tick era__tick--odd" : "era__tick"} style={{ left: `${pct(y * 12)}%` }}>
            {y}
          </span>
        ))}
      </div>
      <ol className="era__rows">
        {ordered.map((r, i) => {
          const s = toIndex(r.start);
          const e = r.end ? toIndex(r.end) : endIdx;
          const left = pct(s);
          const width = Math.max(pct(e + 1) - left, 1.5);
          const months = monthsWorked(r.start, r.end);
          // um só tom que escurece com o tempo: a ordem fica visível sem legenda
          const strength = 0.35 + (0.65 * i) / Math.max(ordered.length - 1, 1);
          return (
            <li key={r.company + r.start} className="era__row">
              <div className="era__label">
                <span className="era__company">{r.company}</span>
                <span className="era__stack mono">{r.stack.join(" · ")}</span>
              </div>
              <div className="era__track">
                {years.map((y) => (
                  <span key={y} className="era__grid" style={{ left: `${pct(y * 12)}%` }} aria-hidden="true" />
                ))}
                <span
                  className="era__bar"
                  style={{ left: `${left}%`, width: `${width}%`, opacity: strength }}
                  title={`${r.company}: ${formatDuration(months, lang)}`}
                />
                <span
                  className="era__dur mono"
                  style={left + width > 72 ? { right: `calc(${100 - left}% + 8px)` } : { left: `calc(${left + width}% + 8px)` }}
                >
                  {r.end ? formatDuration(months, lang) : `${formatDuration(months, lang)} · ${t.now}`}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
