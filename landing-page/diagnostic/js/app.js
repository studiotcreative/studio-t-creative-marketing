/* ============================================================
   Content Engine Diagnostic — UI controller
   - loads the item set + result copy (module-relative, routing-safe)
   - runs the step flow, calls the PURE scoring module
   - renders the result, then the tiered funnel under the consent contract
   - wires storage (Supabase anon-INSERT) + Kit, both with console fallback
   ============================================================ */
import { scoreTool } from './scoring.js';

/* ---- Config ----------------------------------------------------------------
   Supabase URL + anon key are publishable by design (the data is protected by
   insert-only RLS, not by hiding the key). Kit form is the shared Resource Hub
   form. If any value is reset to a placeholder, that channel falls back to a
   console log so preview keeps working.
-------------------------------------------------------------------------- */
const SUPABASE_URL = 'https://lalrfkwrldlxvdedvplg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhbHJma3dybGRseHZkZWR2cGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyODM2ODksImV4cCI6MjA5Nzg1OTY4OX0.YkJS54hzsfyibP76oj8onw8T1LFRa6fXA7-xv7TV3_E';
const KIT_FORM_ID = '9547215'; // shared Studio T Resource Hub form
const CALL_URL = 'https://www.studiot-creative.com/#contact'; // strategy-call / contact link

const supabaseReady = SUPABASE_URL.startsWith('http') && !SUPABASE_ANON_KEY.startsWith('YOUR_');
const kitReady = KIT_FORM_ID && KIT_FORM_ID !== 'YOUR_FORM_ID';

/* ---- State ---- */
const app = document.getElementById('diag-app');
const sessionId = crypto.randomUUID();
let QUESTIONS = [];
let RESULTS = null;
let answers = {};
let index = 0;          // -1 = intro, 0..N-1 = steps
let submissionId = null;

/* ---- Module-relative content load (PATTERNS §3): robust to /diagnostic vs /diagnostic/ ---- */
async function loadContent() {
  const [qRes, rRes] = await Promise.all([
    fetch(new URL('../content/questions.json', import.meta.url)),
    fetch(new URL('../content/results.json', import.meta.url)),
  ]);
  if (!qRes.ok) throw new Error(`questions ${qRes.status}`);
  if (!rRes.ok) throw new Error(`results ${rRes.status}`);
  const q = await qRes.json();
  QUESTIONS = q.questions;
  QUESTIONS.meta = q.meta;
  RESULTS = await rRes.json();
}

/* ---- tiny non-PII UA bucket (not security; just coarse analytics) ---- */
function uaHash() {
  const s = navigator.userAgent || '';
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
  return String(h >>> 0);
}

/* ---- Storage: every call a pure INSERT, return=minimal, server-safe fallback ---- */
async function logEvent(eventType, metadata = {}) {
  if (!supabaseReady) { console.log('[Diagnostic] event', eventType, metadata); return; }
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/diagnostic_events`, {
      method: 'POST',
      headers: sbHeaders(),
      body: JSON.stringify({ id: crypto.randomUUID(), session_id: sessionId, event_type: eventType, metadata }),
    });
  } catch (err) { console.warn('[Diagnostic] event failed', err); }
}

async function logSubmission(responses, computed) {
  const id = crypto.randomUUID();
  if (!supabaseReady) { console.log('[Diagnostic] SUBMISSION (Supabase not configured)', { id, responses, computed }); return id; }
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/diagnostic_submissions`, {
      method: 'POST',
      headers: sbHeaders(),
      body: JSON.stringify({
        id, session_id: sessionId, responses, computed,
        referrer: document.referrer || null, user_agent_hash: uaHash(),
      }),
    });
    if (!r.ok) console.warn('[Diagnostic] submission responded', r.status);
  } catch (err) { console.error('[Diagnostic] submission failed', err); }
  return id;
}

