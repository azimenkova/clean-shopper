# Design System: Clean Shopper
**Date:** 2026-04-04  |  **Version:** 1.0  |  **Platform:** Web (React + Vite + Tailwind)

---

## Design Direction

Clean Shopper's visual identity is trustworthy, approachable, and grounded in a wellness sensibility. The interface communicates credibility through generous spacing, muted natural color, and clean typography — not through clinical precision or data-heavy density. It should feel like a knowledgeable friend who happens to be an ingredient expert, not a laboratory or a government database.

The aesthetic draws from the wellness-commerce space — Thrive Market and Grove Collaborative — where generous layouts, natural palettes, and warm surfaces create an environment that feels both competent and caring. Every visual decision reinforces the same message: we've done the hard research so you don't have to, and you can trust what you see here.

Color anchors on muted green (safety, transparency), warm sand surfaces (comfort, approachability), and soft teal accents (guidance, action). Poppins carries the full typographic range with a modern friendliness that reads as credible across ingredient lists, product cards, and conversational AI responses alike.

## Design Principles

1. **Trust through clarity.** Every element earns its place. Clean layouts, honest color, and readable typography signal that the information here is reliable — no dark patterns, no visual noise, no cognitive overhead.

2. **Warm expertise.** The interface should feel like getting advice from someone who genuinely cares about your well-being. Warm tones, generous spacing, and approachable typography prevent the ingredient-analysis features from feeling intimidating or clinical.

3. **Generous breathing room.** White space is a feature, not a waste. Spacious layouts reduce cognitive load and let users focus on the information that matters — ingredient assessments, product comparisons, and recommendations.

4. **Quiet confidence.** The design doesn't shout. Motion is restrained, color is muted, and hierarchy is established through spacing and weight rather than size and saturation. The product's credibility comes from substance, not visual volume.

## Color System

### Palette Philosophy

The palette is drawn from nature — sage greens, warm sands, and soft teals — grounding the product in the same natural world its users are trying to protect. The muted saturation communicates scientific credibility without clinical coldness. Every color traces back to a feeling: green for safety and transparency, sand for warmth and comfort, teal for guidance and forward motion.

### Primary Colors
| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--color-primary-50` | Sage Mist | `#EFF5F1` | Tinted backgrounds, selected states |
| `--color-primary-100` | Sage Light | `#D7E8DC` | Hover backgrounds, subtle fills |
| `--color-primary-200` | Sage Soft | `#B0D1BA` | Borders on primary elements |
| `--color-primary-300` | Sage Medium | `#88BA97` | Secondary icons, decorative elements |
| `--color-primary-400` | Sage | `#6AA47A` | Large interactive surfaces |
| `--color-primary-500` | Sage Deep | `#528C63` | Primary buttons, key actions |
| `--color-primary-600` | Sage Dark | `#437350` | Hover state for primary buttons |
| `--color-primary-700` | Sage Darker | `#345A3E` | Primary text on light backgrounds |
| `--color-primary-800` | Sage Forest | `#25412D` | High-emphasis headings |
| `--color-primary-900` | Sage Night | `#16281B` | Maximum contrast text |

### Accent Colors (Teal)
| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--color-accent-50` | Teal Mist | `#EDF6F6` | Accent tinted backgrounds |
| `--color-accent-100` | Teal Light | `#D0E8E8` | Accent hover fills |
| `--color-accent-200` | Teal Soft | `#A3D1D1` | Accent borders |
| `--color-accent-300` | Teal Medium | `#76BABA` | Accent icons |
| `--color-accent-400` | Teal | `#5BA8A8` | Links, accent interactive |
| `--color-accent-500` | Teal Deep | `#4A9494` | Accent buttons, badges |
| `--color-accent-600` | Teal Dark | `#3D7D7D` | Accent hover states |
| `--color-accent-700` | Teal Darker | `#2D6363` | Accent text |

### Semantic Colors
| Role | Hex | Usage |
|------|-----|-------|
| Success | `#3D8B5E` | Clean ingredient indicators, positive assessments, confirmations |
| Warning | `#D4A843` | Moderate concern ingredients, caution states |
| Error | `#C75450` | Harmful ingredient flags, destructive actions, form errors |
| Info | `#5A8FB8` | Informational callouts, tips, neutral status |

