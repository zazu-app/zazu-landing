"use client";

import { useId, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export default function FinalCta({ dict }: { dict: Dictionary["cta"] }) {
  const [sent, setSent] = useState(false);
  const uid = useId();
  const f = dict.form;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to CRM / email endpoint. Fire tracking event: form_submit.
    setSent(true);
  }

  return (
    <section
      id="demo"
      className="py-20 md:py-28"
      style={{
        background:
          "linear-gradient(160deg, var(--color-sea-deep) 0%, var(--color-sea) 100%)",
        color: "var(--color-foam)",
      }}
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            className="text-[clamp(2rem,5vw,3.6rem)]"
            style={{ color: "var(--color-foam)" }}
          >
            {dict.title}
          </h2>
          <p
            className="mt-5 max-w-md text-lg"
            style={{
              color: "color-mix(in oklch, var(--color-foam) 88%, transparent)",
              lineHeight: 1.6,
            }}
          >
            {dict.body}
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {dict.checklist.map((c) => (
              <li key={c} className="flex items-center gap-3 text-[1.02rem]">
                <span
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                  style={{ background: "var(--color-coral)" }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="var(--color-ink)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-3xl p-6 md:p-8"
          style={{ background: "var(--color-bg)", color: "var(--color-ink)" }}
        >
          {sent ? (
            <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
              <span
                className="mb-4 grid h-16 w-16 place-items-center rounded-full"
                style={{ background: "color-mix(in oklch, var(--color-coral) 20%, transparent)" }}
                aria-hidden="true"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="var(--color-coral-ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-xl font-bold">{f.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4">
                <Field id={`${uid}-name`} label={f.name}>
                  <input id={`${uid}-name`} name="name" required autoComplete="name" placeholder={f.namePh} className={inputCls} />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id={`${uid}-email`} label={f.email}>
                    <input id={`${uid}-email`} name="email" type="email" required autoComplete="email" placeholder={f.emailPh} className={inputCls} />
                  </Field>
                  <Field id={`${uid}-phone`} label={f.phone}>
                    <input id={`${uid}-phone`} name="phone" type="tel" required autoComplete="tel" placeholder={f.phonePh} className={inputCls} />
                  </Field>
                </div>

                <Field id={`${uid}-school`} label={f.school}>
                  <input id={`${uid}-school`} name="school" required placeholder={f.schoolPh} className={inputCls} />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id={`${uid}-discipline`} label={f.discipline}>
                    <select id={`${uid}-discipline`} name="discipline" className={inputCls} defaultValue={f.disciplineOptions[0]}>
                      {f.disciplineOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id={`${uid}-students`} label={f.students}>
                    <select id={`${uid}-students`} name="students" className={inputCls} defaultValue={f.studentsOptions[0]}>
                      {f.studentsOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id={`${uid}-message`} label={f.message}>
                  <textarea id={`${uid}-message`} name="message" rows={2} placeholder={f.messagePh} className={inputCls} />
                </Field>

                <button type="submit" className="btn btn-coral mt-1 w-full text-[1.02rem]">
                  {f.submit}
                </button>
                <p className="text-center text-xs" style={{ color: "var(--color-ink-soft)" }}>
                  {f.privacy}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border px-3.5 py-2.5 text-[0.98rem] outline-none transition-shadow";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}
