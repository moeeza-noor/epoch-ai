"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECT_FILTERS, projects, type Project, type ProjectCategory } from "@/lib/data";

type Filter = "all" | ProjectCategory;

export default function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = (p: Project, el: HTMLElement) => {
    lastFocused.current = el;
    setActive(p);
  };
  const close = useCallback(() => {
    setActive(null);
    lastFocused.current?.focus();
  }, []);

  // Lock scroll + focus trap while modal is open.
  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>(".modal-close")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key === "Tab" && panel) {
        const focusables = panel.querySelectorAll<HTMLElement>("button, a[href]");
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section id="work" className="section section--work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow eyebrow--pink">Our work</p>
          <h2 id="work-title">Selected projects.</h2>
        </div>

        <div className="filter" role="group" aria-label="Filter projects">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${filter === f.value ? " is-active" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="work-grid" id="workGrid">
          {projects.map((p) => {
            const hidden = filter !== "all" && p.category !== filter;
            return (
              <button
                key={p.title}
                className={`work-card${hidden ? " is-hidden" : ""}`}
                data-category={p.category}
                onClick={(e) => open(p, e.currentTarget)}
              >
                <span className="work-tag">{p.category.toUpperCase()}</span>
                <h3>{p.title}</h3>
                <p>{p.teaser}</p>
                <span className="work-open">View project</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={`modal${active ? " is-open" : ""}`} aria-hidden={!active}>
        <div className="modal-backdrop" onClick={close} />
        <div
          className="modal-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          aria-describedby="modalDesc"
        >
          <button className="modal-close" onClick={close} aria-label="Close">
            &times;
          </button>
          <span className="modal-tag">{active?.category.toUpperCase()}</span>
          <h2 id="modalTitle">{active?.title}</h2>
          <p id="modalDesc">{active?.detail}</p>
          <a href="#newsletter" className="btn btn--primary btn--sm" onClick={close}>
            Start a project like this
          </a>
        </div>
      </div>
    </section>
  );
}