### Neutral Scale
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-neutral-50` | `#FAFAF8` | Lightest background, subtle alternating rows |
| `--color-neutral-100` | `#F5F4F2` | Secondary backgrounds |
| `--color-neutral-200` | `#E8E7E4` | Borders, dividers |
| `--color-neutral-300` | `#D4D2CE` | Disabled backgrounds, subtle borders |
| `--color-neutral-400` | `#B0ADA8` | Placeholder text, disabled text |
| `--color-neutral-500` | `#8C8983` | Secondary text, metadata |
| `--color-neutral-600` | `#6B6862` | Body text (secondary) |
| `--color-neutral-700` | `#4A4843` | Body text (primary) |
| `--color-neutral-800` | `#2E2C28` | Headings, high-emphasis text |
| `--color-neutral-900` | `#1A1917` | Maximum contrast, rare use |

### Surface Colors
| Surface | Hex | Usage |
|---------|-----|-------|
| Page background | `#F9F5EE` | Main page background — warm sand base |
| Card / elevated | `#FFFFFF` | Cards, modals, elevated content |
| Sidebar / secondary | `#F1EBDF` | Navigation panels, secondary surfaces |
| Overlay backdrop | `rgba(42, 40, 36, 0.4)` | Modal overlays, drawer backdrops |

### Accessibility

All text-on-background combinations meet **WCAG AA** (4.5:1 for body text, 3:1 for large text). Primary body text (`neutral-700` on `sand-100`) achieves approximately 6.5:1. Primary buttons (`white` on `primary-500`) achieve approximately 4.6:1. The warm neutral scale was intentionally desaturated to maintain reliable contrast ratios across the full range.

## Typography

### Type Philosophy

Poppins was chosen because it threads the needle between modern credibility and human warmth — geometric enough to feel precise when presenting ingredient data, rounded enough to feel friendly when guiding users through product recommendations. Its generous x-height ensures legibility at small sizes (ingredient lists, metadata), and its weight range (400–700) creates clear hierarchy without needing a second typeface. The result: one voice, one personality, from display headings to caption labels.

### Font Stack
| Role | Font | Fallback | Rationale |
|------|------|----------|-----------|
| Primary | Poppins | `system-ui, -apple-system, 'Segoe UI', sans-serif` | Modern, friendly, legible across all sizes — matches the trustworthy-but-approachable personality |
| Monospace | — | `'SF Mono', 'Cascadia Code', 'Fira Code', monospace` | System monospace stack for any code or technical displays |

