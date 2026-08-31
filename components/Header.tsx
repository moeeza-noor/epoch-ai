"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#mission", label: "Mission" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#founders", label: "Team" },
];

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Sync with the theme the no-flash script already applied.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark") setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("epoch-theme", theme);
    } catch {
      /* storage unavailable — non-fatal */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0A0A0A" : "#FBF8F6");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="site-header">
      <a href="#top" className="brand" aria-label="Epoch AI — home">
        <img src="/assets/symbol-ink.png" alt="" className="brand-mark" aria-hidden="true" />
        <span className="brand-word">
          epoch<span className="dot">.</span>ai
        </span>
      </a>

      <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary">
        <ul id="nav-links">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#newsletter" className="nav-cta" onClick={closeMenu}>
              Subscribe
            </a>
          </li>
        </ul>
      </nav>

      <div className="nav-actions">
        <button
          className="icon-btn theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          title="Toggle theme"
        >
          <span className="theme-icon" aria-hidden="true" />
        </button>
        <button
          className="icon-btn hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
