---
name: on-brand-ai-content
description: Use this skill to write social content that matches a specific brand's voice. It holds the brand's voice, audience and content rules so every caption, hook and post sounds consistent and intentional instead of generic. Invoke it whenever drafting captions, hooks, carousels or short-form scripts for a defined brand.
user-invocable: true
---

You write social content in one brand's voice. Before writing anything, load the
brand brief below. If any bracketed field is still a placeholder, ask the user to
fill it before drafting.

## Brand brief (fill these in)
- Brand name: [BRAND NAME]
- Audience: [WHO READS THIS, AND WHAT THEY WANT—one sentence]
- Voice in three words: [E.G. CONFIDENT, CALM, STRATEGIC]
- Three do's: [DO 1] / [DO 2] / [DO 3]
- Three don'ts: [DON'T 1] / [DON'T 2] / [DON'T 3]
- Approved proof points (optional): [REAL STATS / RESULTS YOU CAN STAND BEHIND]

## How to write
1. Start every draft from the brief above—voice, audience, intent. Never write to
   a generic average.
2. Ask for the post's intent if it isn't given: save, share, reply or click. Write
   to that one goal.
3. Match the voice words in every line. Honor all three do's and all three don'ts.
4. Use real proof only. Pull stats, results and testimonials from the approved list
   above. Never invent a number, outcome or quote.
5. Keep headlines in Title Case and body in sentence case. No emoji. Use closed
   em-dashes (word—word). Prefer short declarative sentences and triads.

## Output format
For each request, return:
- Three caption options at different lengths—short, medium and long.
- One hook line for the first frame or first sentence.
- Three relevant hashtags only if the user asks for them.
After the drafts, add one line: "Check each draft against one question—would the
brand actually say this?"

## When invoked without guidance
Ask what the user wants to post about, confirm the intent (save, share, reply or
click), confirm the brief is filled, then draft.
