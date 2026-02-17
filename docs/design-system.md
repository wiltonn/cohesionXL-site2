# Cohesion XL — Design System

> Enterprise-grade AI runtime designed by engineers for engineers.

This document defines the visual language, component standards, and implementation references for Cohesion XL. All UI must reflect a deterministic, governed AI runtime — not a consumer SaaS product.

---

## 1. Brand Identity

### Core Palette

| Role | Name | Hex | HSL | Usage |
|------|------|-----|-----|-------|
| **Primary** | Structured Blue | `#2b55b7` | `221° 62% 44%` | Brand identity, primary actions, interactive elements, links |
| **Accent** | Signal Yellow | `#ded132` | `56° 73% 54%` | Warnings, highlights, active states, signal indicators |
| **Surface** | Frost White | `#f0faf5` | `150° 56% 96%` | Light-mode surfaces, contrast text on dark backgrounds, badges |

### Derived Shades — Structured Blue

| Shade | Hex | Usage |
|-------|-----|-------|
| `blue-50` | `#e8eef8` | Subtle tints, selected row backgrounds (light mode) |
| `blue-100` | `#c5d3ee` | Hover backgrounds (light mode) |
| `blue-200` | `#8aa7dd` | Disabled primary elements |
| `blue-300` | `#4f7bcc` | Secondary interactive elements |
| `blue-400` | `#3565c1` | Hover state for primary actions |
| `blue-500` | `#2b55b7` | **Base primary** |
| `blue-600` | `#244a9e` | Active / pressed state |
| `blue-700` | `#1d3d85` | Dark-mode primary text on elevated surfaces |
| `blue-800` | `#162e64` | Dark-mode border accents |
| `blue-900` | `#0f1f43` | Deep background tints |

### Derived Shades — Signal Yellow

| Shade | Hex | Usage |
|-------|-----|-------|
| `yellow-50` | `#fcfbe8` | Subtle warning background |
| `yellow-100` | `#f7f4c0` | Warning banner fill |
| `yellow-200` | `#ede67a` | Soft highlight |
| `yellow-300` | `#e5db4e` | Hover state for accent |
| `yellow-400` | `#ded132` | **Base accent** |
| `yellow-500` | `#c4b820` | Active / pressed accent |
| `yellow-600` | `#9e9419` | Muted accent for dark mode |
| `yellow-700` | `#787013` | Dark-mode accent borders |
| `yellow-800` | `#524c0d` | Subdued indicators |
| `yellow-900` | `#2c2907` | Near-invisible accent tint |

### Dark-Mode Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `graphite-950` | `#0a0c10` | App background — deepest layer |
| `graphite-900` | `#0f1117` | Primary background |
| `graphite-850` | `#14171f` | Secondary background / sidebar |
| `graphite-800` | `#1a1e28` | Card surfaces |
| `graphite-750` | `#212631` | Elevated surfaces |
| `graphite-700` | `#2a2f3b` | Input fields, hover backgrounds |
| `graphite-600` | `#363c4a` | Borders — primary |
| `graphite-500` | `#4a5160` | Borders — subtle, dividers |
| `graphite-400` | `#6b7280` | Muted text, placeholders |
| `graphite-300` | `#9ca3af` | Secondary text |
| `graphite-200` | `#d1d5db` | Primary text |
| `graphite-100` | `#e5e7eb` | Headings, high-emphasis text |
| `graphite-50` | `#f0faf5` | **Frost White** — max contrast text, badges |

### Semantic Colors

| Semantic | Dark Mode | Light Mode | Usage |
|----------|-----------|------------|-------|
| **Success** | `#22c55e` | `#16a34a` | Validated, compiled, passing |
| **Warning** | `#ded132` (Signal Yellow) | `#c4b820` | Caution states, pending review |
| **Error** | `#ef4444` | `#dc2626` | Failed, rejected, runtime errors |
| **Info** | `#2b55b7` (Structured Blue) | `#3565c1` | Informational, status, links |

