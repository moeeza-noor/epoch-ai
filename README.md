# Epoch AI — website

Women-led AI studio site, built on **Next.js 14 (App Router) + React + TypeScript**.
Server-rendered, componentized, and deployable to any Node host or Vercel in one step.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start          # serves the production build
```

## What's in the stack

- **Next.js 14 / App Router** — SSR + static generation, file-based routing.
- **TypeScript** throughout, with a typed content layer.
- **React components** per section — real state for the theme, mobile nav,
  project filter/modal, quote rotator, and newsletter form.
- **Node API route** at `app/api/subscribe/route.ts` — validates the email
  server-side and returns JSON. Drop in a DB or email provider where marked.

## Project structure

```
app/
  layout.tsx            Root layout: metadata, fonts, no-flash theme
  page.tsx              Composes the sections
  globals.css           Design system (brand tokens, light/dark)
  api/subscribe/route.ts  POST endpoint for the newsletter (Node runtime)
components/             One component per section + small enhancers
lib/
  data.ts               Typed content: projects, quotes, founders, marquee
  services.tsx          Services + their inline SVG icons
public/assets/          Logo marks + favicon
```

## Editing content

Copy lives in `lib/data.ts` and `lib/services.tsx` — change text, add a
project, or swap a founder there; the components render from data, so you
never touch markup for routine edits.

## Theming

Light/dark is driven by `data-theme` on `<html>`, set before paint by a small
inline script to avoid a flash, and toggled in `components/Header.tsx`
(persisted to `localStorage`). All colors are CSS variables in `globals.css`.

## Newsletter backend

The form posts to `/api/subscribe`. Today it validates and logs. To make it
real, add your provider call where the file says so and put secrets in
`.env.local` (see `.env.example`).

## Deploy to Netlify

This project is Netlify-ready — a `netlify.toml` is included, and Netlify's
Next.js Runtime (auto-installed, no pinning needed) runs the App Router, SSR,
and the `/api/subscribe` route handler as serverless functions. No `next
export`, no code changes.

### Option A — Git deploy (recommended)

1. Push the project to GitHub / GitLab / Bitbucket:
   ```bash
   git init
   git add .
   git commit -m "Epoch AI site"
   git branch -M main
   git remote add origin https://github.com/<you>/epoch-ai.git
   git push -u origin main
   ```
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Netlify auto-detects Next.js and fills in the build settings
   (`npm run build`, publish `.next`). Click **Deploy**.

Every push to `main` redeploys; every pull request gets its own preview URL.

### Option B — Netlify CLI

```bash
npm i -g netlify-cli
netlify init          # link or create a site
netlify deploy --build            # deploy a draft URL
netlify deploy --build --prod     # deploy to production
```

### Environment variables

Set these in **Site settings → Environment variables** when you wire up a real
subscriber backend (see `.env.example`). Anything prefixed `NEXT_PUBLIC_` is
exposed to the browser; everything else stays server-only.

### Custom domain

**Site settings → Domain management → Add a custom domain.** Netlify
provisions a free SSL certificate automatically.

### Node deploy (non-Netlify)

- `npm run build && npm start` behind your process manager, or import to Vercel
  (zero config).

## Notes

- Fonts load via `<link>` in the layout. To self-host with zero layout shift,
  switch to `next/font/google` (needs network access at build time).
- Fully responsive, keyboard-accessible, and honors `prefers-reduced-motion`.
```
