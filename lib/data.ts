// Central, typed content for the site. Edit copy here — components stay untouched.

export type ProjectCategory = "ai" | "voice" | "vision";

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
  { label: "AI", value: "ai" },
  { label: "Voice", value: "voice" },
  { label: "Vision", value: "vision" },
];

export const projects: Project[] = [
  {
    title: "Smart City AI",
    category: "ai",
    teaser: "Urban intelligence for the cities of the future.",
    detail:
      "An urban-intelligence platform that fuses traffic, energy, and civic data into real-time decisions for planners — cutting response times and surfacing patterns cities couldn't see before.",
  },
  {
    title: "Voice Guardian",
    category: "voice",
    teaser: "Private, on-device voice AI for sensitive fields.",
    detail:
      "A privacy-first voice assistant for healthcare and legal settings. All processing stays on-device, so sensitive conversations never leave the room.",
  },
  {
    title: "Generative Ads",
    category: "ai",
    teaser: "Brand-consistent content, generated at scale.",
    detail:
      "A brand-safe generative studio that produces on-message creative at scale — every asset guardrailed to a brand's voice, palette, and guidelines.",
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
  { lead: "We bloom in ", emphasis: "code." },
  { lead: "AI with empathy is our ", emphasis: "superpower." },
];

export const founders: Founder[] = [
  {
    name: "Moeeza Noor",
    initials: "MN",
    role: "AI Engineer · Co-founder",
    bio: "Leads model research and the systems that put it into production — with an eye on the human it serves.",
  },
  {
    name: "Kiran Sardar",
    initials: "KS",
    role: "ML Strategist · Co-founder",
    bio: "Shapes where the work goes next — aligning research, ethics, and real client outcomes.",
    variant: "alt",
  },
];

export const marqueeItems = [
  "Machine Learning",
  "Natural Language",
  "Computer Vision",
  "Generative AI",
  "Ethical by design",
];
