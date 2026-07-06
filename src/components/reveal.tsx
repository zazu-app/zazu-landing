"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// Content is visible by default (CSS). JS only adds a staggered entrance, and
// only to elements that start BELOW the fold — so nothing visible is ever
// hidden. A failsafe timer guarantees content can never stay hidden, even if
// the IntersectionObserver never fires (headless renderers, background tabs).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Reveal({ children, className, id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.85;
    if (!belowFold) return; // already visible → leave it, no animation

    el.setAttribute("data-reveal", "pending");
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.setAttribute("data-reveal", "in");
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    const failsafe = window.setTimeout(reveal, 1600);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
}
