// Central, typed content for the site. Edit copy here — components stay untouched.

export type ProjectCategory = "apps" | "agents" | "ai" | "vision";

export interface Service {
  title: string;
  body: string;
  /** Inline SVG path markup rendered inside a 0 0 48 48 viewBox */
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  category: ProjectCategory;
  teaser: string;
  detail: string;
}

export interface Founder {
  name: string;
  initials: string;
  role: string;
  bio: string;
  variant?: "alt";
}

export interface Quote {
  lead: string;
  emphasis: string;
}

export const PROJECT_FILTERS: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Apps", value: "apps" },
  { label: "Agents", value: "agents" },
  { label: "AI Systems", value: "ai" },
  { label: "Vision", value: "vision" },
];

export const projects: Project[] = [
  {
    title: "Fieldwise",
    category: "apps",
    teaser: "The everyday app that plans your day for you.",
    detail:
      "A consumer productivity app that turns a messy to-do list into a realistic day plan — reprioritizing itself in real time as meetings move and things change, so people spend less time managing their day and more time living it.",
  },
  {
    title: "OpsPilot",
    category: "agents",
    teaser: "A multi-agent framework that runs back-office work end to end.",
    detail:
      "An agentic framework where specialized agents plan, execute, and check each other's work across ticketing, billing, and reporting tools — with a human sign-off built into every step that matters.",
  },
  {
    title: "Smart City AI",
    category: "ai",
    teaser: "Urban intelligence for the cities of the future.",
    detail:
      "An urban-intelligence platform that fuses traffic, energy, and civic data into real-time decisions for planners — cutting response times and surfacing patterns cities couldn't see before.",
  },
  {
    title: "Voice Guardian",
    category: "apps",
    teaser: "Private, on-device voice AI for sensitive fields.",
    detail:
      "A privacy-first voice assistant for healthcare and legal settings. All processing stays on-device, so sensitive conversations never leave the room — built as a real product, not a research demo.",
  },
  {
    title: "Generative Ads",
    category: "agents",
    teaser: "An autonomous pipeline for brand-consistent content, at scale.",
    detail:
      "A brand-safe generative pipeline where coordinating agents draft, check, and refine creative against a brand's voice, palette, and guidelines — producing on-message assets at a scale no single team could match.",
  },
  {
    title: "Inclusive OCR",
    category: "vision",
    teaser: "Multilingual text recognition, built for everyone.",
    detail:
      "A multilingual OCR engine trained on inclusive datasets, reading scripts and handwriting that mainstream tools miss — built for accessibility from the ground up.",
  },
];

export const quotes: Quote[] = [
  { lead: "The future belongs to those who design it — ", emphasis: "responsibly." },
  { lead: "Code like a girl. Change the world like a ", emphasis: "woman." },
  { lead: "Epochs don't start by chance. They're ", emphasis: "led." },
  { lead: "We don't just train models. We ", emphasis: "ship products." },
  { lead: "Great agents don't replace people — they ", emphasis: "free them." },
  { lead: "AI with empathy is our ", emphasis: "superpower." },
];

export const founders: Founder[] = [
  {
    name: "Moeeza Noor",
    initials: "MN",
    role: "AI Engineer · Co-founder",
    bio: "Leads model research and the agentic systems that put it into production — with an eye on the human it serves.",
  },
  {
    name: "Kiran Sardar",
    initials: "KS",
    role: "Product Strategist · Co-founder",
    bio: "Shapes where the product goes next — aligning applications, agents, and real client outcomes.",
    variant: "alt",
  },
];

export const marqueeItems = [
  "AI Applications",
  "Agentic Frameworks",
  "Machine Learning",
  "Automation",
  "Product Engineering",
  "Ethical by design",
];
