# Landing Page Brief — Studio T Creative Resource Hub

- **Brand:** Studio T Creative Marketing — Strategic Brand Growth agency
- **Niche:** Creative + social media management for SMBs across niches
- **Page type:** Lead-magnet / resource hub (email capture for free guide downloads)
- **Key outcome:** Capture name + email of potential clients in exchange for free marketing resources
- **Audience:** Founders & marketers at small-to-medium businesses who want clarity, consistency, and measurable momentum
- **CTA:** "Download free" → lead-capture modal → guide delivered to inbox

## Resources offered (lead magnets)
Real downloads (live):
1. Turning Followers Into Paying Clients (featured) — `turning-followers-into-paying-clients.pdf`
2. The 30-Day Content Strategy Guide — `30-day-content-strategy-guide.pdf`
3. The Brand Guide Sample — `brand-guide-sample.pdf`
Coming soon (placeholder, email still captured):
4. The Conversion Audit Checklist
5. Brand Voice Cheat Sheet

## Voice Profile
Confident, calm, strategic — a senior partner with a system, not a hype merchant.
Speaks to "you", team is "we". Title Case headlines, sentence-case body.
Proof over adjectives (250%, 50+, 500+). Triads. Closed em-dashes. No emoji, no hype words.

## Design source
Studio T Creative Design System handoff:
`design_download/studio-t-creative-design-system/`
Palette: cream #FBF6EE, dusty rose #C39483, terracotta #87472D, espresso ink #261C15.
Fonts: Gazpacho (real .otf) / Cormorant Garamond display + Montserrat body.

## Tool Preferences
- Deploy: Vercel MCP (connected). No local Node.
- Email capture: Kit (ConvertKit) wired in resource-hub.js `submitLead` via the browser-safe public form endpoint (form ID only, no API key). Paste your form ID into `KIT_FORM_ID` (top of submitLead block) to go live; falls back to console logging until then. Optional Kit custom fields `goal` + `guide` capture the dropdown and which guide was downloaded.

## Build status
- Static page built at `landing-page/` (index.html + styles.css + resource-hub.js + assets/). Verified locally on :4178, all assets + 3 PDFs serve 200.
- 3 real PDFs wired (followers, content, brand guide). 2 placeholders "Coming soon".
- Deploy config ready at repo root: `vercel.json` (serves landing-page at site root) + `.vercelignore` (excludes design_download, .claude, briefs).
- Deploy BLOCKED in this environment: no Node/npx/vercel CLI/git available. Vercel MCP only returns a CLI command, it doesn't upload.
- Node v24.16.0 LTS installed user-local at ~/.local/node-current (PATH in ~/.zshrc).
- Deployed from landing-page/ via `npx vercel deploy --prod --yes`. Team: studio-ts-projects.
- LIVE URL: https://landing-page-black-ten-44.vercel.app  (deployment alias)
- Redeploy after edits: `cd landing-page && npx vercel deploy --prod --yes`
