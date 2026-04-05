# Component generation prompts

## 1. Create omponent stack

Based on the project context in CLAUDE.md and the design system in /docs/design-system.md, what are the core reusable UI components Clean Shopper needs for its first version? For each one, give me a one-sentence description of what it does and where it is used. Focus on components that appear in more than one place in the app.

## 2. Create components specification

Read CLAUDE.md, /docs/design-system.md, and tailwind.config.js. Then create a component specification document at /docs/component-spec.md.

For each of these components, write a spec that includes:

1. Name and one-sentence purpose
2. Props with types and whether they are required or optional
3. Visual structure using Tailwind classes from our design token theme, referencing exact token names like bg-primary, text-h3, p-lg, rounded-lg, shadow-sm
4. States: default, hover, loading, empty, error — whichever apply to this component
5. Usage rules: when to use this component and when not to

Components to spec: 
- Button (primary and secondary and destructive variants),
- SafetyBadge,
- CategoryTag,
- InputField,
- SearchInput,
- EmptyState,
- LoadingIndicator,
- NavBar — the bottom navigation bar with tabs for Home, Search, Lists, and Profile.

Use design tokens from tailwind.config.js for all visual values. Do not hardcode any colors, font sizes, or spacing values.

## 3. Testing component

- Build the ProductCard component based on the spec in /docs/component-spec.md. Use this sample data: product name "Dr. Bronner's Pure Castile Soap", safety score 92, safety level "clean", category "Personal Care", description "Organic, fair trade, no synthetic preservatives or detergents."
- Build the NavBar component based on the spec in /docs/component-spec.md. The active tab is Home.

## 4. Update CLAUDE.md

Add a reference to /docs/component-spec.md in the References section of my CLAUDE.md. The entry should say: "Component spec: See /docs/component-spec.md — use existing components before creating new ones. Follow the spec for props, states, and visual structure."

Also add a convention to the Conventions section: "Components: Always check /docs/component-spec.md before building any UI element. If an existing component covers the use case, use it. Only create a new component if no spec covers the pattern, and add the new component to component-spec.md before moving on."


## 5. Extending spec with a new component
Read CLAUDE.md, /docs/design-system.md, and tailwind.config.js. For component [X] add specification in /docs/component_spec.md. Specification must include:

1. Name and one-sentence purpose
2. Props with types and whether they are required or optional
3. Visual structure using Tailwind classes from our design token theme, referencing exact token names like bg-primary, text-h3, p-lg, rounded-lg, shadow-sm
4. States: default, hover, loading, empty, error — whichever apply to this component
5. Usage rules: when to use this component and when not to

Use design tokens from tailwind.config.js for all visual values. Do not hardcode any colors, font sizes, or spacing values.