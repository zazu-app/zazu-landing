import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { images, unsplash } from "@/lib/images";
import Reveal from "./reveal";

export default function Features({ dict }: { dict: Dictionary["features"] }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-x">
        <Reveal>
          <h2 className="reveal max-w-2xl text-[clamp(1.9rem,4.4vw,3rem)]">
            {dict.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {/* Featured tile with decisive photo */}
          <Reveal className="md:col-span-7">
            <article className="reveal relative flex min-h-[24rem] overflow-hidden rounded-3xl md:min-h-[30rem]">
              <Image
                src={unsplash(images.gear, 1100, 70)}
                alt={dict.featured.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0 0 0 / 0) 30%, oklch(0.21 0.045 205 / 0.2) 45%, oklch(0.18 0.04 208 / 0.94) 100%)",
                }}
              />
              <div
                className="relative mt-auto p-7 md:p-9"
                style={{ color: "var(--color-foam)" }}
              >
                <h3 className="text-2xl font-bold md:text-3xl">{dict.featured.title}</h3>
                <p
                  className="mt-3 max-w-md text-[1.02rem]"
                  style={{
                    color: "color-mix(in oklch, var(--color-foam) 90%, transparent)",
                    lineHeight: 1.6,
                  }}
                >
                  {dict.featured.body}
                </p>
              </div>
            </article>
          </Reveal>

          {/* Supporting benefits as an editorial list, not identical cards */}
          <Reveal className="md:col-span-5">
            <ul className="reveal flex h-full flex-col justify-center">
              {dict.items.map((item, i) => (
                <li
                  key={item.title}
                  className="reveal border-t py-5 first:border-t-0 first:pt-0 md:py-6"
                  style={{
                    borderColor: "var(--color-line)",
                    ["--reveal-delay" as string]: `${i * 70}ms`,
                  }}
                >
                  <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M4 12h16M14 6l6 6-6 6"
                        stroke="var(--color-coral)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item.title}
                  </h3>
                  <p className="mt-1.5 pl-[1.75rem] text-[0.98rem]" style={{ color: "var(--color-ink-soft)" }}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
