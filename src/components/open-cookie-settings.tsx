"use client";

import { OPEN_SETTINGS_EVENT } from "@/lib/consent";

export default function OpenCookieSettings({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      {label}
    </button>
  );
}
