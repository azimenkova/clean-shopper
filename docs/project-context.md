# Project Context Document
**Project:** Clean Shopper
**Date:** 2026-03-28
**Source:** Product brief for Claude Code for Designers course demo project
**Version:** 1.0

---

## 1. Problem Statement
People who want to buy cleaner, non-toxic home and pantry products face an overwhelming research burden — product labels are confusing, "clean" and "natural" claims are unreliable, and there is no single tool that evaluates ingredients, remembers preferences, and surfaces trustworthy alternatives. The research is fragmented across multiple sources and requires domain expertise most consumers don't have.

## 2. ICP (Ideal Customer Profile)
Someone actively trying to make better purchasing decisions for their household — replacing toxic cleaning products, finding safer personal care items, or choosing cleaner food options. They care enough to want change but find the process too slow and confusing to sustain on their own. They are not ingredient experts. They have built up informal preferences over time (brands they trust, ingredients they avoid) but have no system to capture or apply those preferences consistently. They are likely already reading labels and googling ingredients occasionally, but hitting walls.

## 3. Pain Points
- **Label confusion:** Ingredient lists require expertise to interpret, and most consumers cannot distinguish safe from harmful ingredients on sight.
- **Misleading claims:** "Clean," "natural," and "organic" on packaging are often unverified marketing language with no standardized meaning.
- **Fragmented research:** Evaluating a single product requires cross-referencing multiple sources (EWG, brand sites, review sites), which is slow and unsustainable across a full household's worth of products.
- **No preference persistence:** Preferences built over time — trusted brands, avoided ingredients, valued certifications — have nowhere to live and must be mentally re-applied every time.

## 4. Proposed Solution
Users interact with Clean Shopper through a conversational interface powered by Claude. Core user actions:

- **Research products:** Describe what you're looking for and get ingredient-evaluated recommendations with reasoning, sourced from real-time web search and databases like EWG Skin Deep.
- **Save preferences:** Store ingredients to avoid, trusted brands, and certifications that matter (EWG Verified, USDA Organic, B Corp, etc.) — applied automatically to all future recommendations.
- **Build a shopping cart:** Add recommended products to a persistent cart that carries across sessions.
- **Compare products:** Ask for side-by-side comparisons with a clear recommendation based on your saved preferences.

## 5. Success Metrics
Not defined in source material.

## 6. Design Constraints
- **Platform:** Conversational / AI-agent interface (web-based, given the course context)
- **Geography:** Not specified
- **Accessibility:** Not specified
- **Technical:** Claude as the AI backbone. Real-time web search for product data. EWG Skin Deep as an ingredient safety data source. Cart persists across sessions (implies some form of storage).
- **Scope exclusions (V1):** No checkout/payment, no retailer integrations, no barcode scanning, no user accounts or authentication, no mobile app.
- **Other:** This is a course demo project — students build it over four weeks using Claude Code, with instructor-led live demonstrations each session. Design decisions should account for being teachable and buildable incrementally.

## 7. Open Questions
1. **What is the interface model?** Is this purely chat-based, or does it include structured UI elements (product cards, cart view, preference settings panel)?
2. **How does persistence work without user accounts?** The brief excludes authentication but requires cart and preference persistence across sessions. What mechanism handles this — local storage, anonymous sessions, something else?
3. **What are the "clean standards" for ingredient evaluation?** Is this EWG-only, or is there a defined rubric combining multiple sources?
4. **How are products sourced?** Real-time web search alone, or is there a product database? How are purchase links or availability handled?
5. **What is the session model?** Does a user start fresh each time, or is there conversation history beyond cart and preferences?
6. **What is the weekly build progression?** Understanding the four-week arc would clarify which features are foundational vs. additive.

## 8. Gaps
1. **Success metrics:** No KPIs, engagement targets, or outcome measures defined. Matters because without these, design decisions have no way to be evaluated against intent — we can't distinguish a good V1 from a feature-complete but ineffective one.
2. **Visual and interaction design direction:** No mockups, wireframes, tone references, or aesthetic guidance. Matters because the conversational interface pattern has a wide design spectrum (pure chat vs. hybrid UI), and the course context may impose specific expectations.
3. **Technical architecture:** No stack specified beyond "Claude" and "conversational interface." Matters for scoping what's buildable within the four-week course timeline and understanding persistence, API, and rendering constraints.
4. **Content strategy:** No guidance on how recommendations are presented — length, format, citation style, confidence levels. Matters because the core value proposition depends on the quality and trustworthiness of how information is surfaced.
5. **Error and edge cases:** No guidance on what happens when products can't be found, preferences conflict, or data sources disagree. Matters because conversational interfaces fail visibly when they can't handle the unexpected.

---
*Generated by /project-context skill. Add to this document as decisions are made and questions are resolved.*