---

## 2. Typography

### Font Stack

```
--font-heading: 'Inter', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', monospace;
```

### Scale

| Element | Font | Weight | Size | Line Height | Tracking |
|---------|------|--------|------|-------------|----------|
| Display | Inter | 700 | 36px / 2.25rem | 1.2 | -0.025em |
| H1 | Inter | 700 | 30px / 1.875rem | 1.2 | -0.025em |
| H2 | Inter | 600 | 24px / 1.5rem | 1.3 | -0.02em |
| H3 | Inter | 600 | 20px / 1.25rem | 1.4 | -0.015em |
| H4 | Inter | 600 | 16px / 1rem | 1.4 | -0.01em |
| Body | Inter | 400 | 16px / 1rem | 1.6 | 0 |
| Body Small | Inter | 400 | 14px / 0.875rem | 1.5 | 0 |
| Caption | Inter | 500 | 12px / 0.75rem | 1.4 | 0.02em |
| Code | JetBrains Mono | 400 | 14px / 0.875rem | 1.6 | 0 |
| Code Small | JetBrains Mono | 400 | 12px / 0.75rem | 1.5 | 0 |

### Monospace Usage

Always use `--font-mono` for:

- Log output
- Terminal blocks
- State transitions
- Structured data / JSON
- CLI references
- Code snippets
- Pipeline stage labels

Avoid oversized hero typography. Max heading size is `36px` for page-level display text.

---

## 3. Spacing & Layout

### Spacing Scale

```
4px   →  0.25rem  →  spacing-1
8px   →  0.5rem   →  spacing-2
12px  →  0.75rem  →  spacing-3
16px  →  1rem     →  spacing-4
24px  →  1.5rem   →  spacing-6
32px  →  2rem     →  spacing-8
48px  →  3rem     →  spacing-12
64px  →  4rem     →  spacing-16
```

### Border Radius

| Context | Radius | Token |
|---------|--------|-------|
| Buttons, inputs, badges | `8px` / `0.5rem` | `--radius` |
| Cards, dialogs, panels | `12px` / `0.75rem` | `--radius-lg` |
| Pills, tags | `9999px` | `--radius-full` |

### Shadows

Minimal. Prefer borders for elevation.

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.15);
--shadow-md: 0 2px 6px rgba(0, 0, 0, 0.2);
```

Use `--shadow-sm` sparingly for dropdowns and popovers. Cards should rely on `border` for definition, not shadow.

### Grid

- 12-column grid for page layouts
- `max-width: 1280px` for content containers
- `gap: 24px` (spacing-6) default grid gap
- Layouts should feel structured and grid-aligned — no playful asymmetry

---

## 4. Component Guidelines

### Framework

This project uses **shadcn/ui** with Tailwind CSS.

### Import Convention

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
```

### Rules

1. Prefer shadcn/ui primitives: `Button`, `Card`, `Dialog`, `Tabs`, `Badge`, `Input`, `Select`, `Table`, `Tooltip`, `Popover`, `Sheet`, `Separator`
2. Import from `@/components/ui/<name>`
3. Do not build custom-styled primitives unless shadcn/ui does not cover the use case
4. All styling uses Tailwind utility classes + CSS variables from `index.css`
5. No inline `style` attributes unless dynamically computed values require it
6. No `!important` overrides

### Button Variants

| Variant | Usage | Bg | Text |
|---------|-------|----|------|
| `default` | Primary actions | Structured Blue | White |
| `secondary` | Secondary actions | `graphite-700` | `graphite-200` |
| `outline` | Tertiary actions | Transparent | `graphite-300` border `graphite-600` |
| `ghost` | Inline / subtle actions | Transparent | `graphite-300` |
| `destructive` | Destructive actions | Error red | White |
| `signal` | High-visibility alerts | Signal Yellow | `graphite-950` |

### Card Pattern

