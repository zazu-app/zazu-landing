type WordmarkProps = { tone?: "ink" | "foam" };

// Simple, crafted wordmark: a single hand-drawn swell in coral + "Zazu".
export default function Wordmark({ tone = "ink" }: WordmarkProps) {
  const color = tone === "foam" ? "var(--color-foam)" : "var(--color-ink)";
  return (
    <span
      className="inline-flex items-center gap-2"
      style={{ fontFamily: "var(--font-display)", color }}
    >
      <svg width="26" height="18" viewBox="0 0 26 18" fill="none" aria-hidden="true">
        <path
          d="M1 12c3-6 6-6 9 0s6 6 9 0 4.5-4 6-2"
          stroke="var(--color-coral)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[1.45rem] font-extrabold tracking-[-0.04em] leading-none">
        Zazu
      </span>
    </span>
  );
}