async function logContact(contact) {
  if (!supabaseReady) { console.log('[Diagnostic] CONTACT (Supabase not configured)', contact); return; }
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/diagnostic_contacts`, {
      method: 'POST', headers: sbHeaders(), body: JSON.stringify({ id: crypto.randomUUID(), ...contact }),
    });
  } catch (err) { console.error('[Diagnostic] contact failed', err); }
}

function sbHeaders() {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    Prefer: 'return=minimal', // representation needs a SELECT policy this table doesn't grant
  };
}

/* ---- Kit (reuses the Resource Hub public-form pattern) ---- */
async function submitToKit(email, name, archetype, grade) {
  if (!kitReady) { console.log('[Diagnostic] KIT lead (not configured)', { email, name, archetype, grade }); return; }
  try {
    const body = new URLSearchParams();
    body.set('email_address', email);
    if (name) body.set('first_name', name.split(' ')[0]);
    body.set('fields[archetype]', archetype);
    body.set('fields[grade]', grade);
    await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
      method: 'POST', headers: { Accept: 'application/json' }, body,
    });
  } catch (err) { console.error('[Diagnostic] Kit submit failed', err); }
}

/* ---- Render: intro ---- */
function renderIntro() {
  const m = QUESTIONS.meta;
  app.innerHTML = `
    <div class="diag-intro">
      <span class="eyebrow">Free · 3 minutes · no obvious right answers</span>
      <h1>${m.title}</h1>
      <p class="lede">${m.subtitle}</p>
      <div class="diag-meta-row">
        <span>◆ 11 questions</span><span>◆ 5 social media styles</span><span>◆ Instant result</span>
      </div>
      <div class="diag-note">${m.note}</div>
      <button class="btn btn-primary btn-lg" id="diag-start">Start the diagnostic <span aria-hidden="true">→</span></button>
    </div>`;
  document.getElementById('diag-start').addEventListener('click', () => {
    logEvent('start');
    index = 0; renderStep();
  });
}

/* ---- Render: one step ---- */
function renderStep() {
  const q = QUESTIONS[index];
  const total = QUESTIONS.length;
  const pct = Math.round((index / total) * 100);
  const dimLabel = q.type === 'gate' ? 'One honest read' : q.dimension.replace(/^\w/, (c) => c.toUpperCase());
  const opts = q.options.map((o, i) => {
    const val = q.type === 'gate' ? o.value : o.tier;
    const pressed = answers[q.id] === val ? 'true' : 'false';
    // gate options can share a value; track selection by option index instead
    const selectedIdx = answers[`${q.id}__idx`];
    const isSel = q.type === 'gate' ? selectedIdx === i : answers[q.id] === val;
    return `
      <button class="diag-opt" data-val="${val}" data-idx="${i}" aria-pressed="${isSel ? 'true' : 'false'}">
        <span class="diag-opt-mark"></span>
        <span class="diag-opt-label">${o.label}</span>
      </button>`;
  }).join('');

  app.innerHTML = `
    <div class="diag-card">
      <div class="diag-progress">
        <div class="diag-progress-meta"><span>Question ${index + 1} of ${total}</span><span>${pct}%</span></div>
        <div class="diag-progress-track"><div class="diag-progress-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="diag-step">
        <div class="diag-dim-tag">${dimLabel}</div>
        <h2 class="diag-q">${q.prompt}</h2>
        <div class="diag-options">${opts}</div>
        <div class="diag-nav">
          <button class="diag-back" ${index === 0 ? 'disabled' : ''} id="diag-back">← Back</button>
          <span></span>
        </div>
      </div>
    </div>`;

  app.querySelectorAll('.diag-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      answers[q.id] = btn.dataset.val;
      answers[`${q.id}__idx`] = Number(btn.dataset.idx);
      app.querySelectorAll('.diag-opt').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      setTimeout(advance, 220);
    });
  });
  const back = document.getElementById('diag-back');
  if (back) back.addEventListener('click', () => { if (index > 0) { index--; renderStep(); } });
}

function advance() {
  if (index < QUESTIONS.length - 1) { index++; renderStep(); }
  else finish();
}

/* ---- Finish → score → result ---- */
async function finish() {
  const responses = {};
  for (const q of QUESTIONS) responses[q.id] = answers[q.id];
  const result = scoreTool(responses);
  await logEvent('complete', { tier: result.tier, grade: result.grade });
  submissionId = await logSubmission(responses, result);
  renderResult(result);
}

/* ---- Render: result ---- */
function renderResult(r) {
  const tier = RESULTS.tiers[r.tier];
  const delta = RESULTS.gradeDelta[r.grade];
  const gradeLabel = RESULTS.gradeLabel[r.grade];

  let caveatHTML = '';
  if (r.cappingDrift) {
    const c = RESULTS.caveats.strong;
    caveatHTML = `<div class="diag-caveat"><div class="diag-caveat-label">${c.label}</div><p>${c.body}</p></div>`;
  } else if (r.driftFlag) {
    const c = RESULTS.caveats.soft;
    caveatHTML = `<div class="diag-caveat"><div class="diag-caveat-label">${c.label}</div><p>${c.body}</p></div>`;
  }

  const breakdown = Object.entries(r.dimensionGrades).map(([dim, g]) =>
    `<div class="diag-bd-row"><span class="diag-bd-dim">${dim}</span><span class="diag-bd-grade">${g}</span></div>`).join('');

  const next = tier.whatsNext.map((n) => `<li>${n}</li>`).join('');
  const shareText = encodeURIComponent(`My social media style is ${tier.name}—coherence grade ${r.grade}. What's yours?`);
  const shareUrl = encodeURIComponent(location.href);

  app.innerHTML = `
    <div class="diag-result">
      <span class="eyebrow">Your result</span>
      <h1 class="diag-claim">${tier.name}</h1>
      <div class="diag-grade-row">
        <span class="diag-grade">${r.grade}</span>
        <span class="diag-grade-label">Coherence grade · ${gradeLabel}</span>
      </div>
      <p class="diag-tagline">${tier.tagline}</p>
      <div class="diag-card">
        <div class="diag-narrative"><p>${tier.shell}</p><p>${delta}</p></div>
        ${caveatHTML}
        <div class="diag-breakdown">
          <h3>How each part of your engine scored</h3>
          ${breakdown}
        </div>
        <div class="diag-next">
          <h3>What's next</h3>
          <ul>${next}</ul>
        </div>
      </div>
      ${funnelHTML(r, tier)}
      <div class="diag-share">
        <a class="btn btn-secondary btn-md" target="_blank" rel="noopener"
           href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}">Share your result</a>
        <button class="btn btn-secondary btn-md" id="diag-restart">Retake the diagnostic</button>
      </div>
    </div>`;

  document.getElementById('diag-restart').addEventListener('click', () => {
    answers = {}; index = 0; submissionId = null; renderIntro();
  });
  wireFunnel(r, tier);
}

