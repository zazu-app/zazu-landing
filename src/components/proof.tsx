import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { images, unsplash } from "@/lib/images";
import Reveal from "./reveal";

export default function Proof({ dict }: { dict: Dictionary["proof"] }) {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-sand)" }}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={unsplash(images.hug, 900, 70)}
              alt={dict.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <h2 className="reveal text-[clamp(1.9rem,4.4vw,3rem)]" style={{ color: "var(--color-ink)" }}>
            {dict.title}
          </h2>

          <div className="reveal mt-8 flex flex-col gap-7" style={{ ["--reveal-delay" as string]: "80ms" }}>
            {dict.quotes.map((q, i) => (
              <figure key={i}>
                <blockquote
                  className="text-lg md:text-xl"
                  style={{ color: "var(--color-ink)", lineHeight: 1.5 }}
                >
                  <span aria-hidden="true" style={{ color: "var(--color-coral)", fontWeight: 700 }}>
                    “
                  </span>
                  {q.text}
                </blockquote>
                <figcaption className="mt-2 text-sm font-semibold">
                  {q.who}{" "}
                  <span style={{ color: "var(--color-ink-soft)", fontWeight: 400 }}>· {q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p
            className="reveal mt-8 border-t pt-6 text-xl font-bold md:text-2xl"
            style={{ borderColor: "var(--color-sand-deep)", ["--reveal-delay" as string]: "160ms" }}
          >
            {dict.resultLine}
          </p>
          <p className="reveal mt-3 text-xs italic" style={{ color: "var(--color-ink-soft)" }}>
            {dict.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
