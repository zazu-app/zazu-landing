import type { Dictionary } from "@/i18n/dictionaries";
import Reveal from "./reveal";

export default function HowItWorks({ dict }: { dict: Dictionary["how"] }) {
  return (
    <section
      id="como"
      className="py-20 md:py-28"
      style={{
        background:
          "linear-gradient(165deg, var(--color-sea) 0%, var(--color-sea-deep) 100%)",
        color: "var(--color-foam)",
      }}
    >
      <div className="container-x">
        <Reveal>
          <h2
            className="reveal max-w-2xl text-[clamp(2rem,4.8vw,3.4rem)]"
            style={{ color: "var(--color-foam)" }}
          >
            {dict.title}
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <ol className="reveal grid gap-x-10 gap-y-12 md:grid-cols-3">
            {dict.steps.map((step, i) => (
              <li
                key={step.title}
                className="relative"
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              >
                <div
                  className="mb-5 flex items-baseline gap-3 border-b pb-5"
                  style={{ borderColor: "color-mix(in oklch, var(--color-foam) 22%, transparent)" }}
                >
                  <span
                    className="text-[3.2rem] font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-coral)" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--color-foam)" }}>
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-[1.02rem]"
                  style={{
                    color: "color-mix(in oklch, var(--color-foam) 82%, transparent)",
                    lineHeight: 1.65,
                  }}
                >
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
