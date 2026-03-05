# Cohesion XL

Enterprise-grade AI runtime marketing site. Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Tech Stack

- **Framework:** React 19 + TypeScript 5.9
- **Build:** Vite 7
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- **Components:** shadcn/ui (Radix primitives + CVA)
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── App.tsx                    # Root component
├── index.css                  # Tailwind config + CSS variables
├── main.tsx                   # Entry point
├── lib/
│   └── submit-lead.ts
│   └── utils.ts
├── components/
│   ├── ui/                    # shadcn/ui primitives
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── scroll-reveal.tsx
│   │   ├── section-tag.tsx
│   │   ├── separator.tsx
│   │   ├── tabs.tsx
│   │   ├── tooltip.tsx
│   └── layout/
│       ├── footer.tsx
│       ├── header.tsx
│       ├── nav.tsx
│       ├── page-layout.tsx
│       └── shell.tsx
│   ├── onboarding/
│   │   ├── aha-card.tsx
│   │   ├── comparison-table.tsx
│   │   ├── crawl-walk-run.tsx
│   │   ├── pain-card.tsx
│   │   ├── role-card.tsx
│   │   ├── section-hero.tsx
│   │   ├── source-flow-diagram.tsx
│   │   ├── timeline-phase.tsx
│   │   └── workshop-card.tsx
│   ├── sections/
│   │   ├── competitive-void.tsx
│   │   ├── contact-form.tsx
│   │   ├── cta-section.tsx
│   │   ├── demo-placeholder.tsx
│   │   ├── differentiators.tsx
│   │   ├── finops-analogy.tsx
│   │   ├── hero.tsx
│   │   ├── pain-curve.tsx
│   │   ├── problem-statement.tsx
│   │   └── process-steps.tsx
├── hooks/
│   └── use-turnstile.ts
docs/
├── contentplan.md
├── design-system.md
├── onboarding.md
└── techused.md
```

## Design System

The site uses a custom dark-mode-first design system. Key tokens:

- **Primary:** Structured Blue `#2b55b7`
- **Accent:** Signal Yellow `#ded132`
- **Surface:** Frost White `#f0faf5`
- **Neutrals:** Graphite scale (950-50)

Full specification in [`docs/design-system.md`](docs/design-system.md).

## Path Aliases

`@` maps to `./src` (configured in `vite.config.ts` and `tsconfig.app.json`).

```tsx
import { Button } from "@/components/ui/button"
```
