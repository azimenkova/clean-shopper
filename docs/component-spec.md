# Component Specification — Clean Shopper
**Date:** 2026-04-05  |  **Version:** 1.0

All visual values reference design tokens from `tailwind.config.js`. No hardcoded colors, font sizes, spacing, or radii.

## Icon Library

**Package:** `lucide-react`

**Import pattern:** Tree-shakeable named imports.
```jsx
import { House, Search, X } from 'lucide-react';
```

**Usage:** All icons use `currentColor` by default, so Tailwind `text-*` classes control color. Use the `size` prop for consistent sizing across components.
```jsx
<Search size={20} />           {/* SearchInput */}
<House size={24} />            {/* NavBar */}
<PackageSearch size={48} />    {/* EmptyState */}
```

**Rules:**
- Always use Lucide for icons. Do not use inline SVGs or other icon libraries.
- Import only the icons you need — the package is tree-shakeable.
- Use the `size` prop, not Tailwind width/height classes, for icon dimensions.
- Icons inherit color from parent via `currentColor`. Set color on the parent element with Tailwind `text-*` classes.

---

## Button

A multi-variant action trigger used for primary actions, secondary options, and destructive confirmations throughout the app.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | yes | — | Button label content |
| `variant` | `"primary" \| "secondary" \| "destructive"` | no | `"primary"` | Visual variant |
| `size` | `"sm" \| "md" \| "lg"` | no | `"md"` | Button size |
| `disabled` | `boolean` | no | `false` | Disables interaction |
| `loading` | `boolean` | no | `false` | Shows loading spinner, disables interaction |
| `icon` | `ReactNode` | no | — | Optional leading icon |
| `type` | `"button" \| "submit" \| "reset"` | no | `"button"` | HTML button type |
| `onClick` | `function` | no | — | Click handler |

### Visual Structure

**Base (all variants):**
`font-primary text-small font-semibold rounded-md transition-colors duration-fast ease-default`

**Size tokens:**

| Size | Classes |
|------|---------|
| `sm` | `px-sm py-xs text-caption` |
| `md` | `px-md py-sm text-small` |
| `lg` | `px-lg py-sm text-body` |

**Variant tokens:**

| Variant | Default | Hover | Active |
|---------|---------|-------|--------|
| `primary` | `bg-primary-500 text-white` | `bg-primary-600` | `bg-primary-700` |
| `secondary` | `bg-sand-200 text-neutral-700 border border-neutral-200` | `bg-sand-300` | `bg-sand-400` |
| `destructive` | `bg-error text-white` | `bg-error-dark` | `bg-error-dark` |

**Icon layout:** `flex items-center gap-sm` — icon sits before label.

### States

| State | Behavior |
|-------|----------|
| **Default** | Variant styling as described above |
| **Hover** | Background shifts one step darker per variant table |
| **Focus** | `outline-none ring-2 ring-accent-500 ring-offset-2` |
| **Disabled** | `opacity-50 cursor-not-allowed` — no hover change |
| **Loading** | Label replaced by a 16px spinner. Button keeps its width (`min-w-` set to prevent layout shift). Pointer events disabled. |

### Usage Rules

- **Use** for all clickable actions: "Save to Library", "Add to Shopping List", "Search", "Compare", form submissions.
- **Use primary** for the single most important action in a given view.
- **Use secondary** for supporting actions alongside a primary button.
- **Use destructive** only for irreversible actions (e.g. removing a product from library).
- **Do not use** for navigation between views — use links or the NavBar instead.
- **Do not use** more than one primary button per visual section.

---

## SafetyBadge

Displays a color-coded pill indicating a product's safety assessment (clean, caution, or avoid), used on product cards, search results, comparison views, and product detail screens.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `score` | `"clean" \| "caution" \| "avoid"` | yes | — | Safety assessment level |

### Visual Structure

**Base:** `inline-flex items-center gap-xs rounded-full px-sm py-xs text-caption font-medium`

**Score-to-token mapping:**

| Score | Background | Text | Label |
|-------|------------|------|-------|
| `clean` | `bg-success-light` | `text-success-dark` | "Clean" |
| `caution` | `bg-warning-light` | `text-warning-dark` | "Caution" |
| `avoid` | `bg-error-light` | `text-error-dark` | "Avoid" |

