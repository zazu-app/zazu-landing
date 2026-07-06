"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import Wordmark from "./wordmark";

type HeaderProps = {
  lang: Locale;
  nav: Dictionary["nav"];
  langLabels: Dictionary["lang"];
};

const sections = [
  { key: "what", href: "#que-hace" },
  { key: "disciplines", href: "#disciplinas" },
  { key: "pricing", href: "#precios" },
  { key: "faq", href: "#preguntas" },
] as const;

export default function Header({ lang, nav, langLabels }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const other: Locale = lang === "es" ? "en" : "es";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 border-b"
      style={{
        zIndex: "var(--z-header)",
        background: "color-mix(in oklch, var(--color-bg) 82%, transparent)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--color-line)",
      }}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={`/${lang}`} aria-label="Zazu" className="shrink-0">
          <Wordmark />
        </Link>

        <nav
          aria-label={nav.menu}
          className="hidden items-center gap-8 md:flex"
        >
          {sections.map((s) => (
            <a
              key={s.key}
              href={`/${lang}${s.href}`}
              className="link-underline text-[0.95rem] font-medium"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {nav[s.key as keyof typeof nav]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div
            className="hidden items-center rounded-full border p-0.5 text-xs font-semibold sm:flex"
            style={{ borderColor: "var(--color-line)" }}
            role="group"
            aria-label={langLabels.label}
          >
            <LangPill href={`/${lang}`} active={true} label={langLabels[lang]} />
            <LangPill href={`/${other}`} active={false} label={langLabels[other]} />
          </div>

          <a href={`/${lang}#demo`} className="btn btn-primary hidden sm:inline-flex text-[0.95rem] py-3 px-5">
            {nav.cta}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border md:hidden"
            style={{ borderColor: "var(--color-line)" }}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.close : nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <Burger open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t"
          style={{ background: "var(--color-bg)", borderColor: "var(--color-line)" }}
        >
          <nav className="container-x flex flex-col gap-1 py-4" aria-label={nav.menu}>
            {sections.map((s) => (
              <a
                key={s.key}
                href={`/${lang}${s.href}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium"
              >
                {nav[s.key as keyof typeof nav]}
              </a>
            ))}
            <a
              href={`/${lang}#demo`}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              {nav.cta}
            </a>
            <div className="mt-3 flex gap-2">
              <Link href={`/${lang}`} className="btn btn-ghost flex-1" aria-current="true">
                {langLabels[lang]}
              </Link>
              <Link href={`/${other}`} className="btn btn-ghost flex-1">
                {langLabels[other]}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LangPill({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className="rounded-full px-2.5 py-1 transition-colors"
      style={
        active
          ? { background: "var(--color-sea)", color: "var(--color-foam)" }
          : { color: "var(--color-ink-soft)" }
      }
    >
      {label}
    </Link>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
