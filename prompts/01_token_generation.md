# Promt

Read design-system.md from my project folder. Then generate three files:

1. tailwind.config.js — Override Tailwind's defaults with our brand's 
colors, fonts, spacing, and shadows. Use the same names for everything 
as they appear in the spec. Be aware to extend Tailwind's defaults, do not replace them.

2. src/styles/globals.css — Register all design values (colors, fonts, 
spacing, shadows, etc.) as CSS variables available across the entire app. 
Include the standard Tailwind directives at the top.

3. src/lib/tokens.js — Export all the same design values as a JavaScript 
object, organized by category, mirroring the structure of the Tailwind config.

**Use exact values from the spec throughout — no rounding or substitutions!**

# Update CLAUDE.md

Add the following to the Conventions section of my CLAUDE.md:

Styling: Use Tailwind theme classes for all design token values. Never hardcode hex colors, pixel font sizes, or spacing values in components. If a needed token does not exist in the Tailwind config, add it there rather than hardcoding the value. This means bg-primary not #2D7B5E, text-h3 not text-lg, p-lg not p-4.

Also add to the References section:

Tailwind config: See tailwind.config.js for design tokens as Tailwind theme extensions. Always use theme classes, never hardcode values.