**Dot indicator:** A `●` character rendered before the label in `text-caption`, with `aria-hidden="true"`.

### States

| State | Behavior |
|-------|----------|
| **Default** | Static pill — no interactive states |

### Usage Rules

- **Use** anywhere a product's safety assessment needs to be displayed.
- **Do not use** for general-purpose status — use semantic colors directly for non-safety contexts.
- **Do not use** as a button or clickable element. It is informational only.
- Always pass the score value from the API response — do not derive it on the client.

---

## CategoryTag

Renders a product category label as a neutral pill, used on product cards, library filters, and shopping list groupings.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | `string` | yes | — | Category name (e.g. "Cleaning", "Personal Care") |

### Visual Structure

`bg-sand-200 text-neutral-600 rounded-full px-sm py-xs text-caption font-medium`

### States

| State | Behavior |
|-------|----------|
| **Default** | Static pill — no interactive states |

### Usage Rules

- **Use** for displaying product categories in read-only contexts.
- **Do not use** for interactive filtering — build a separate filter chip component if filtering needs active/inactive states.
- **Do not use** for safety scores — use SafetyBadge instead.

---

## InputField

A labeled text input with support for validation states, helper text, and icons, used in search, preference forms, and any text entry context.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | `string` | yes | — | Input label displayed above the field |
| `id` | `string` | yes | — | Unique ID linking label to input |
| `type` | `string` | no | `"text"` | HTML input type |
| `placeholder` | `string` | no | — | Placeholder text |
| `value` | `string` | yes | — | Controlled input value |
| `onChange` | `function` | yes | — | Change handler |
| `error` | `string` | no | — | Error message — triggers error styling when present |
| `helperText` | `string` | no | — | Hint text displayed below the input |
| `disabled` | `boolean` | no | `false` | Disables the input |
| `icon` | `ReactNode` | no | — | Optional leading icon inside the input |

### Visual Structure

**Label:** `block text-small font-medium text-neutral-700 mb-xs`

**Input container (for icon layout):** `relative`

**Input:** `w-full bg-card text-body text-neutral-800 font-primary rounded-md border border-neutral-200 px-md py-sm transition-colors duration-fast ease-default placeholder:text-neutral-400`

**With icon:** `pl-xl` on input. Icon positioned `absolute left-sm top-1/2 -translate-y-1/2 text-neutral-400`.

**Helper text:** `text-caption text-neutral-500 mt-xs`

**Error text:** `text-caption text-error mt-xs`

### States

| State | Behavior |
|-------|----------|
| **Default** | `border-neutral-200` |
| **Focus** | `border-accent-500 outline-none ring-2 ring-accent-500 ring-offset-1` |
| **Error** | `border-error ring-2 ring-error ring-offset-1` — error message appears below |
| **Disabled** | `bg-neutral-50 text-neutral-400 cursor-not-allowed border-neutral-200` |

### Usage Rules

- **Use** for all single-line text entry: search terms, ingredient names, preference values.
- **Always provide a label** — even if visually hidden (use `sr-only` class), it must exist for accessibility.
- **Do not use** for multi-line text — build a separate textarea component if needed.
- **Do not use** the error prop for warnings — error is for blocking validation only.

---

## SearchInput

