# Studio T Creative — Design System

A warm, editorial brand system for **Studio T Creative Marketing** — a Strategic Brand
Growth agency. The system gives design agents everything needed to produce on-brand
marketing pages, decks, social content and prototypes: tokens, fonts, reusable React
primitives, foundation specimens and a website UI kit.

> **Tagline:** Strategic Brand Growth — *for businesses that need clarity, consistency, and measurable momentum.*

---

## 1. Company context

Studio T Creative is a brand-and-marketing agency that turns scattered marketing efforts
into one aligned growth system. They position themselves as a **Strategic Brand Growth
Partner**, not a one-off vendor — emphasizing clarity, consistent positioning, and
momentum that connects visibility to action.

**Four service pillars** (from the live site):
- **Brand Foundation** — positioning, identity & messaging.
- **Content Engine** — structured, repeatable content production.
- **Growth & Conversion** — systems that turn attention into action.
- **Campaign Production Studio** — photo / video / campaign production.

**Proof points used across the brand:** `250%` increase in brand awareness · `20+` years
combined experience · `50+` happy clients · `500+` strategies delivered.

**Surfaces represented in this system:**
- **Marketing website** (`ui_kits/website/`) — the primary product. Recreated from the
  live Wix site's content & structure.
- Brand foundations + social content templates (mood imagery in `assets/`).

### Sources given
- `uploads/Brand Guide Sample.pdf` — one-page brand board: COLORS, FONTS (Gazpacho /
  Montserrat), LOGOS, MOOD. Extracted assets live in `assets/`.
- Live website: **https://www.studiot-creative.com/** — copy, IA, services, stats, contact.
- Instagram: `@studiot.creative` · TikTok: `@studiotcreativemk` · LinkedIn (company 80879769).
- Contact: hello@studiot-creative.com

> The reader is not assumed to have access to the above; everything needed is captured here
> and in the token files. Links are stored for re-reference.

---

## 2. Content fundamentals (voice & tone)

**Vibe:** confident, calm, strategic. A senior partner who has a *system*, not a hype
merchant. Polished and warm — editorial, never corporate-cold.

- **Person:** speaks to **"you"** (the client) and refers to the team as **"we"**.
  Partner-to-partner, never lecturing. *"We help you define your brand…"*
- **Casing:** Title Case for headlines & nav ("Strategic Brand Growth", "Resource Hub",
  "Get a Custom Proposal"). Sentence case for body copy. ALL-CAPS only for tiny eyebrow
  labels and the bold serif overlays on social imagery ("ENGAGE YOURSELF").
- **Structure:** short declarative sentences. Lead with the benefit, then the mechanism.
  *"…build structured content and conversion systems that turn attention into action."*
- **Proof over adjectives:** quantify wherever possible (250%, 50+, 500+). Let numbers
  carry the confidence instead of exclamation points.
- **Triads** are a signature device: *"clarity, consistency, and measurable momentum"*;
  *"define your brand, communicate clearly, and build systems."*
- **CTAs** are specific and low-pressure: *"Get a Custom Proposal"*, *"Let's chat!"*,
  *"What are you trying to improve?"*
- **No emoji** in formal brand/website copy. (Social captions may be looser, but the
  system defaults to none.) No buzzword salad, no "rockstar/ninja" language.

**Example, on-voice:**
> *Strategic Brand Growth.* For businesses that need clarity, consistency, and measurable
> momentum. We help you define your brand, communicate clearly, and build structured
> content and conversion systems that turn attention into action.

---

## 3. Visual foundations

Warm, editorial, fashion-magazine-adjacent. Think considered whitespace, a high-contrast
serif against clean sans, and a tight earthy palette — never bright, never neon.

### Color
- **Palette** (from the Brand Guide swatches): Cream/paper `#FBF6EE`, Dusty Rose / mauve
  `#C39483`, Terracotta clay `#87472D`, plus a warm Espresso ink `#261C15`. Tints and
  shades extend each into a ramp (`tokens/colors.css`).
- **Usage:** Cream is the default canvas — pages are **light**, not white. Terracotta is
  the action/accent color (CTAs, links, rules). Dusty rose is the secondary brand wash
  (blush surfaces, soft fills). Espresso is for ink text and the occasional dark "inverse"
  section. Semantic aliases (`--surface-*`, `--text-*`, `--accent`) are the public API.
- **Imagery color vibe:** warm, slightly desaturated, film-like. Mixed treatments —
  full-color editorial photos *and* high-contrast black-and-white objects, often with a
  bold serif headline boxed in a thin pill outline laid over the image.

### Type
- **Display:** *Gazpacho* — substituted with **Cormorant Garamond** (warm, high-contrast
  elegant serif). Used for headlines, big stat numbers, and editorial moments.
- **Body / UI:** **Montserrat** (exact brand font, geometric sans) for all body, labels,
  buttons and small caps eyebrows.
