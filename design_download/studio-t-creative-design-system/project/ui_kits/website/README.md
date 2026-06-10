# Website UI Kit — Studio T Creative

High-fidelity recreation of the Studio T Creative marketing site
(https://www.studiot-creative.com/), composed entirely from the design-system tokens and
component primitives.

## Files
- `index.html` — the assembled, interactive homepage. Open this. Nav scrolls to sections;
  the contact form has a working submit state.
- `chrome.jsx` — `STHeader`, `STFooter`.
- `sections.jsx` — `STHero`, `STServices`, `STStatsBand`, `STAbout`, `STClients`, `STContact`.

## Composition
Uses `Button`, `Stat`, `Eyebrow`, `Field`, `Input`, `Select` from
`window.StudioTCreativeDesignSystem_34f7c6` (the compiled `_ds_bundle.js`). Sections mirror
the live IA: Hero → Services (4 pillars) → Stats band → About → Clients → "Let's chat!"
contact → Footer.

## Notes / placeholders
- **Service-tile & hero photography** uses the brand mood images from `assets/` as
  stand-ins — the live site's Wix-hosted editorial photos were not provided. Swap in real
  shots when available.
- **Client logos** are rendered as text placeholders (real client wordmarks weren't
  supplied). Names are taken from the live site.
- Icons via Lucide (CDN).
