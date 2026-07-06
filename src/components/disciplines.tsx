import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { images, unsplash } from "@/lib/images";
import Reveal from "./reveal";

export default function Disciplines({ dict }: { dict: Dictionary["disciplines"] }) {
  return (
    <section
      id="disciplinas"
      className="py-20 md:py-28"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <h2 className="reveal text-[clamp(1.9rem,4.4vw,3rem)]">{dict.title}</h2>
          <p
            className="reveal mt-4 max-w-md text-lg"
            style={{ color: "var(--color-ink-soft)", ["--reveal-delay" as string]: "70ms" }}
          >
            {dict.intro}
          </p>

          <div className="reveal mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {dict.items.map((d, i) => (
              <div key={d.name} style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: "var(--color-coral)" }}
                    aria-hidden="true"
                  />
                  {d.name}
                </h3>
                <p className="mt-1.5 text-[0.96rem]" style={{ color: "var(--color-ink-soft)" }}>
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[3/2] lg:aspect-[4/5]">
            <Image
              src={unsplash(images.quiver, 1000, 70)}
              alt={dict.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
