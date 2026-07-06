import type { Dictionary } from "@/i18n/dictionaries";
import Reveal from "./reveal";

export default function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section id="preguntas" className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="reveal text-[clamp(1.9rem,4.4vw,3rem)]">{dict.title}</h2>

          <div className="reveal mt-8 flex flex-col gap-3" style={{ ["--reveal-delay" as string]: "60ms" }}>
            {dict.items.map((item, i) => (
              <details
                key={item.q}
                className="group rounded-2xl px-5 md:px-6"
                style={{ background: "var(--color-bg)", border: "1px solid var(--color-line)" }}
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform duration-300 group-open:rotate-45"
                    style={{ background: "color-mix(in oklch, var(--color-coral) 16%, transparent)" }}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="var(--color-coral-ink)" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 pr-10 text-[1.02rem]" style={{ color: "var(--color-ink-soft)", lineHeight: 1.6 }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
