# Content Engine Diagnostic — Spec / PRD

Built with the **free-tool-builder** skill. Lives at `landing-page/diagnostic/`
(served at `/diagnostic` on the existing Vercel project).

## Purpose & funnel intent (priority-ordered)
1. **Leads** — booked strategy calls (primary conversion).
2. **Editorial data** — clean cross-tabs on how SMBs run content (research instrument).
3. **Demand signal** — interest in a future paid content-engine product.
4. **List** — newsletter / Resource Hub opt-ins (lowest friction).

**Audience:** SMB owners who currently run their OWN social media (not agencies, not
content teams). Every question is framed as "you, posting for your business."

## Instrument design
- **Type:** Diagnostic → strength/gap map + headline verdict (archetype + grade).
- **5 result tiers (lateral, none "best"):** The Storyteller · The Go-To Expert ·
  The Community Builder · The Trendspotter · The Closer.
  (Internal tier keys unchanged: storyteller · educator · connector · amplifier · closer.)
  Each is a legitimate, mature way for an owner to run their own social.
- **5 dimensions × 2 items = 10 scoring items:** strategy, cadence, voice, distribution, conversion.
- **+1 drift/gaming gate** (does not vote a tier): detects **vanity-metric fixation**,
  the known SMB content failure mode. Drift-prone tier = **Amplifier**.
- **Ungameable rule:** every option is the mature expression of its own tier. No troll
  answers, no obvious best. The grade reads the *pattern*, not the answers.

## Scoring (pure module — `js/scoring.js`, unit-tested)
- `primaryTier` = plurality of tier-coded answers (ties broken by tier order).
- `coherence` = primary-tier count / 10 scoring items.
- `dimensionBreadth` = dimensions with ≥1 primary-tier answer / 5.
- `monocultureFlag` = coherence ≥ 0.90 → caps grade at B (too clean = unexamined/gamed).
- `driftFlag` = gate == drift option. `cappingDrift` = driftFlag AND primary == Amplifier →
  caps grade (strong caveat). Drift on any other tier → soft caveat, no cap.
- Grade table (A–F) and dimension sub-grades per PLAYBOOK §1.4–1.5.

## Result-page anatomy (PLAYBOOK §2)
Eyebrow → shareable claim (tier name) → grade row → tagline → narrative (tier shell +
grade delta) → drift caveat (if tripped) → dimension breakdown table → what's next (3) →
funnel block → share affordance. All copy is `[NEEDS_VOICE_REVIEW]` stubs in `content/results.json`.

## Funnel + consent (PLAYBOOK §4)
Tiered opt-ins, none pre-checked, under the verbatim outreach-only consent block:
1. **Book a free strategy call** (primary ask / highest intent).
2. **Notify me about the Content Engine product** (demand signal).
3. **Add me to the Resource Hub list** (lowest friction).
Email + result emerge in the success state; the call link is gated on the primary checkbox.

## Data model (PLAYBOOK §3) — `supabase/migration.sql`
Anon-INSERT-only, split so every endpoint is a pure INSERT (no UPDATE policy):
- `diagnostic_submissions` — one row per completion (responses + computed jsonb).
- `diagnostic_contacts` — email opt-ins linked to a submission + tiered consent flags.
- `diagnostic_events` — funnel telemetry (start, complete, opt-in).

### Editorial cross-tabs we intend to publish (decided BEFORE the schema)
- Distribution of content-operator archetypes across SMBs.
- Average coherence grade per archetype (who runs the tightest engine).
- % of each archetype that trips the vanity-metric gate.
- Per-dimension weak spots by archetype (where each type leaks).

## Storage / delivery wiring
- **Supabase:** browser-direct PostgREST insert with the **publishable anon key**,
  `crypto.randomUUID()` client-side, `Prefer: return=minimal`. Graceful console fallback
  until `SUPABASE_URL` / `SUPABASE_ANON_KEY` are set (mirrors the Kit fallback pattern).
- **Kit:** reuses the Resource Hub's public form endpoint (`KIT_FORM_ID`).

## Out of scope (sibling skills own these)
- Storage/schema provisioning mechanics → lead-magnet skill (SQL prepared here, not applied).
- Visual identity / tokens → inherited from `../styles.css` (never re-declared).
- Deploy mechanics → workspace Vercel pipeline (NOT triggered without owner approval).
- Brand-voice redline → TASTE.md / brand.md pass on the flagged stubs.

## Decisions log
- Tool = Content Engine Diagnostic; storage = Supabase + Kit; funnel = tiered. (owner, 2026-06-24)
- Reframed for SMB owners running their own social; title = "What's Your Social Media Style?";
  result copy voice-redlined to Studio T brand voice (flags removed). (owner, 2026-06-24)
- Tiers are lateral (no maturity ladder) to keep the instrument ungameable.
- Insert direct from browser (static site, no serverless) using the publishable anon key +
  insert-only RLS — consistent with the existing Kit browser-capture pattern.

## Open questions (resolve before voice review / launch)
- Real Supabase project: reuse "Studio T Calendar App" (currently INACTIVE) or new project?
- Strategy-call booking URL (Calendly/etc.) for the primary opt-in payoff. [PLACEHOLDER]
- Kit form ID + any custom fields for `archetype` / `grade`.
