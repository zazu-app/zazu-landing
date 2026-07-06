import type { Dictionary } from "@/i18n/dictionaries";
import Reveal from "./reveal";

export default function ValueCycle({ dict }: { dict: Dictionary["value"] }) {
  return (
    <section id="que-hace" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p
            className="reveal mb-3 text-[1.05rem] font-semibold"
            style={{ color: "var(--color-coral-ink)" }}
          >
            {dict.lead}
          </p>
          <h2
            className="reveal text-[clamp(2rem,4.8vw,3.4rem)]"
            style={{ ["--reveal-delay" as string]: "60ms" }}
          >
            {dict.title}
          </h2>
          <p
            className="reveal mt-5 max-w-2xl text-lg md:text-xl"
            style={{ color: "var(--color-ink-soft)", lineHeight: 1.6, ["--reveal-delay" as string]: "120ms" }}
          >
            {dict.body}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ol className="reveal flex flex-wrap items-center gap-x-3 gap-y-4">
            {dict.cycle.map((step, i) => {
              const last = i === dict.cycle.length - 1;
              return (
                <li key={step} className="flex items-center gap-3">
                  <span
                    className="rounded-full border px-4 py-2 text-base font-semibold md:text-lg"
                    style={
                      last
                        ? { background: "var(--color-coral)", color: "var(--color-ink)", borderColor: "transparent" }
                        : { borderColor: "var(--color-sea-mid)", color: "var(--color-sea)" }
                    }
                  >
                    {step}
                  </span>
                  {!last && (
                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden="true">
                      <path
                        d="M2 8h20M17 3l6 5-6 5"
                        stroke="var(--color-sand-deep)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>
          <p
            className="reveal mt-5 text-sm font-medium"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {dict.cycleCaption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
