/* ============================================================
   Studio T Creative — Resource Hub behaviour
   - renders the library grid
   - opens a lead-capture modal per guide
   - captures the lead, then reveals the download
   ============================================================ */

/* ---- Guide data ----------------------------------------------------------
   `file`  → path to the downloadable asset under resources/. Drop the real
             PDF at that path to make the download live.
   `ready` → true once the file exists. Placeholders stay false until then.
-------------------------------------------------------------------------- */
const GUIDES = [
  {
    id: 'followers', tone: 'terracotta', category: 'Growth',
    title: 'Turning Followers Into Paying Clients',
    blurb: 'The path from a passive audience to booked, paying clients — without burning the trust you built.',
    meta: 'Free PDF guide',
    file: 'resources/turning-followers-into-paying-clients.pdf', ready: true,
  },
  {
    id: 'content', tone: 'rose', category: 'Content',
    title: 'The 30-Day Content Strategy Guide',
    blurb: 'A 30-day plan to post with intention instead of scrambling for ideas every morning.',
    meta: 'Free PDF guide',
    file: 'resources/30-day-content-strategy-guide.pdf', ready: true,
  },
  {
    id: 'brandguide', tone: 'espresso', category: 'Brand',
    title: 'The Brand Guide Sample',
    blurb: 'See how we set colors, type, logos and mood into one clear brand board you can actually follow.',
    meta: 'Free PDF · brand board',
    file: 'resources/brand-guide-sample.pdf', ready: true,
  },
  {
    id: 'conversion', tone: 'blush', category: 'Growth',
    title: 'The Conversion Audit Checklist',
    blurb: 'A walkthrough of the fixes that turn attention into action across your funnel.',
    meta: 'Coming soon',
    file: 'resources/conversion-audit-checklist.pdf', ready: false,
  },
  {
    id: 'voice', tone: 'rose', category: 'Brand',
    title: 'Brand Voice Cheat Sheet',
    blurb: 'One page that keeps every caption and email sounding like you.',
    meta: 'Coming soon',
    file: 'resources/brand-voice-cheat-sheet.pdf', ready: false,
  },
];

const byId = (id) => GUIDES.find((g) => g.id === id);

/* ---- Render the library grid (guides 2..n) ---- */
function coverHTML(g, big) {
  return `
    <div class="cover ${big ? 'big ' : ''}tone-${g.tone}">
      <div class="cover-top">
        <span class="cover-kicker">Studio T · Free Guide</span>
        <img class="cover-mono" src="assets/logo-monogram.png" alt="">
      </div>
      <div>
        <div class="cover-rule"></div>
        <h3>${g.title}</h3>
        <p class="cover-meta">${g.meta}</p>
      </div>
    </div>`;
}

function renderLibrary() {
  const grid = document.getElementById('library-grid');
  grid.innerHTML = GUIDES.slice(1).map((g) => `
    <article>
      ${coverHTML(g)}
      <div class="meta">
        <span class="badge ${g.ready ? 'badge-outline' : 'badge-neutral'}">${g.ready ? g.category : 'Coming soon'}</span>
        <p class="blurb">${g.blurb}</p>
        <button class="dl-link" data-guide="${g.id}">${g.ready ? 'Download free' : 'Get notified'} <span aria-hidden="true">${g.ready ? '↓' : '→'}</span></button>
      </div>
    </article>`).join('');
}

/* ---- Lead capture -------------------------------------------------------
   Wired for Kit (formerly ConvertKit) — https://kit.com

   Uses Kit's public form-subscription endpoint, which is browser-safe: it
   takes only your FORM ID, never your secret API key. New subscribers land in
   the form you create, where Kit's automations / sequences / tags take over.

   SETUP (one time):
   1. Create a free account at https://kit.com
   2. Grow → Landing Pages & Forms → New → an "Inline" form named
      "Studio T Resource Hub". Save & publish it.
   3. Find the form ID — it's the number in the form's URL/embed snippet, e.g.
      https://app.kit.com/forms/1234567/edit  →  KIT_FORM_ID = '1234567'.
   4. (Optional) To store the dropdown + which guide they grabbed, add two
      Custom Fields in Kit named exactly `goal` and `guide`
      (Subscribers → Custom Fields). Without them, name + email still save.
   5. Paste the ID into KIT_FORM_ID below and redeploy.

   Until a real ID is set, the function falls back to logging the lead to the
   browser console so preview keeps working.

   Prefer Formspree instead? Swap the fetch for:
     fetch(`https://formspree.io/f/<ID>`, { method:'POST',
       headers:{'Content-Type':'application/json', Accept:'application/json'},
       body: JSON.stringify({ name: lead.name, email: lead.email,
         goal: lead.goal, guide: lead.guide }) });
-------------------------------------------------------------------------- */
const KIT_FORM_ID = 'YOUR_FORM_ID'; // ← paste your Kit form ID here (e.g. '1234567')

