import type { Service } from "./data";

// Kept in a .tsx module so the SVG icon markup lives with the copy.
export const services: Service[] = [
  {
    title: "AI Application Development",
    body: "End-to-end products, not prototypes — we design, build, and ship AI-powered apps that end users actually rely on.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="5" y="8" width="38" height="32" rx="6" stroke="currentColor" strokeWidth="3" />
        <path d="M5 18h38" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="13" r="1.8" fill="currentColor" />
        <circle cx="18" cy="13" r="1.8" fill="currentColor" />
        <path d="M20 24l8 5-8 5V24Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Agentic Frameworks",
    body: "Multi-agent systems that plan, act, and check their own work — with a human in control of every handoff that matters.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="10" r="5" stroke="currentColor" strokeWidth="3" />
        <circle cx="10" cy="38" r="5" stroke="currentColor" strokeWidth="3" />
        <circle cx="38" cy="38" r="5" stroke="currentColor" strokeWidth="3" />
        <path d="M24 15v10M24 25l-11 8M24 25l11 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    body: "Smart systems that learn, adapt, and scale — from forecasting to recommendation and beyond.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="3" />
        <circle cx="36" cy="12" r="6" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="36" r="6" stroke="currentColor" strokeWidth="3" />
        <path d="M12 18v6a6 6 0 0 0 6 6M36 18v6a6 6 0 0 1-6 6" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Natural Language",
    body: "Language-aware agents that understand context and generate with clarity, tone, and intent.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="22" rx="6" stroke="currentColor" strokeWidth="3" />
        <path d="M16 40l6-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="16" cy="21" r="2.4" fill="currentColor" />
        <circle cx="24" cy="21" r="2.4" fill="currentColor" />
        <circle cx="32" cy="21" r="2.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Computer Vision",
    body: "Machines that see and interpret the world — detection, OCR, and inclusive visual understanding.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M4 24s7-13 20-13 20 13 20 13-7 13-20 13S4 24 4 24Z" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Ethical AI",
    body: "Fairness, transparency, and accountability built into every system we ship — not bolted on after.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 5l4.5 12.5L41 22l-12.5 4.5L24 39l-4.5-12.5L7 22l12.5-4.5L24 5Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
