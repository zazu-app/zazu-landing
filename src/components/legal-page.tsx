import Link from "next/link";
import type { LegalBlock, LegalDoc } from "@/content/legal";

type LegalPageProps = {
  doc: LegalDoc;
  ui: { updatedLabel: string; back: string; draftNotice: string };
  backHref: string;
};

export default function LegalPage({ doc, ui, backHref }: LegalPageProps) {
  return (
    <main className="py-16 md:py-24">
      <article className="container-x" style={{ maxWidth: "48rem" }}>
        <Link
          href={backHref}
          className="link-underline mb-8 inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: "var(--color-sea-mid)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {ui.back}
        </Link>

        <h1 className="text-[clamp(2rem,4.6vw,3rem)]">{doc.title}</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--color-ink-soft)" }}>
          {ui.updatedLabel}: {doc.updated}
        </p>

        <p
          className="mt-6 rounded-xl px-4 py-3 text-sm"
          style={{
            background: "color-mix(in oklch, var(--color-coral) 12%, transparent)",
            color: "var(--color-ink)",
          }}
        >
          {ui.draftNotice}
        </p>

        <p className="mt-8 text-lg" style={{ color: "var(--color-ink-soft)", lineHeight: 1.65 }}>
          {doc.intro}
        </p>

        <div className="mt-4">
          {doc.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>
    </main>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h":
      return <h2 className="mt-9 mb-2 text-xl font-bold md:text-2xl">{block.text}</h2>;
    case "p":
      return (
        <p className="mb-4" style={{ color: "var(--color-ink-soft)", lineHeight: 1.7 }}>
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mb-4 flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5" style={{ color: "var(--color-ink-soft)" }}>
              <span
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--color-coral)" }}
                aria-hidden="true"
              />
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="border-b px-3 py-2 text-left font-semibold"
                    style={{ borderColor: "var(--color-line)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border-b px-3 py-2 align-top"
                      style={{ borderColor: "var(--color-line)", color: "var(--color-ink-soft)" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