async function submitLead(lead) {
  // Not configured yet → log to console so preview still works.
  if (!KIT_FORM_ID || KIT_FORM_ID === 'YOUR_FORM_ID') {
    console.log('[Studio T Resource Hub] LEAD (Kit not configured — set KIT_FORM_ID):', lead);
    return true;
  }
  try {
    // Kit's public endpoint accepts form-encoded data from the browser.
    const body = new URLSearchParams();
    body.set('email_address', lead.email);
    if (lead.name) body.set('first_name', lead.name.split(' ')[0]);
    if (lead.goal) body.set('fields[goal]', lead.goal);
    if (lead.guide) body.set('fields[guide]', lead.guide);

    const res = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
    });
    if (!res.ok) console.warn('[Studio T Resource Hub] Kit responded', res.status);
    return res.ok;
  } catch (err) {
    // Never block the download on a network hiccup.
    console.error('[Studio T Resource Hub] Lead submit failed:', err);
    return false;
  }
}

/* ---- Modal ---- */
const modal = document.getElementById('modal');
const leadForm = document.getElementById('lead-form');
const leadSuccess = document.getElementById('lead-success');
let activeGuide = null;

function openModal(id) {
  activeGuide = byId(id);
  if (!activeGuide) return;
  document.getElementById('modal-cover').innerHTML = coverHTML(activeGuide, true);
  document.getElementById('modal-title').textContent = activeGuide.title;
  leadForm.hidden = false;
  leadSuccess.hidden = true;
  leadForm.reset();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('lm-name').focus(), 30);
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  activeGuide = null;
}

modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.getElementById('modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* delegate all "Download free" triggers */
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-guide]');
  if (trigger) { e.preventDefault(); openModal(trigger.getAttribute('data-guide')); }
});

/* modal form submit → capture lead → reveal download */
leadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const g = activeGuide;
  const lead = {
    name: document.getElementById('lm-name').value.trim(),
    email: document.getElementById('lm-email').value.trim(),
    goal: document.getElementById('lm-improve').value,
    guide: g ? g.title : '',
  };
  await submitLead(lead);

  const firstName = lead.name.split(' ')[0] || 'friend';
  document.getElementById('success-title').textContent = `Check your inbox, ${firstName}.`;
  document.getElementById('success-body').innerHTML =
    g.ready
      ? `We just sent <strong>${g.title}</strong> to ${lead.email}. Grab it now:`
      : `You're on the list for <strong>${g.title}</strong>. We'll email it to ${lead.email} the moment it's ready.`;

  const dl = document.getElementById('success-download');
  if (g.ready) {
    dl.hidden = false;
    dl.href = g.file;
    dl.setAttribute('download', '');
    dl.innerHTML = `Download the ${g.meta.split('·')[0].trim()} <span aria-hidden="true">↓</span>`;
  } else {
    dl.hidden = true;
  }

  leadForm.hidden = true;
  leadSuccess.hidden = false;
});

/* ---- Hero inline email → unlock state ---- */
const heroForm = document.getElementById('hero-form');
heroForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = heroForm.querySelector('input[name="email"]').value.trim();
  if (!email) return;
  await submitLead({ name: '', email, goal: '', guide: 'Hero — full library unlock' });
  heroForm.hidden = true;
  document.getElementById('hero-unlocked').hidden = false;
  document.getElementById('hdr-badge').style.display = 'inline-flex';
});

/* ---- AI Content Kit form → capture lead → redirect to delivery page ----
   Deliberately separate from the modal flow: this form has no `data-guide`
   attribute, so the global [data-guide] click delegate never fires on it.
   The redirect is not gated on submitLead() — in console-fallback mode it
   resolves true immediately, and a real Kit hiccup is swallowed there too,
   so the visitor always reaches the deliverable. -------------------------- */
const kitForm = document.getElementById('kit-form');
if (kitForm) {
  kitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = kitForm.querySelector('input[name="name"]').value.trim();
    const email = kitForm.querySelector('input[name="email"]').value.trim();
    if (!email) return;
    await submitLead({ name, email, goal: 'AI Content', guide: 'On-Brand AI Content Kit' });
    const first = (name.split(' ')[0] || '').trim();
    const qs = first ? `?name=${encodeURIComponent(first)}` : '';
    window.location.href = `content-kit.html${qs}`;
  });
}

/* ---- init ---- */
renderLibrary();
