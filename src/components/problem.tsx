import type { Dictionary } from "@/i18n/dictionaries";
import Reveal from "./reveal";

export default function Problem({ dict }: { dict: Dictionary["problem"] }) {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "var(--color-sand)", color: "var(--color-ink)" }}
    >
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="reveal text-[clamp(1.9rem,4.4vw,3rem)]">{dict.title}</h2>
          <p
            className="reveal mt-4 max-w-xl text-lg"
            style={{ color: "var(--color-ink-soft)", ["--reveal-delay" as string]: "80ms" }}
          >
            {dict.lead}
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
          {dict.items.map((item, i) => (
            <div
              key={item}
              className="reveal flex items-start gap-4 border-t py-6"
              style={{
                borderColor: "var(--color-sand-deep)",
                ["--reveal-delay" as string]: `${i * 90}ms`,
              }}
            >
              <span aria-hidden="true" className="mt-1.5 shrink-0">
                <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
                  <path
                    d="M1 7c3-5 5-5 7 0s5 5 7 0 4-3 5-1"
                    stroke="var(--color-coral)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p className="text-lg font-medium md:text-xl" style={{ lineHeight: 1.4 }}>
                {item}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