A specialized search field with a search icon, clear button, and submit-on-enter behavior, used as the primary product research entry point and for filtering the product library.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` | yes | — | Controlled input value |
| `onChange` | `function` | yes | — | Change handler |
| `onSubmit` | `function` | yes | — | Called when user presses Enter or taps search |
| `placeholder` | `string` | no | `"Search products..."` | Placeholder text |
| `loading` | `boolean` | no | `false` | Shows a spinner in place of the search icon |
| `disabled` | `boolean` | no | `false` | Disables the input |

### Visual Structure

**Wrapper:** `relative w-full`

**Input:** `w-full bg-card text-body text-neutral-800 font-primary rounded-lg border border-neutral-200 pl-xl pr-xl py-sm shadow-sm transition-colors duration-fast ease-default placeholder:text-neutral-400`

**Search icon / spinner:** `absolute left-sm top-1/2 -translate-y-1/2 text-neutral-400` — 20px search icon. When `loading` is true, replaced by a spinning indicator of the same size.

**Clear button (visible when value is non-empty):** `absolute right-sm top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600` — an × icon button that calls `onChange` with an empty string.

### States

| State | Behavior |
|-------|----------|
| **Default** | `border-neutral-200 shadow-sm` |
| **Focus** | `border-accent-500 ring-2 ring-accent-500 ring-offset-1 shadow-md` |
| **Loading** | Search icon replaced by spinner. Input remains editable. |
| **Disabled** | `bg-neutral-50 text-neutral-400 cursor-not-allowed` |

### Usage Rules

- **Use** as the main product search input on the Home and Search views.
- **Use** for filtering saved products in the Library view.
- **Do not use** for general text entry — use InputField instead.
- **Do not use** multiple SearchInputs on the same page.
- Submits on Enter keypress — no separate search button needed.

---

## EmptyState

A centered message with optional icon and action button displayed when there is no content to show, used in the product library, shopping list, and search results.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `ReactNode` | no | — | Illustrative icon displayed above the heading |
| `heading` | `string` | yes | — | Short empty state title |
| `description` | `string` | no | — | Supporting explanation text |
| `action` | `{ label: string, onClick: function }` | no | — | Optional CTA button rendered below the description |

### Visual Structure

**Container:** `flex flex-col items-center justify-center text-center py-xl px-lg`

**Icon (if provided):** `text-neutral-300 mb-md` — rendered at 48px.

**Heading:** `text-h4 text-neutral-700 mb-sm`

**Description:** `text-small text-neutral-500 max-w-sm mb-lg`

**Action button (if provided):** Renders a `Button` component with `variant="primary"` and `size="md"`.

### States

| State | Behavior |
|-------|----------|
| **Default** | The only state — this component appears when content is absent |

### Usage Rules

- **Use** when a list, grid, or view has zero items to display.
- **Always include a heading** that tells the user what's missing ("No saved products yet").
- **Include an action** when the user can do something about it ("Start searching" button).
- **Do not use** for error states — build error messaging into the relevant view instead.
- **Do not use** for loading states — use LoadingIndicator.

---

## LoadingIndicator

A subtle animated indicator for async operations, used during AI assessments, product searches, and ingredient data fetches.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | no | `"md"` | Spinner size |
| `label` | `string` | no | — | Accessible label and optional visible text below the spinner |

### Visual Structure

**Container:** `flex flex-col items-center justify-center gap-sm`

**Spinner:** A circular border spinner using `border-primary-200 border-t-primary-500 rounded-full animate-spin`.

| Size | Dimensions |
|------|------------|
| `sm` | `w-4 h-4 border-2` |
| `md` | `w-8 h-8 border-2` |
| `lg` | `w-12 h-12 border-3` |

**Label (if provided):** `text-small text-neutral-500` — also set as `aria-label` on the spinner for screen readers.

**When no label is provided:** Spinner gets `aria-label="Loading"` as default.

### States

| State | Behavior |
|-------|----------|
| **Default** | Spinner animates continuously |

### Usage Rules

- **Use** for any async operation that takes more than 300ms.
- **Use `sm`** inline within buttons or table cells.
- **Use `md`** for section-level loading (e.g. a card body loading its content).
- **Use `lg`** for full-view loading (e.g. initial page data fetch).
- **Do not use** for instant operations — only for perceptible waits.
- **Do not use** to replace skeleton screens if the layout of the incoming content is known. LoadingIndicator is for unpredictable-shape content.

---

## NavBar

A fixed bottom navigation bar with tabs for the four main app sections: Home, Search, Lists, and Profile.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `activeTab` | `"home" \| "search" \| "lists" \| "profile"` | yes | — | Currently active tab |
| `onTabChange` | `function` | yes | — | Called with the tab key when a tab is tapped |

### Visual Structure

**Bar container:** `fixed bottom-0 left-0 right-0 bg-card border-t border-neutral-200 px-md py-sm font-primary z-50`

**Inner layout:** `flex items-center justify-around max-w-content mx-auto`

**Tab button (each):** `flex flex-col items-center gap-xs py-xs px-sm rounded-md transition-colors duration-fast ease-default`

**Tab icon:** 24px icon. Inactive: `text-neutral-400`. Active: `text-primary-500`.

**Tab label:** `text-caption`. Inactive: `text-neutral-500`. Active: `text-primary-700 font-medium`.

**Tabs:**

| Key | Label | Icon (description) |
|-----|-------|--------------------|
| `home` | Home | House icon |
| `search` | Search | Magnifying glass icon |
| `lists` | Lists | Checklist icon |
| `profile` | Profile | User icon |

### States

| State | Behavior |
|-------|----------|
| **Inactive tab** | Icon `text-neutral-400`, label `text-neutral-500` |
| **Active tab** | Icon `text-primary-500`, label `text-primary-700 font-medium` |
| **Hover (desktop)** | `bg-sand-100` background on the tab button |
| **Focus** | `outline-none ring-2 ring-accent-500 ring-offset-1` |

### Safe Area

Add `pb-safe` (or equivalent `env(safe-area-inset-bottom)` padding) to the bar container to avoid overlap with device home indicators on notched phones.

### Usage Rules

- **Use** as the single persistent navigation element at the bottom of every view.
- **Exactly four tabs** — do not add or remove tabs without updating this spec.
- **Do not use** for contextual actions within a view — use Button instead.
- **Do not nest** a NavBar inside a scrollable container — it must be fixed to the viewport.
- The page content area should include bottom padding equal to the NavBar height to prevent content from being hidden behind it.

---

## ProductCard

A static display card showing a product summary with its name, safety assessment, category, and description, used in search results, the product library grid, and comparison selection.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | yes | — | Product name |
| `safetyScore` | `"clean" \| "caution" \| "avoid"` | yes | — | Safety assessment level — rendered via SafetyBadge |
| `category` | `string` | yes | — | Product category (e.g. "Cleaning", "Personal Care") — rendered via CategoryTag |
| `description` | `string` | yes | — | Short product description, clamped to two lines |

### Visual Structure

**Card container:** `<article>` element with `bg-card rounded-lg shadow-md p-lg font-primary transition-shadow duration-fast ease-default hover:shadow-lg`

**Top row (badge + category):** `flex items-center justify-between mb-md`
- Left: `SafetyBadge` component with `score={safetyScore}`
- Right: `CategoryTag` component with `label={category}`

**Product name:** `<h3>` with `text-h4 text-neutral-800 mb-sm`

**Description:** `<p>` with `text-small text-neutral-600 line-clamp-2`

```
┌─────────────────────────────────────┐
│  [SafetyBadge]        [CategoryTag] │  ← flex justify-between, mb-md
│                                     │
│  Product Name                       │  ← text-h4 text-neutral-800 mb-sm
│  Description text that can wrap     │  ← text-small text-neutral-600
│  across up to two lines max.        │     line-clamp-2
└─────────────────────────────────────┘
```

### States

| State | Behavior |
|-------|----------|
| **Default** | `shadow-md` elevation |
| **Hover** | `shadow-lg` — card lifts subtly via `transition-shadow duration-fast ease-default` |

### Composes

- **SafetyBadge** — for the safety score pill
- **CategoryTag** — for the category pill

When those components are built, ProductCard should use them directly rather than inlining their markup.

### Usage Rules

- **Use** wherever a product needs to be displayed as a summary: search results, library grid, comparison picker.
- **Do not use** for detailed product views — the detail view will show full ingredient lists, certifications, and AI analysis that don't belong in a card.
- **Do not make clickable** — ProductCard is display-only. If navigation to a product detail is needed, wrap the card in a link or button at the parent level, not inside the component.
- **Do not add action buttons** (e.g. "Save", "Add to list") inside the card — keep those in the parent layout to avoid coupling the card to specific view contexts.
- Always pass `safetyScore` from the API response — do not derive it on the client.

---

*Generated from design-system.md and tailwind.config.js tokens. All visual values reference the Tailwind theme — no hardcoded values.*