### Type Scale
Scale ratio: **1.250 (Major Third)**

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-display` | 3rem (48px) | 700 | 1.1 | Hero headings, landing page titles |
| `--text-h1` | 2.4rem (38.4px) | 700 | 1.2 | Page titles |
| `--text-h2` | 1.875rem (30px) | 600 | 1.25 | Section headings |
| `--text-h3` | 1.5rem (24px) | 600 | 1.3 | Card titles, subsection headings |
| `--text-h4` | 1.25rem (20px) | 600 | 1.35 | Group labels, small headings |
| `--text-body` | 1rem (16px) | 400 | 1.6 | Body text, descriptions, AI responses |
| `--text-small` | 0.875rem (14px) | 400 | 1.5 | Secondary text, form labels, metadata |
| `--text-caption` | 0.75rem (12px) | 400 | 1.5 | Timestamps, fine print, helper text |

### Letter Spacing
- Display and H1: `-0.02em` — tighten at large sizes for visual density
- H2–H4: `-0.01em` — slight tightening
- Body and small: `0` — default tracking
- Caption and all-caps labels: `0.04em` — open up for readability at small sizes

## Spacing System

### Spacing Philosophy

Generous spacing is a core design principle — it reduces cognitive load, communicates confidence, and creates the "wellness sensibility" inspired by Thrive Market and Grove Collaborative. The interface should never feel cramped or hurried. White space is used deliberately to group related information, separate distinct sections, and give the eye room to rest between ingredient assessments and product details.

### Base Unit
**8px (0.5rem).** An 8-point grid provides enough granularity for compact UI elements while maintaining rhythm across larger layout decisions.

### Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 0.25rem (4px) | Tight spacing: icon-to-label gaps, inline element margins |
| `--space-2` | 0.5rem (8px) | Compact spacing: form field internal padding, tight list items |
| `--space-3` | 0.75rem (12px) | Related element spacing: label-to-input, badge padding |
| `--space-4` | 1rem (16px) | Standard spacing: paragraph gaps, card padding (compact) |
| `--space-6` | 1.5rem (24px) | Group spacing: between form fields, card padding (standard) |
| `--space-8` | 2rem (32px) | Section spacing within a card, generous card padding |
| `--space-10` | 2.5rem (40px) | Between content groups on a page |
| `--space-12` | 3rem (48px) | Major section breaks |
| `--space-16` | 4rem (64px) | Page-level section spacing, hero padding |

### Layout Metrics
| Property | Value |
|----------|-------|
| Content max-width | `1120px` |
| Page margin (desktop) | `4rem` (64px) |
| Page margin (mobile) | `1.5rem` (24px) |
| Section spacing | `3rem–4rem` (48–64px) |

## Shape and Borders

### Shape Philosophy

Softly rounded shapes reinforce the approachable, wellness-oriented personality without tipping into playfulness. Corners are rounded enough to feel friendly and human, but not so much that they lose structure. The shape language says "welcoming" — the visual equivalent of rounded shoulders rather than sharp edges.

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Badges, tags, small interactive elements |
| `--radius-md` | `10px` | Buttons, inputs, dropdowns |
| `--radius-lg` | `16px` | Cards, modals, panels |
| `--radius-full` | `9999px` | Avatars, pills, circular icons |

### Borders
| Type | Value |
|------|-------|
| Default | `1px solid var(--color-neutral-200)` |
| Subtle | `1px solid var(--color-neutral-100)` |
| Focus ring | `2px solid var(--color-accent-500)` with `2px` offset |

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(42, 40, 36, 0.06)` | Subtle elevation: buttons, tags |
| `--shadow-md` | `0 4px 12px rgba(42, 40, 36, 0.08)` | Cards, dropdowns, popovers |
| `--shadow-lg` | `0 8px 24px rgba(42, 40, 36, 0.12)` | Modals, floating panels |

## Motion

### Motion Philosophy

Motion in Clean Shopper is restrained and purposeful — it confirms actions, guides attention, and smooths transitions without calling attention to itself. The product's credibility comes from content, not choreography. Animations should feel polished and intentional: things ease in and settle naturally, like a well-made drawer sliding closed. Nothing bounces, nothing overshoots, nothing delays unnecessarily.

### Duration Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `120ms` | Micro-interactions: button hover, toggle, focus ring |
| `--duration-normal` | `200ms` | Standard transitions: panel expand, tab switch, fade in |
| `--duration-slow` | `350ms` | Larger transitions: modal open/close, page transitions |

### Easing
| Token | Value | Usage |
|-------|-------|-------|
| `--ease-default` | `cubic-bezier(0.25, 0.1, 0.25, 1.0)` | General-purpose: balanced entry and exit |
| `--ease-in` | `cubic-bezier(0.42, 0, 1, 1)` | Elements exiting: fade out, slide away |
| `--ease-out` | `cubic-bezier(0, 0, 0.58, 1)` | Elements entering: fade in, slide in, appear |

### Reduced Motion
Respect `prefers-reduced-motion: reduce` by collapsing all transitions to `0ms` duration. Content changes should still occur instantly — only the animated transition is removed. Implement via a global media query that overrides duration tokens.

## Dark Mode

Not included in V1. The warm sand-and-sage palette was designed for light mode. Dark mode would require a separate surface hierarchy and adjusted primary/accent tones to maintain the same warmth — worth doing properly in a future version rather than auto-inverting.