```tsx
<Card className="border-graphite-600 bg-graphite-800">
  <CardHeader>
    <CardTitle className="text-graphite-100 text-base font-semibold">
      Pipeline Status
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

Cards use border for definition. No heavy box-shadows.

---

## 5. Visual Motifs

### Bounded Windows

Framed containers that imply scoped execution contexts.

```
┌─────────────────────────────────┐
│  context: initiative/deploy-v2  │
│─────────────────────────────────│
│                                 │
│  [Bounded content area]         │
│                                 │
└─────────────────────────────────┘
```

- Thin `1px` border in `graphite-600`
- `12px` border-radius
- No glowing outlines
- No drop shadows
- Optional header bar with `graphite-750` background

### Execution Flow

Horizontal pipeline representation:

```
Intent → Validate → Compile → Execute → Approve → Deliver
  ●────────●─────────●─────────●─────────●─────────●
```

- Nodes: small circles or rounded rectangles
- Active node: Structured Blue fill
- Completed node: Success green with subtle checkmark
- Pending node: `graphite-600` border only
- Connectors: thin `1px` lines in `graphite-500`
- No waterfall progress bars
- No oversized step indicators

### Terminal Blocks

```tsx
<div className="bg-graphite-950 border border-graphite-600 rounded-lg p-4 font-mono text-sm">
  <span className="text-graphite-400">$</span>{" "}
  <span className="text-graphite-200">cohesion run initiative.yaml</span>
  <br />
  <span className="text-green-400">✔</span>{" "}
  <span className="text-graphite-300">validated</span>
  <br />
  <span className="text-green-400">✔</span>{" "}
  <span className="text-graphite-300">compiled</span>
  <br />
  <span className="text-green-400">✔</span>{" "}
  <span className="text-graphite-300">agents assigned</span>
</div>
```

- Background: `graphite-950` (deepest layer)
- Border: `graphite-600`
- Font: JetBrains Mono
- Success: `green-400`
- Warning: Signal Yellow
- Error: `red-400`
- No fake "hacker" aesthetic

### Status Badges

```tsx
<Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
  ✔ compiled
</Badge>
<Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/10">
  running
</Badge>
<Badge variant="outline" className="border-yellow-500/30 text-yellow-400 bg-yellow-500/10">
  pending review
</Badge>
```

---

## 6. Motion & Interaction

### Transitions

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 200ms ease-in-out;
--transition-slow: 250ms ease-in-out;
```

### Rules

- All interactive elements have transitions on `background-color`, `border-color`, `color`, `opacity`
- Hover states: subtle shift in background or border — no scale transforms, no bounces
- Focus states: `2px` ring in `Structured Blue` with `2px` offset
- No parallax
- No scroll-triggered animations
- No exaggerated entrance animations
- Stagger reveals are acceptable in lists (50ms delay increment, 150ms duration each)

Motion should feel **deliberate and mechanical**, not playful or organic.

---

## 7. Data Visualization

### Chart Standards

- Gridlines: `graphite-700`, `1px`, dashed or solid
- Primary data: Structured Blue (`#2b55b7`)
- Secondary data: Structured Blue at 50% opacity
- Highlight / threshold: Signal Yellow (`#ded132`)
- Error band: Error red at 20% opacity
- Axis labels: `graphite-400`, `12px`, Inter
- Value labels: `graphite-200`, `14px`, Inter

### Rules

- Single primary color per chart — use opacity for variation
- Thin lines (`1.5px`–`2px`)
- Small node highlights (`4px`–`6px` circles)
- Clean spacing — no dense, cluttered layouts
- No 3D charts
- No glossy effects
- No rainbow palettes
- No pie charts (prefer horizontal bar or table)

---

## 8. Voice & UI Copy

### Preferred Vocabulary

