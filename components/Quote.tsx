"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { quotes } from "@/lib/data";

export default function Quote() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const indexRef = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setVisible(false);
    window.setTimeout(
      () => {
        indexRef.current = next;
        setIndex(next);
        setVisible(true);
      },
      reduced ? 0 : 260
    );
  }, []);

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    timer.current = setInterval(() => {
      go((indexRef.current + 1) % quotes.length);
    }, 5200);
  }, [go]);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  const q = quotes[index];

  return (
    <section id="quote" className="section section--quote" aria-labelledby="quote-title">
      <div className="wrap quote-wrap">
        <p className="eyebrow eyebrow--onblack">Inspire an epoch</p>
        <blockquote id="quoteBox" style={{ opacity: visible ? 1 : 0 }}>
          {q.lead}
          <span className="q-em">{q.emphasis}</span>
        </blockquote>
        <div className="quote-dots" role="tablist" aria-label="Quotes">
          {quotes.map((_, i) => (
            <button
              key={i}
              className={i === index ? "is-active" : ""}
              aria-label={`Show quote ${i + 1}`}
              onClick={() => {
                go(i);
                restart();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
