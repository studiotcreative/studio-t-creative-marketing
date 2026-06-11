# Downloadable resources

Files here are served as the guide downloads. A guide's "Download" button only
appears once its `ready` flag is `true` in `../resource-hub.js`.

## Live now (real downloads — `ready: true`)
| Guide | File |
|---|---|
| Turning Followers Into Paying Clients (featured) | `turning-followers-into-paying-clients.pdf` ✅ |
| The 30-Day Content Strategy Guide | `30-day-content-strategy-guide.pdf` ✅ |
| The Brand Guide Sample | `brand-guide-sample.pdf` ✅ |

## Coming soon (placeholder — `ready: false`)
Add the PDF below, then flip that guide's `ready: false → true` in `resource-hub.js`.
| Guide | Expected filename |
|---|---|
| The Conversion Audit Checklist | `conversion-audit-checklist.pdf` |
| Brand Voice Cheat Sheet | `brand-voice-cheat-sheet.pdf` |

While a guide is "coming soon," the lead modal still captures the email and tells
the visitor it'll be sent when ready.

## Lead magnet (not a library guide)
| Asset | File |
|---|---|
| On-Brand AI Content Kit — Claude skill | `on-brand-ai-content-kit.SKILL.md` ✅ |

Served as a download from `../content-kit.html` (the kit's dedicated delivery page),
not from the library grid. The `kit-form` on `index.html` captures the lead, then
redirects to that page. This file is plain-text Markdown; the download attribute
saves it as `SKILL.md`.
