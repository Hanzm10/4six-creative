# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server on `http://localhost:3000` (binds `0.0.0.0`). HMR can be disabled by setting `DISABLE_HMR=true` (used by AI Studio to prevent flicker during agent edits).
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally.
- `npm run lint` — type-check only (`tsc --noEmit`); there is **no ESLint/Prettier** configured. This is the only static check available.
- `npm run clean` — `rm -rf dist`.

There are no tests in this repo.

## Architecture

This is a single-page marketing site for **4SIX CREATIVE** built with React 19 + Vite 6 + TypeScript + Tailwind v4. Effectively the entire site is one component.

### Where the UI lives

- `src/App.tsx` — **the entire page**. All sections (splash, nav, hero, marquee, services bento grid, portfolio, process, video reels, "Meet Troyia", multi-step `ApplicationForm`, footer) and all section-local components live here in one file. There is no router and no per-section file split. When changing any section, edit `App.tsx`.
- `src/main.tsx` — mounts `<App />` only.
- `src/index.css` — single source of truth for the design system (see below).
- `components/ui/*` — shadcn/ui primitives (`button`, `card`, `input`, `textarea`, `badge`, `label`, `accordion`, `tabs`). Style is `base-nova` (see `components.json`). Add new shadcn components into this directory.
- `lib/utils.ts` — exports the `cn()` className merger; this is the canonical helper.
- `public/` — static brand assets (logos, hero portrait).

### Path alias quirk

`@/*` resolves to the **repo root**, not `src/` (see `vite.config.ts` and `tsconfig.json` `paths`). That is why imports look like `@/components/ui/button` and `@/lib/utils` even though `App.tsx` itself is under `src/`. Do not "fix" this to point at `src/` — it would break every shadcn import and the `components.json` aliases.

### Design system (Tailwind v4, CSS-first)

Tailwind is configured **entirely in `src/index.css`** via the `@theme` block — there is no `tailwind.config.*`. The brand tokens live there:

- Brand colors: `brand-orange`, `brand-peach`, `brand-lavender`, `brand-green`, `brand-dark`, `brand-light`. Use these (e.g. `bg-brand-orange`, `text-brand-dark`) rather than hard-coded hex.
- Font families: `font-sans` (Poppins), `font-display` (Syne — used for all `h1–h6` via base layer), `font-accent` (Outfit), `font-serif` (Playfair Display). Loaded via Google Fonts `@import` at the top of `index.css`.
- Signature utilities (define the brutalist look — reuse rather than reinventing):
  - `creative-border` / `creative-border-sm` — 3px or 2px black border with offset hard-shadow.
  - `creative-border-hover` — translates the element on hover and grows the shadow.
  - `grid-bg` / `grid-bg-light` — dotted background overlay.
  - `marquee-container` + `marquee-content` — horizontal infinite marquee (`@keyframes marquee`).

When adding a section, prefer composing these existing utilities and brand colors over introducing new ones.

### Animation

Animations use **`motion/react`** (the new `motion` package, not `framer-motion`): `motion`, `useScroll`, `useTransform`, `useSpring`, `AnimatePresence`. Notable effects already wired up: a top scroll-progress bar, the hero's floating shape choreography, and the scroll-driven paper-tear in the video showcase section (`videoSectionRef` + `useTransform`).

### Env / config

- `vite.config.ts` injects `process.env.GEMINI_API_KEY` from `.env` via `define`. `.env.example` documents `GEMINI_API_KEY` and `APP_URL`. AI Studio injects these at runtime.
- `@google/genai` and `express` are in `package.json` but currently **unused** in source — no server, no Gemini calls. Treat them as scaffolding for future AI Studio features rather than active dependencies.

### Dependencies worth knowing about

- `@base-ui/react` — used by some shadcn primitives.
- `lucide-react` — icon set (already imported broadly in `App.tsx`).
- `class-variance-authority` + `tailwind-merge` + `clsx` — variant + className composition (via `cn()` in `lib/utils.ts`).
