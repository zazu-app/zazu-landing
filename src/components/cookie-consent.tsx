"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  CONSENT_EVENT,
  OPEN_SETTINGS_EVENT,
  readConsent,
  writeConsent,
} from "@/lib/consent";

type Props = { lang: Locale; dict: Dictionary["consent"] };

export default function CookieConsent({ lang, dict }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = readConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    }
    const openSettings = () => {
      const s = readConsent();
      setAnalytics(Boolean(s?.analytics));
      setMarketing(Boolean(s?.marketing));
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, []);

  if (!mounted || !visible) return null;

  const decide = (a: boolean, m: boolean) => {
    writeConsent({ analytics: a, marketing: m });
    setVisible(false);
    setShowSettings(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={dict.title}
      className="fixed inset-x-0 bottom-0 p-3 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-md sm:p-0"
      style={{ zIndex: "var(--z-toast)" }}
    >
      <div
        className="rounded-2xl border p-5 shadow-lg"
        style={{
          background: "var(--color-bg)",
          borderColor: "var(--color-line)",
          boxShadow: "0 24px 60px -20px oklch(0.21 0.045 205 / 0.35)",
        }}
      >
        <h2 className="text-lg font-bold">{dict.title}</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--color-ink-soft)", lineHeight: 1.55 }}>
          {dict.description}{" "}
          <Link href={`/${lang}/cookies`} className="link-underline font-semibold" style={{ color: "var(--color-coral-ink)" }}>
            {dict.policyLink}
          </Link>
        </p>

        {showSettings && (
          <div className="mt-4 flex flex-col gap-3">
            <Row name={dict.necessary.name} desc={dict.necessary.desc} checked disabled />
            <Row
              name={dict.analytics.name}
              desc={dict.analytics.desc}
              checked={analytics}
              onChange={setAnalytics}
            />
            <Row
              name={dict.marketing.name}
              desc={dict.marketing.desc}
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {!showSettings ? (
            <>
              <button type="button" className="btn btn-primary flex-1 py-2.5 text-sm" onClick={() => decide(true, true)}>
                {dict.accept}
              </button>
              <button type="button" className="btn btn-ghost flex-1 py-2.5 text-sm" onClick={() => decide(false, false)}>
                {dict.reject}
              </button>
              <button
                type="button"
                className="btn btn-ghost w-full py-2.5 text-sm"
                onClick={() => setShowSettings(true)}
              >
                {dict.configure}
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-primary flex-1 py-2.5 text-sm" onClick={() => decide(analytics, marketing)}>
                {dict.save}
              </button>
              <button type="button" className="btn btn-ghost py-2.5 text-sm" onClick={() => decide(false, false)}>
                {dict.reject}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({
  name,
  desc,
  checked,
  disabled,
  onChange,
}: {
  name: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-t pt-3" style={{ borderColor: "var(--color-line)" }}>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs" style={{ color: "var(--color-ink-soft)" }}>{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={name}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className="relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors"
        style={{
          background: checked ? "var(--color-sea)" : "var(--color-line)",
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all"
          style={{ left: checked ? "calc(100% - 1.375rem)" : "0.125rem" }}
        />
      </button>
    </div>
  );
}