| Use | Instead of |
|-----|------------|
| Deterministic | Predictable |
| Compilable | Configurable |
| Auditable | Transparent |
| Bounded | Sandboxed |
| Governed | Managed |
| Observable | Monitorable |
| Runtime | Platform |
| Initiative | Project |
| Agent | Bot |

### Tone Guidelines

- Precise and technical
- Present tense, active voice
- Short sentences
- No exclamation marks
- No emoji in production UI
- Labels and headings in sentence case

### Examples

```
Good:  "Initiative compiled. 4 agents assigned."
Bad:   "Your project is ready to go! 🚀"

Good:  "Validation failed: missing governance policy."
Bad:   "Oops! Something went wrong."

Good:  "Runtime execution bounded to 120s."
Bad:   "We'll make sure it runs fast!"
```

---

## 9. Anti-Patterns

Do not generate or include:

| Category | Forbidden |
|----------|-----------|
| Illustration | AI brain graphics, robot icons, neural network diagrams |
| Color | Crypto gradients, neon glow, heavy purple/pink |
| Layout | Oversized hero sections, dramatic marketing copy, floating shapes |
| Typography | Decorative fonts, display text larger than 36px |
| UI | Overly rounded corners (>12px), glassmorphism, neumorphism |
| Content | Stock photos of developers, "revolutionary" language |
| Animation | Parallax, bouncing elements, particle effects |
| Charts | 3D, glossy, rainbow, pie charts |

This is infrastructure software. When in doubt, reference AWS Console, Datadog, or Grafana — not Notion or Linear.

---

## 10. Accessibility

### Contrast

- All text meets **WCAG AA** minimum contrast (4.5:1 normal text, 3:1 large text)
- `graphite-200` on `graphite-900` = ~11:1 ratio (passes AAA)
- `graphite-300` on `graphite-900` = ~7.5:1 ratio (passes AA)
- `graphite-400` on `graphite-900` = ~4.6:1 ratio (passes AA)
- Structured Blue on `graphite-900` = ~4.5:1 ratio (passes AA)
- Signal Yellow on `graphite-950` = ~9.8:1 ratio (passes AAA)

### Focus States

```css
*:focus-visible {
  outline: 2px solid var(--color-blue-500);
  outline-offset: 2px;
  border-radius: var(--radius);
}
```

### Keyboard Navigation

- All interactive elements reachable via `Tab`
- Modal dialogs trap focus
- Dropdown menus support arrow key navigation
- `Escape` closes overlays

### Screen Readers

- Use semantic HTML elements
- ARIA labels on icon-only buttons
- Live regions for status updates
- Meaningful alt text (or `aria-hidden` for decorative elements)

### Minimum Sizes

- Touch targets: `44px` minimum
- Body text: `14px` minimum
- Caption text: `12px` minimum (limited use)

---

## 11. CSS Variable Definitions

Paste into `index.css` inside `@layer base`:

