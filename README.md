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
│   └── utils.ts
├── components/
│   ├── ui/                    # shadcn/ui primitives
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   ├── tabs.tsx
│   │   ├── tooltip.tsx
│   └── layout/
│       ├── header.tsx
│       └── shell.tsx
├── hooks/
docs/
├── contentplan.md
└── design-system.md
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
