# Deploying the Studio T Resource Hub

A self-contained static site (HTML + CSS + JS + assets). No build step.

## 1. Install Node (one time)
1. Go to https://nodejs.org → download the **LTS** macOS installer (`.pkg`) → run it.
2. Open a new terminal window and confirm:
   ```bash
   node -v && npm -v
   ```
   Both should print a version number.

## 2. Deploy to Vercel
Deploy from the `landing-page` folder — `index.html` is already at its root, so no
config is needed:
```bash
cd "/Users/andreatanzi_95/Desktop/Claude Code Marketing/landing-page"
npx vercel --prod
```

First run walks you through a few prompts — accept the defaults:
- **Log in** → pick a method, it opens your browser
- *Set up and deploy?* → **Y**
- *Which scope?* → your account
- *Link to existing project?* → **N**
- *Project name?* → Enter (or `studio-t-resource-hub`)
- *In which directory is your code located?* → **`./`**
- *Modify settings?* → **N**

The `Production:` URL it prints at the end is your live link. Re-running
`npx vercel --prod` redeploys the latest files.

> Alternative — deploy the whole repo from the project root instead. A root
> `vercel.json` (serves this folder at the site root) and `.vercelignore`
> (excludes the design bundle + notes) are already configured:
> ```bash
> cd "/Users/andreatanzi_95/Desktop/Claude Code Marketing"
> npx vercel --prod
> ```

## What works the moment it's live (with placeholders)
- ✅ The 3 real PDF downloads (`resources/`) — Turning Followers Into Paying
  Clients, The 30-Day Content Strategy Guide, The Brand Guide Sample.
- ✅ The email form runs in safe fallback mode (logs leads to the browser
  console) until a real Kit form ID is set. Nothing breaks.

## Turn the email capture on (later)
1. Create a free **Kit** (ConvertKit) account → an Inline form named
   "Studio T Resource Hub" → copy its form ID (the number in the form URL).
2. In `resource-hub.js`, set `KIT_FORM_ID = '<your id>'` (top of the
   `submitLead` block).
3. *(Optional)* add Kit Custom Fields `goal` and `guide` to store the dropdown
   and which guide was downloaded.
4. Re-run `npx vercel --prod`.

## Welcome email
`kit-welcome-email.md` holds the on-brand email that delivers the guide. Fill the
`DOWNLOAD LINK`, `PROPOSAL LINK`, and name placeholders, then paste it into Kit's
incentive email / a Visual Automation triggered by the form.

## Add the 2 "Coming soon" guides
Drop the PDF into `resources/` using the filename in `resources/README.md`, then
flip that guide's `ready: false → true` in `resource-hub.js` and redeploy.

## Local preview (optional)
```bash
cd "/Users/andreatanzi_95/Desktop/Claude Code Marketing/landing-page"
python3 -m http.server 4178
# open http://127.0.0.1:4178
```
