```markdown
# Design System Strategy: The Editorial Authority

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Silent Partner."** 

In the world of Taiwanese high finance and CPA services, trust is not shouted; it is whispered through precision, restraint, and intentionality. This system moves away from the "generic corporate" look by adopting a high-end editorial aesthetic reminiscent of *CommonWealth Magazine*. We achieve this by prioritizing "White Space as a Luxury" and using a strict, squared-off geometry that mirrors the structural integrity of a balance sheet. 

The design breaks the "template" feel by using **Intentional Asymmetry**. Rather than perfectly centered grids, we utilize wide margins and "The Golden Inset"—where key text blocks are offset to create a sense of bespoke, hand-crafted layout.

## 2. Color Palette & Atmospheric Depth
Our palette is rooted in the tactile sensation of archival paper and deep, vegetal ink.

### Core Tones
- **Canvas (Background):** `#fcf9f4` (Warm Paper). This is our base. It is softer on the eyes than pure white and suggests longevity.
- **Primary:** `#082419` (Ink Forest). Used for core branding and high-density text.
- **Primary Container:** `#1f3a2e`. Use this for deep-tone sections where "Financial Restraint" needs to be felt physically.
- **CTA:** `#F5A623` (Signal Orange). Reserved *only* for primary conversion points. It is the "flare" in the forest.

### The "No-Line" Rule & Surface Hierarchy
Traditional UI uses borders to separate ideas. We use **Tonal Transitions**.
- **Prohibition:** Do not use 1px solid borders to section off the page. 
- **The Hierarchy:** To define a new section, shift from `surface` (#fcf9f4) to `surface-container-low` (#f6f3ee). 
- **Nesting:** Treat the UI as stacked sheets of vellum. A card (`surface-container-lowest`) should sit on a section (`surface-container-low`), creating depth through value shifts rather than lines.

### Signature Textures
To add "soul," use a subtle linear gradient on large `primary_container` surfaces: transitioning from `#1F3A2E` at the top left to `#082419` at the bottom right at a 15-degree angle. This mimics the way light hits a matte-printed annual report.

## 3. Typography: The Bilingual Standard
The system uses a dual-font approach to balance Taiwanese heritage with global financial standards.

- **Display & Headlines (Noto Sans TC):** Set with "Optical" kerning and tight line-height (1.1–1.2). The Traditional Chinese characters should feel like lead-type blocks—heavy, authoritative, and unmoving.
- **Body & Data (Inter):** All numbers and English text must use Inter. Inter’s tall x-height ensures that complex financial tables remain legible even at `body-sm` (0.75rem).

**Typographic Hierarchy:**
- **Display-LG (3.5rem):** For hero statements. Use `primary` color.
- **Headline-MD (1.75rem):** For section starts. Always paired with a `secondary` (Pale Gold) 1px underline that extends exactly 48px.
- **Title-SM (1rem):** For form labels and sub-navigation. Semi-bold weight to denote "The Professional Voice."

## 4. Elevation & Depth: Tonal Layering
We reject the heavy drop shadows of the "Web 2.0" era. Hierarchy is achieved through **Tonal Layering**.

- **The Layering Principle:** Place `surface-container-highest` (#e5e2dd) behind `surface-container-lowest` (#ffffff) to create a "lifted" card effect.
- **Ambient Shadows:** If a floating element (like a dropdown) is required, use a "Cloud Shadow": `0px 12px 32px rgba(31, 58, 46, 0.06)`. The shadow is tinted with our Ink Forest color, making it feel like a natural part of the environment.
- **The "Ghost Border" Fallback:** In high-density data tables where separation is critical, use the `outline-variant` (#c2c8c2) at **20% opacity**. It should be felt, not seen.
- **Glassmorphism:** For navigation bars, use `surface` at 80% opacity with a `20px` backdrop-blur. This allows the "Warm Paper" content to scroll underneath, maintaining a sense of transparency and "Financial Openness."

## 5. Components
All components must adhere to the **Max 4px Radius** rule.

- **Buttons:**
    - **Primary:** Background `primary`, text `on_primary`. Squared edges (2px radius). No gradient.
    - **CTA:** Background `Signal Orange`, text `on_primary_fixed`. Use for "Contact Us" or "File Now."
- **Inputs:** 
    - No background fill. Use a 1px bottom-border only (`outline-variant`). On focus, transition the border to `secondary` (Pale Gold). This mimics a signature line on a legal document.
- **Cards:**
    - No borders. Use `surface_container_low` background. Use 32px padding to enforce the "Editorial" feel.
- **Lists & Tables:** 
    - **Forbid Divider Lines.** Use alternating row tints using `surface` and `surface_container_low`. Ensure `Inter` is used for all numerical data for tabular lining alignment.
- **The "Stamp" (New Component):**
    - A small, 1px-bordered box containing a `label-sm` tag. Used for "Certified," "Audited," or "Verified" statuses. Color: `secondary` (Pale Gold).

## 6. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Align text to the left and leave the right 30% of the viewport empty for "breathing room."
- **Use Micro-Interactions:** A subtle 2px vertical lift on card hover is enough. Keep it restrained.
- **Prioritize "Warm Paper":** Ensure the background never feels "stark white." It should always feel like premium stationery.

### Don't:
- **No Buildings:** Never use photos of skyscrapers or glass offices. Use abstract textures (paper grain, ink washes) or high-end portraits of people in deep focus.
- **No Rounded Pills:** Never use a corner radius larger than 4px. This system is about "edges" and "precision."
- **No High-Contrast Dividers:** Avoid black lines. If you need a line, it must be the `outline-variant` (#c2c8c2) or a 1px gap showing the background color.

---
**Director's Note:** This design system is not a kit; it is a philosophy. Every pixel should feel like it was placed by a typesetter. If a layout feels too "busy," increase the margins. If it feels too "weak," increase the typographic weight. Trust the paper.```