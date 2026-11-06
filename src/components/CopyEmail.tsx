"use client";

import { useRef, useState } from "react";

type Props = { email: string; label: string; done: string; fail: string; big?: boolean };

/** Mostra o e-mail como texto selecionável e copia com um clique (mailto pode não abrir em todo lugar). */
export function CopyEmail({ email, label, done, fail, big }: Props) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");
  const textRef = useRef<HTMLSpanElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("done");
    } catch {
      const el = textRef.current;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setState("fail");
    }
    window.setTimeout(() => setState("idle"), 2200);
  }

  return (
    <div className={big ? "copy copy--big" : "copy"}>
      <a className="copy__text" href={`mailto:${email}`}>
        <span ref={textRef}>{email}</span>
      </a>
      <button type="button" className="btn btn--primary" onClick={copy} aria-live="polite">
        {state === "done" ? done : state === "fail" ? fail : label}
      </button>
    </div>
  );
}
