# CLAUDE.md

Project instructions for Claude Code.

## Project Overview

Marketing site for Cohesion XL — an enterprise AI runtime. Dark-mode-first, engineer-focused aesthetic. Not a consumer SaaS look.

## Tech Stack

- React 19 + TypeScript 5.9 + Vite 7
- Tailwind CSS 4 (v4 syntax — uses `@theme inline` and `@tailwindcss/vite` plugin, NOT `tailwind.config.ts`)
- shadcn/ui components (Radix + CVA)
- Path alias: `@` → `./src`

## Key Files

- `src/index.css` — All theme tokens, CSS variables, Tailwind config via `@theme inline`
- `docs/design-system.md` — Full design system specification (colors, typography, spacing, components)
- `components.json` — shadcn/ui configuration

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Type-check + build (`tsc -b && vite build`)
- `npm run lint` — ESLint
- `npx shadcn@latest add <component>` — Add new shadcn/ui component

## Code Conventions

- Use shadcn/ui primitives from `@/components/ui/<name>` — do not build custom primitives when shadcn covers it
- All styling via Tailwind utility classes + CSS variables from `index.css`
- No inline `style` attributes unless dynamically computed
- No `!important` overrides
- Use the custom color tokens: `brand-blue-*`, `brand-yellow-*`, `graphite-*`, `brand-frost`
- Semantic colors available: `success`, `warning`, `error`, `info`
- Prefer borders over shadows for elevation
- Cards: `border-graphite-600 bg-graphite-800`
- Terminal blocks: `bg-graphite-950` + `font-mono`

## Design Rules

- Max heading size: 36px. No oversized hero text.
- No emoji in production UI
- No parallax, scroll animations, or bouncing elements
- No glassmorphism, neumorphism, or neon gradients
- No AI brain graphics, robot icons, or neural network imagery
- Motion: deliberate and mechanical (150-250ms ease-in-out)
- Border radius: 8px buttons/inputs, 12px cards/panels, 9999px pills
- Reference: AWS Console, Datadog, Grafana — not Notion or Linear

## Tone

- Precise and technical. Short sentences. Active voice. Present tense.
- Use: deterministic, compilable, auditable, bounded, governed, observable, runtime, initiative, agent
- Avoid: predictable, configurable, transparent, sandboxed, managed, monitorable, platform, project, bot
