# Studio T Creative — Marketing Workspace

Creative and social media management workspace for Studio T Creative.
Source of truth for the Resource Hub landing page, the design system handoff,
and campaign briefs.

## What's here

| Path | What it is |
|---|---|
| `landing-page/` | Resource Hub lead-gen page (email capture for free guide downloads). The deployable site. |
| `design_download/` | Design system handoff (tokens, components, UI kits). Not deployed. |
| `landing-page-brief.md` | Running context for the landing page. |
| `CLAUDE.md` | Operating instructions for the marketing operator. |

## Deploy

The repo is connected to Vercel (project **`landing-page`**, team **Studio T's projects**)
with GitHub auto-deploy. The Vercel project's **Root Directory is set to `landing-page`**,
so the site is served straight from that folder (no rewrites). Everything outside
`landing-page/` (design system, briefs) lives in the repo but is not deployed.

- **Push to `main`** → production deploy.
- **Open a pull request / push any branch** → automatic preview deployment with its own URL.

Live production: https://landing-page-black-ten-44.vercel.app

### Manual deploy (fallback)

```bash
cd "Claude Code Marketing"
npx vercel deploy --prod --yes --scope studio-ts-projects
```

## Local preview

```bash
cd landing-page
python3 -m http.server 4178
# open http://127.0.0.1:4178
```