```css
@layer base {
  :root {
    /* Brand */
    --color-blue-500: #2b55b7;
    --color-yellow-400: #ded132;
    --color-frost: #f0faf5;

    /* Blue scale */
    --color-blue-50: #e8eef8;
    --color-blue-100: #c5d3ee;
    --color-blue-200: #8aa7dd;
    --color-blue-300: #4f7bcc;
    --color-blue-400: #3565c1;
    --color-blue-600: #244a9e;
    --color-blue-700: #1d3d85;
    --color-blue-800: #162e64;
    --color-blue-900: #0f1f43;

    /* Yellow scale */
    --color-yellow-50: #fcfbe8;
    --color-yellow-100: #f7f4c0;
    --color-yellow-200: #ede67a;
    --color-yellow-300: #e5db4e;
    --color-yellow-500: #c4b820;
    --color-yellow-600: #9e9419;
    --color-yellow-700: #787013;
    --color-yellow-800: #524c0d;
    --color-yellow-900: #2c2907;

    /* Semantic */
    --color-success: #16a34a;
    --color-warning: #c4b820;
    --color-error: #dc2626;
    --color-info: #3565c1;

    /* Light mode surfaces */
    --background: 150 56% 96%;
    --foreground: 220 20% 10%;
    --card: 0 0% 100%;
    --card-foreground: 220 20% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 20% 10%;
    --primary: 221 62% 44%;
    --primary-foreground: 150 56% 96%;
    --secondary: 220 13% 91%;
    --secondary-foreground: 220 20% 20%;
    --muted: 220 13% 91%;
    --muted-foreground: 220 9% 46%;
    --accent: 56 73% 54%;
    --accent-foreground: 220 30% 6%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 220 13% 87%;
    --input: 220 13% 87%;
    --ring: 221 62% 44%;
    --radius: 0.5rem;
    --radius-lg: 0.75rem;
  }

  .dark {
    /* Dark mode surfaces */
    --background: 224 24% 7%;
    --foreground: 220 13% 91%;
    --card: 222 20% 13%;
    --card-foreground: 220 13% 91%;
    --popover: 222 20% 13%;
    --popover-foreground: 220 13% 91%;
    --primary: 221 62% 44%;
    --primary-foreground: 150 56% 96%;
    --secondary: 221 16% 20%;
    --secondary-foreground: 220 13% 85%;
    --muted: 221 16% 20%;
    --muted-foreground: 220 9% 52%;
    --accent: 56 73% 54%;
    --accent-foreground: 224 30% 6%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 221 14% 26%;
    --input: 221 14% 26%;
    --ring: 221 62% 44%;

    /* Semantic (dark) */
    --color-success: #22c55e;
    --color-warning: #ded132;
    --color-error: #ef4444;
    --color-info: #2b55b7;
  }
}
```

---

## 12. Tailwind Configuration

Extend `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  // ...existing config
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: "#e8eef8",
            100: "#c5d3ee",
            200: "#8aa7dd",
            300: "#4f7bcc",
            400: "#3565c1",
            500: "#2b55b7",
            600: "#244a9e",
            700: "#1d3d85",
            800: "#162e64",
            900: "#0f1f43",
          },
          yellow: {
            50: "#fcfbe8",
            100: "#f7f4c0",
            200: "#ede67a",
            300: "#e5db4e",
            400: "#ded132",
            500: "#c4b820",
            600: "#9e9419",
            700: "#787013",
            800: "#524c0d",
            900: "#2c2907",
          },
          frost: "#f0faf5",
        },
        graphite: {
          50: "#f0faf5",
          100: "#e5e7eb",
          200: "#d1d5db",
          300: "#9ca3af",
          400: "#6b7280",
          500: "#4a5160",
          600: "#363c4a",
          700: "#2a2f3b",
          750: "#212631",
          800: "#1a1e28",
          850: "#14171f",
          900: "#0f1117",
          950: "#0a0c10",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "Fira Code", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "250ms",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
}

export default config
```

---

## Quick Reference

### Palette at a Glance

```
Primary     ████████  #2b55b7  Structured Blue
Accent      ████████  #ded132  Signal Yellow
Surface     ████████  #f0faf5  Frost White
Background  ████████  #0f1117  Graphite 900
Elevated    ████████  #1a1e28  Graphite 800
Border      ████████  #363c4a  Graphite 600
Text        ████████  #d1d5db  Graphite 200
Muted       ████████  #6b7280  Graphite 400
Success     ████████  #22c55e  Green
Error       ████████  #ef4444  Red
```

### Decision Tree

```
Is this a primary action?          → Structured Blue button
Is this a warning or highlight?    → Signal Yellow accent
Is this destructive?               → Error red
Is this informational?             → Structured Blue (muted)
Is this a surface?                 → Graphite 800 with Graphite 600 border
Is this a terminal or code block?  → Graphite 950 + JetBrains Mono
```

---

*Last updated: 2026-02-17*
*Standard: Enterprise-grade AI runtime designed by engineers for engineers.*
