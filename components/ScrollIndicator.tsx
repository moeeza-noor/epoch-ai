"use client";

import { useEffect, useRef } from "react";

export default function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = document.documentElement;
        const h = el.scrollHeight - el.clientHeight;
        const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
        if (ref.current) ref.current.style.width = pct + "%";
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="scroll-indicator" ref={ref} aria-hidden="true" />;
}
