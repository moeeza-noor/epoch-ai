"use client";

import { useState } from "react";

type Status = { kind: "idle" | "ok" | "err" | "loading"; message: string };

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ kind: "loading", message: "Subscribing…" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok: boolean; message: string };
      if (res.ok && data.ok) {
        setStatus({ kind: "ok", message: data.message });
        setEmail("");
      } else {
        setStatus({ kind: "err", message: data.message || "Something went wrong." });
      }
    } catch {
      setStatus({ kind: "err", message: "Network error — please try again." });
    }
  };

  const noteClass =
    status.kind === "ok" ? "form-note ok" : status.kind === "err" ? "form-note err" : "form-note";

  return (
    <section id="newsletter" className="section section--newsletter" aria-labelledby="news-title">
      <div className="wrap newsletter-card">
        <div className="newsletter-copy">
          <h2 id="news-title">Stay in the loop.</h2>
          <p>Updates, research notes, and open-source drops. No noise.</p>
        </div>
        <form className="subscribe-form" onSubmit={submit} noValidate>
          <label className="visually-hidden" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@studio.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn--primary" disabled={status.kind === "loading"}>
            {status.kind === "loading" ? "…" : "Subscribe"}
          </button>
          <p className={noteClass} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
