"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  suffix?: string;
  label: string;
  /** Skip the count-up animation (e.g. for a year). */
  animate?: boolean;
}

export default function StatCounter({ to, suffix, label, animate = true }: Props) {
  const [value, setValue] = useState(animate ? 0 : to);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!animate) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1400;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(eased * to));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [to, animate]);

  return (
    <div className="stat" ref={ref}>
      {suffix ? (
        <span className="stat-value">
          <span className="stat-num">{value}</span>
          <span className="stat-suffix">{suffix}</span>
        </span>
      ) : (
        <span className="stat-num">{value}</span>
      )}
      <span className="stat-label">{label}</span>
    </div>
  );
}
