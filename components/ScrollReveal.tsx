"use client";

import { useEffect } from "react";

// Progressive enhancement: fade/slide sections in as they enter the viewport.
// Kept as a DOM-level effect so section components stay plain server markup.
const SELECTOR =
  ".section-head, .mission-body, .service, .work-card, .founder, .newsletter-card, .quote-wrap, .stat";

export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    targets.forEach((el) => el.classList.add("reveal"));

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