/* ---- Funnel + consent (PLAYBOOK §4 — consent block verbatim) ---- */
function funnelHTML(r) {
  return `
    <div class="diag-funnel" id="diag-funnel">
      <h3>Want help turning this into growth?</h3>
      <p>You're running your own social—and doing more than most. Studio T Creative helps small and medium businesses turn that effort into consistent, measurable growth. We'd love to walk through your result with you on one short, no-pitch call.</p>
      <form id="diag-optin-form">
        <div class="diag-field">
          <label class="diag-flabel" for="diag-name">First name</label>
          <input class="input" id="diag-name" name="name" placeholder="Jordan" autocomplete="given-name">
        </div>
        <div class="diag-field">
          <label class="diag-flabel" for="diag-email">Email <span aria-hidden="true">*</span></label>
          <input class="input" id="diag-email" name="email" type="email" required placeholder="you@company.com" autocomplete="email">
        </div>
        <div class="diag-optins">
          <label class="diag-check"><input type="checkbox" name="call">
            <span>Book a free strategy call to walk through my result.<small>The highest-value option — a real conversation, no pitch.</small></span></label>
          <label class="diag-check"><input type="checkbox" name="product">
            <span>Notify me when the Content Engine product is ready.<small>We're building it. Tell us you'd want it.</small></span></label>
          <label class="diag-check"><input type="checkbox" name="list">
            <span>Add me to the Resource Hub list.<small>Occasional guides and playbooks. Unsubscribe anytime.</small></span></label>
        </div>
        <div class="diag-consent">
          <strong>What we'll do with your information:</strong> We use it to reach out to you
          about this conversation — nothing else. We will <strong>never</strong> publish, quote,
          or attribute your diagnostic responses or anything you share without your explicit,
          written permission. If you choose to be featured later, that's a separate conversation
          we'll have with you directly.
        </div>
        <button class="btn btn-primary btn-lg btn-full" type="submit">Send my result &amp; stay in touch</button>
      </form>
      <div class="diag-success" id="diag-success" hidden></div>
    </div>`;
}

function wireFunnel(r, tier) {
  const form = document.getElementById('diag-optin-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('diag-email').value.trim();
    const name = document.getElementById('diag-name').value.trim();
    if (!email) return;
    const wantsCall = form.call.checked;
    const contact = {
      submission_id: submissionId, email, name: name || null,
      archetype: r.tier, grade: r.grade,
      wants_strategy_call: wantsCall,
      wants_product_news: form.product.checked,
      wants_resource_list: form.list.checked,
      consent_to_outreach: true,
    };
    await Promise.all([
      logContact(contact),
      logEvent('optin', { call: wantsCall, product: form.product.checked, list: form.list.checked }),
      submitToKit(email, name, r.tier, r.grade),
    ]);

    const box = document.getElementById('diag-success');
    box.hidden = false;
    box.innerHTML = wantsCall
      ? `<strong>You're in.</strong> Here's the booking link for your strategy call — grab a time that works:
         <p style="margin:.6em 0 0"><a class="btn btn-primary btn-md" href="${CALL_URL}" target="_blank" rel="noopener">Book your call →</a></p>`
      : `<strong>Thanks${name ? `, ${name.split(' ')[0]}` : ''}.</strong> Your result is saved and we'll be in touch. Want to go deeper now? <a href="${CALL_URL}" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">Book a strategy call →</a>`;
    form.querySelector('button[type="submit"]').disabled = true;
  });
}

/* ---- init ---- */
loadContent()
  .then(renderIntro)
  .catch((err) => {
    console.error(err);
    app.innerHTML = `<div class="diag-loading">The diagnostic could not load. Please refresh.</div>`;
  });
