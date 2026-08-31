"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;
    if (reduced || !fine) return;

    const shapes = Array.from(field.querySelectorAll<HTMLElement>(".shape"));
    const onMove = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      shapes.forEach((s, i) => {
        const depth = ((i % 4) + 1) * 6;
        s.style.translate = `${cx * depth}px ${cy * depth}px`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shape-field" ref={fieldRef} aria-hidden="true">
        <span className="shape ring ring--1" />
        <span className="shape disc disc--1" />
        <span className="shape disc disc--2" />
        <span className="shape tri tri--1" />
        <span className="shape tri tri--2" />
        <span className="shape square square--1" />
        <svg className="shape chevrons chevrons--1" viewBox="0 0 120 48" fill="none">
          <path d="M4 4 L28 24 L4 44" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 4 L64 24 L40 44" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M76 4 L100 24 L76 44" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="shape zigzag zigzag--1" viewBox="0 0 140 40" fill="none">
          <path d="M4 36 L24 6 L44 36 L64 6 L84 36 L104 6 L124 36" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="shape dots dots--1" />
        <span className="shape dots dots--2" />
        <span className="shape plus plus--1">+</span>
      </div>

      <div className="hero-inner">
        <p className="eyebrow">Women-led AI studio</p>
        <h1 id="hero-title">
          This is more than evolution —<br />
          it&rsquo;s an <span className="mark-underline">epoch</span>.
        </h1>
        <p className="hero-lede">
          We build intelligent systems that are ethical, transparent, and genuinely useful —
          shaping the future of intelligence responsibly, beautifully, and boldly.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn--primary">
            See our work
          </a>
          <a href="#mission" className="btn btn--ghost">
            Read the mission
          </a>
        </div>
      </div>
    </section>
  );
}