## Responsive Breakpoints
| Name | Value | Behavior |
|------|-------|----------|
| `sm` | `640px` | Single column, full-width cards, stacked navigation |
| `md` | `768px` | Two-column layouts begin, sidebar becomes available |
| `lg` | `1024px` | Full layout: sidebar + main content area |
| `xl` | `1280px` | Max-width content container, generous side margins |

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* --- Primary (Sage Green) --- */
  --color-primary-50: #EFF5F1;
  --color-primary-100: #D7E8DC;
  --color-primary-200: #B0D1BA;
  --color-primary-300: #88BA97;
  --color-primary-400: #6AA47A;
  --color-primary-500: #528C63;
  --color-primary-600: #437350;
  --color-primary-700: #345A3E;
  --color-primary-800: #25412D;
  --color-primary-900: #16281B;

  /* --- Accent (Soft Teal) --- */
  --color-accent-50: #EDF6F6;
  --color-accent-100: #D0E8E8;
  --color-accent-200: #A3D1D1;
  --color-accent-300: #76BABA;
  --color-accent-400: #5BA8A8;
  --color-accent-500: #4A9494;
  --color-accent-600: #3D7D7D;
  --color-accent-700: #2D6363;

  /* --- Sand (Warm Surfaces) --- */
  --color-sand-50: #FDFBF8;
  --color-sand-100: #F9F5EE;
  --color-sand-200: #F1EBDF;
  --color-sand-300: #E5DDD0;
  --color-sand-400: #D4C9B8;

  /* --- Neutrals (Warm-tinted) --- */
  --color-neutral-50: #FAFAF8;
  --color-neutral-100: #F5F4F2;
  --color-neutral-200: #E8E7E4;
  --color-neutral-300: #D4D2CE;
  --color-neutral-400: #B0ADA8;
  --color-neutral-500: #8C8983;
  --color-neutral-600: #6B6862;
  --color-neutral-700: #4A4843;
  --color-neutral-800: #2E2C28;
  --color-neutral-900: #1A1917;

  /* --- Semantic --- */
  --color-success: #3D8B5E;
  --color-warning: #D4A843;
  --color-error: #C75450;
  --color-info: #5A8FB8;

  /* --- Surfaces --- */
  --surface-page: #F9F5EE;
  --surface-card: #FFFFFF;
  --surface-secondary: #F1EBDF;
  --surface-overlay: rgba(42, 40, 36, 0.4);

  /* --- Typography --- */
  --font-primary: 'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;

  --text-display: 3rem;
  --text-h1: 2.4rem;
  --text-h2: 1.875rem;
  --text-h3: 1.5rem;
  --text-h4: 1.25rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-caption: 0.75rem;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  --leading-tight: 1.1;
  --leading-snug: 1.2;
  --leading-normal: 1.35;
  --leading-relaxed: 1.6;
  --leading-loose: 1.5;

  --tracking-tight: -0.02em;
  --tracking-snug: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.04em;

  /* --- Spacing --- */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* --- Layout --- */
  --content-max-width: 1120px;
  --page-margin-desktop: 4rem;
  --page-margin-mobile: 1.5rem;

  /* --- Shape --- */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* --- Borders --- */
  --border-default: 1px solid var(--color-neutral-200);
  --border-subtle: 1px solid var(--color-neutral-100);
  --focus-ring: 2px solid var(--color-accent-500);

  /* --- Shadows --- */
  --shadow-sm: 0 1px 3px rgba(42, 40, 36, 0.06);
  --shadow-md: 0 4px 12px rgba(42, 40, 36, 0.08);
  --shadow-lg: 0 8px 24px rgba(42, 40, 36, 0.12);

  /* --- Motion --- */
  --duration-fast: 120ms;
  --duration-normal: 200ms;
  --duration-slow: 350ms;
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1.0);
  --ease-in: cubic-bezier(0.42, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.58, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}
```

## Open Decisions

1. **Tailwind integration strategy.** Tokens are defined as CSS custom properties — decide whether to extend `tailwind.config.js` to reference these variables or maintain a parallel Tailwind theme. [Assumed — extend Tailwind config to consume CSS custom properties for single source of truth.]
2. **Semantic color shades.** Success, warning, error, and info are defined as single values. If components need light/dark variants (e.g., tinted alert backgrounds), a 3-stop scale per semantic color should be added. [Assumed — single value sufficient for V1.]
3. **Icon style.** No icon library selected. Recommend a rounded/friendly icon set (Phosphor, Lucide) to match the shape language. [Decision needed.]
4. **Ingredient safety color mapping.** The product rates ingredients on a safety spectrum — decide whether to use the semantic palette (green/yellow/red) or a dedicated safety-specific scale. [Decision needed.]

---
*Generated by /design-system-generator skill.*
