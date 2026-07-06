import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { images, unsplash } from "@/lib/images";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden" id="top">
      <div className="absolute inset-0 -z-10">
        <Image
          src={unsplash(images.hero, 1920, 72)}
          alt={dict.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        {/* Warm teal scrim for AA text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.21 0.045 205 / 0.92) 0%, oklch(0.21 0.045 205 / 0.7) 42%, oklch(0.24 0.05 210 / 0.28) 100%)",
          }}
        />
      </div>

      <div className="container-x flex min-h-[88svh] flex-col justify-center py-24 md:py-28">
        <div className="max-w-2xl" style={{ color: "var(--color-foam)" }}>
          <h1 className="hero-rise text-balance text-[clamp(2.5rem,6.4vw,5rem)] font-extrabold">
            {dict.titleA}{" "}
            <span className="relative whitespace-nowrap">
              {dict.titleHighlight}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7c40-5 90-6 196-2"
                  stroke="var(--color-coral)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {dict.titleB}
          </h1>

          <p
            className="hero-rise mt-6 max-w-xl text-lg md:text-xl"
            style={{
              ["--rise-delay" as string]: "160ms",
              color: "color-mix(in oklch, var(--color-foam) 90%, transparent)",
              lineHeight: 1.65,
            }}
          >
            {dict.sub}
          </p>

          <div
            className="hero-rise mt-8 flex flex-wrap gap-3"
            style={{ ["--rise-delay" as string]: "240ms" }}
          >
            <a href="#demo" className="btn btn-coral text-[1.02rem]">
              {dict.ctaPrimary}
              <Arrow />
            </a>
            <a href="#como" className="btn btn-on-sea-ghost text-[1.02rem]">
              {dict.ctaSecondary}
            </a>
          </div>

          <ul
            className="hero-rise mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium"
            style={{
              ["--rise-delay" as string]: "320ms",
              color: "color-mix(in oklch, var(--color-foam) 85%, transparent)",
            }}
          >
            {dict.trust.map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Check />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="var(--color-coral)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
