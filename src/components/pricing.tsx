import type { Dictionary } from "@/i18n/dictionaries";
import Reveal from "./reveal";

type PricingPlan = {
  name: string;
  price: string;
  forWho: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

export default function Pricing({ dict }: { dict: Dictionary["pricing"] }) {
  const plans = dict.plans as PricingPlan[];
  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="reveal text-[clamp(1.9rem,4.4vw,3rem)]">{dict.title}</h2>
          <p
            className="reveal mt-4 text-lg"
            style={{ color: "var(--color-ink-soft)", ["--reveal-delay" as string]: "70ms" }}
          >
            {dict.intro}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="reveal grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((plan) => {
              const featured = Boolean(plan.featured);
              return (
                <div
                  key={plan.name}
                  className="relative flex flex-col rounded-3xl p-7 md:p-8"
                  style={
                    featured
                      ? {
                          background:
                            "linear-gradient(165deg, var(--color-sea) 0%, var(--color-sea-deep) 100%)",
                          color: "var(--color-foam)",
                          boxShadow: "0 30px 60px -30px oklch(0.21 0.045 205 / 0.7)",
                        }
                      : {
                          background: "var(--color-bg)",
                          border: "1px solid var(--color-line)",
                        }
                  }
                >
                  {plan.badge && (
                    <span
                      className="absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-bold"
                      style={{ background: "var(--color-coral)", color: "var(--color-ink)" }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-bold" style={featured ? { color: "var(--color-foam)" } : undefined}>
                    {plan.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-baseline gap-x-1.5">
                    <span
                      className="whitespace-nowrap text-[clamp(1.85rem,2.4vw,2.3rem)] font-extrabold leading-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: featured
                          ? "color-mix(in oklch, var(--color-foam) 80%, transparent)"
                          : "var(--color-ink-soft)",
                      }}
                    >
                      {dict.perMonth}
                    </span>
                  </div>
                  <p
                    className="mt-0.5 text-xs"
                    style={{
                      color: featured
                        ? "color-mix(in oklch, var(--color-foam) 75%, transparent)"
                        : "var(--color-ink-soft)",
                    }}
                  >
                    {dict.annualNote}
                  </p>

                  <p
                    className="mt-4 text-[0.95rem]"
                    style={{
                      color: featured
                        ? "color-mix(in oklch, var(--color-foam) 88%, transparent)"
                        : "var(--color-ink-soft)",
                    }}
                  >
                    {plan.forWho}
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-[0.95rem]">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="mt-0.5 shrink-0"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="var(--color-coral)"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          style={{
                            color: featured
                              ? "color-mix(in oklch, var(--color-foam) 92%, transparent)"
                              : "var(--color-ink)",
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#demo"
                    className={`btn mt-8 w-full ${featured ? "btn-coral" : "btn-ghost"}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </Reveal>

        <p className="mt-6 text-center text-sm" style={{ color: "var(--color-ink-soft)" }}>
          {dict.footnote}
        </p>
      </div>
    </section>
  );
}