- **Accent:** a signature **script** (logo's "creative") — substituted with **Sacramento**.
  Decorative only: one accent word per layout, never body, never caps.
- Headlines run tight (`line-height ~1.05`, slight negative tracking); eyebrows are tiny
  uppercase Montserrat with wide tracking (`0.12em`).

### Spacing, radius, elevation
- **Spacing:** 4px base scale (`--space-*`). Generous section padding (`--section-y` up to
  128px) — the brand breathes.
- **Radius:** soft and rounded. Cards `--radius-xl` (28px); CTAs are **pills**
  (`--radius-pill`); the monogram is a full circle. Sharp corners are off-brand.
- **Borders:** thin warm hairlines (`--border-subtle`, 1px) and 1.5px terracotta outlines
  for secondary buttons / pill overlays.
- **Shadows:** soft and *warm-tinted* (espresso-based, never neutral grey). `--shadow-md`
  for resting cards, `--shadow-brand` (terracotta glow) under primary CTAs. Low opacity,
  large blur — diffuse, not crisp.

### Motion & states
- **Motion:** gentle and editorial. Fades and short ease-outs (`--ease-out`,
  ~220ms). **No bounce, no spring, no big slides.** Decorative loops are avoided.
- **Hover:** subtle — slight lift / color deepen (rose→clay, terracotta→darker terracotta).
  Links underline on hover with a 3px offset.
- **Press:** color deepens to `--brand-pressed`; optional 1–2px settle. No dramatic shrink.
- **Focus:** 3px translucent terracotta ring (`--focus-ring`), 2px offset — always visible.

### Layout & backgrounds
- Backgrounds are **flat cream or blush**, occasionally a full-bleed warm photo, or an
  espresso "inverse" band for stats/CTA. **No gradients**, no busy patterns.
- Centered max-width containers (`--container-xl` 1280px) with comfortable gutters.
- Transparency/blur is used sparingly — mainly subtle scrims over photos for text contrast.
- Thin terracotta rules (`.st-rule`, 56×2px) divide editorial sections.

---

## 4. Iconography

Studio T does not ship a proprietary icon font; the live site uses only simple social
glyphs. For product/marketing UI the system standardizes on **[Lucide](https://lucide.dev)**
— thin (≈1.75px), rounded-cap, outline icons that match the refined editorial tone.

- **System (substitution — flagged):** Lucide, linked from CDN in UI kits
  (`https://unpkg.com/lucide@latest`). Stroke `1.75`, `currentColor` so icons inherit text
  color (usually terracotta or espresso). If the client adopts a bespoke set later, swap
  here.
- **Logos / brand marks:** real PNGs in `assets/` (`logo-wordmark.png`,
  `logo-monogram.png`). Use the circular monogram as the favicon / compact mark; the
  wordmark for headers and footers.
- **Social icons:** simple monochrome outline glyphs (Instagram, TikTok, Facebook,
  LinkedIn) — render via Lucide where available, tinted to `--text-muted` / espresso.
- **Emoji:** not used in brand UI. **Unicode** is used only for tiny inline marks where an
  icon font is overkill — the CTA arrow `→`, the select chevron `▾`, the checkbox `✓`.
- **Decorative motif:** small four-point "sparkle/star" accents appear on social templates
  (see `assets/mood-*.png`). Treat as an occasional flourish, not a UI icon.

> Never hand-draw brand illustrations or icons as inline SVG paths — use Lucide or copy a
> real asset.

---

## 5. Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s the token closure only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.

**`tokens/`** (all `@import`ed by `styles.css`)
- `fonts.css` — webfont imports (Cormorant Garamond, Montserrat, Sacramento). *See font note.*
- `colors.css` — base ramps + semantic aliases.
- `typography.css` — families, scale, weights, leading, tracking, roles.
- `spacing.css` — spacing, radii, borders, shadows, motion, layout.
- `base.css` — element resets + helper classes (`.st-eyebrow`, `.st-script`, `.st-display`,
  `.st-container`, `.st-rule`).

**`components/`** (React primitives; consumed via `window.StudioTCreativeDesignSystem_…`)
- `buttons/` — **Button** (primary / secondary / soft / ghost / inverse; sizes; pill/rounded).
- `display/` — **Card**, **Stat**, **Badge**, **Eyebrow**.
- `forms/` — **Input**, **Field**, **Select**, **Checkbox**.

**`ui_kits/`**
- `website/` — Studio T marketing site recreation (`index.html` + screen JSX).

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the
Design System tab.

**`assets/`** — `logo-wordmark.png`, `logo-monogram.png`, `palette-swatches.png`,
`mood-engage.png`, `mood-outdated.png`, `mood-overwhelm.png`, `mood-canva.png`.

---

## ⚠️ Font substitution — needs your input
- **Gazpacho → Cormorant Garamond.** Gazpacho is a licensed retail typeface and can't be
  redistributed. Cormorant Garamond is a close warm high-contrast match. **If you hold a
  Gazpacho web licence, send the `.woff2` files** and we'll swap them into
  `tokens/fonts.css` for pixel-accurate headlines.
- **Signature script → Sacramento** (decorative only). Replaceable the same way.
- **Icons → Lucide** (CDN) as a standardized substitute, since no brand icon set was provided.
