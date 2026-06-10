# Kit Welcome Email — Studio T Resource Hub

Delivers the requested guide and opens a conversation. One template covers every
guide by using the `guide` custom field captured on the form.

## How to wire it in Kit
1. **Grow → Forms →** your "Studio T Resource Hub" form **→ Settings → Incentive email**
   (or build **Automate → Visual Automations:** *Joins form* → *Send email*).
2. Paste the subject + body below. Kit uses Liquid, so the `{{ ... }}` tokens
   personalize automatically.
3. Set the **Download** button to the live PDF on your site, e.g.
   `https://YOUR-DOMAIN.com/resources/turning-followers-into-paying-clients.pdf`
   — or, to serve the exact guide they chose, link to `[DOWNLOAD LINK]` and use a
   per-guide automation. (Simplest start: one form per guide, one incentive email each.)
4. Send yourself a test before publishing.

---

## Subject line (pick one)
1. Your guide is ready, {{ subscriber.first_name | default: "there" }}
2. Here's {{ subscriber.guide | default: "your guide" }}
3. The download you asked for

## Preview text
The framework's inside—plus the one step most brands skip.

---

## Body

Hi {{ subscriber.first_name | default: "there" }},

Here's the guide you asked for—{{ subscriber.guide | default: "your Studio T guide" }}. It's the same thinking we use with clients, written so you can act on it this week.

**[ Download your guide → DOWNLOAD LINK ]**

One note before you dive in. A guide gets you moving. What turns movement into momentum is applying it to your actual brand—your positioning, your audience, your offer. That's the part most businesses skip, and it's where the results live.

So once you've read it, hit reply and tell me one thing: what are you trying to improve right now? I read every response.

We help businesses define their brand, communicate clearly, and build the content and conversion systems that turn attention into action. That approach has delivered [500+] strategies and grown [50+] brands—with an average [250%] lift in brand awareness.

If you'd like that applied directly to your brand, you can get a tailored plan here:

**[ Get a Custom Proposal → PROPOSAL LINK ]**

Either way, enjoy the guide. You'll get the most from it by acting on one section this week instead of all of it someday.

Talk soon,
[YOUR NAME]
Studio T Creative Marketing
hello@studiot-creative.com

---

## Placeholders to fill before sending
- `DOWNLOAD LINK` — the live PDF URL (after you deploy), or a Kit-hosted file
- `PROPOSAL LINK` — your contact/proposal page (e.g. studiot-creative.com/#contact)
- `[YOUR NAME]` — who the email comes from
- Proof figures `[250%] [50+] [500+]` are Studio T's stated numbers from the brand
  handoff—keep, update, or remove to match what you can stand behind today.

## Notes
- `{{ subscriber.guide }}` only fills if you added the `guide` custom field in Kit
  (Subscribers → Custom Fields). Without it, the `default:` fallback shows instead.
- No emoji, closed em-dashes, Title Case subject, sentence-case body — matches the
  Studio T voice in the design system readme.
