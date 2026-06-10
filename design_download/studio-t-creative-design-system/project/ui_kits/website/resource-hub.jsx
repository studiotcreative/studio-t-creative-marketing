/* Studio T Creative — Resource Hub landing page sections */
const DSr = window.StudioTCreativeDesignSystem_34f7c6;
const { useState, useEffect } = React;

/* ---------- Guide data ---------- */
const GUIDES = [
  {
    id: 'clarity', featured: true, category: 'Brand', tone: 'terracotta',
    title: 'The Brand Clarity Workbook',
    blurb: 'Define your positioning, voice and visual direction in a single focused weekend.',
    meta: 'PDF · 24-page workbook',
    inside: ['A 6-part positioning canvas', 'Voice & tone worksheet with examples', 'A one-page brand summary template'],
  },
  {
    id: 'content', category: 'Content', tone: 'rose',
    title: 'Content Engine Starter Kit',
    blurb: '30 days of post prompts plus a plug-and-play content calendar.',
    meta: 'Notion + PDF template',
  },
  {
    id: 'conversion', category: 'Growth', tone: 'espresso',
    title: 'The Conversion Audit Checklist',
    blurb: '25 fixes that turn attention into action across your funnel.',
    meta: 'PDF · 12 pages',
  },
  {
    id: 'social', category: 'Social', tone: 'blush',
    title: 'Social Refresh Field Guide',
    blurb: 'Modernize an outdated feed in seven deliberate moves.',
    meta: 'PDF · 16 pages',
  },
  {
    id: 'voice', category: 'Brand', tone: 'rose',
    title: 'Brand Voice Cheat Sheet',
    blurb: 'One page that keeps every caption and email sounding like you.',
    meta: 'PDF · 1 page',
  },
];

const TONES = {
  terracotta: { bg: 'var(--terracotta-600)', fg: 'var(--cream-50)', sub: 'var(--blush-200)' },
  rose:       { bg: 'var(--rose-400)',       fg: 'var(--cream-50)', sub: 'var(--cream-100)' },
  espresso:   { bg: 'var(--espresso-900)',   fg: 'var(--cream-50)', sub: 'var(--rose-300)' },
  blush:      { bg: 'var(--blush-200)',      fg: 'var(--terracotta-700)', sub: 'var(--terracotta-600)' },
};

/* ---------- Typographic guide cover ---------- */
function GuideCover({ guide, big = false }) {
  const t = TONES[guide.tone];
  return (
    <div style={{
      aspectRatio: big ? '4/5' : '3/4', width: '100%', background: t.bg, color: t.fg,
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: big ? '30px' : '20px', overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: big ? '11px' : '9px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85 }}>Studio T · Free Guide</span>
        <img src="../../assets/logo-monogram.png" alt="" style={{ width: big ? 40 : 30, height: big ? 40 : 30, borderRadius: '50%' }} />
      </div>
      <div>
        <div style={{ width: 36, height: 2, background: t.sub, marginBottom: big ? 16 : 10 }}></div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: big ? 'clamp(28px,3vw,40px)' : '20px', lineHeight: 1.06, margin: 0, letterSpacing: '-0.01em' }}>{guide.title}</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: big ? '13px' : '10.5px', color: t.sub, margin: big ? '12px 0 0' : '7px 0 0', lineHeight: 1.4 }}>{guide.meta}</p>
      </div>
    </div>
  );
}

/* ---------- Header ---------- */
function RHeader({ unlocked }) {
  const { Button, Badge } = DSr;
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'color-mix(in srgb, var(--cream-100) 90%, transparent)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '14px var(--gutter)', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img src="../../assets/logo-monogram.png" alt="Studio T" style={{ width: 42, height: 42, borderRadius: '50%' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)' }}>Resource Hub</span>
        <div style={{ flex: 1 }}></div>
        {unlocked && <Badge tone="success">Library unlocked</Badge>}
        <a href="index.html" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--text-body)', textDecoration: 'none' }}>← Back to site</a>
        <Button variant="primary" size="sm" as="a" href="#library">Browse Guides</Button>
      </div>
    </header>
  );
}

/* ---------- Hero with inline lead capture ---------- */
function RHero({ onUnlock, unlocked }) {
  const { Eyebrow, Button, Input } = DSr;
  const [email, setEmail] = useState('');
  return (
    <section style={{ background: 'var(--cream-100)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'clamp(48px,7vw,96px) var(--gutter)', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <div>
          <Eyebrow>Free Resource Hub</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(42px,5.4vw,76px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '18px 0 0' }}>
            Steal our <span style={{ fontStyle: 'italic', color: 'var(--terracotta-600)' }}>growth</span> playbooks.
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 480, margin: '22px 0 0' }}>
            Strategy workbooks, content systems and conversion checklists — the exact frameworks
            we use with clients. Drop your email once and the whole library is yours.
          </p>
          {unlocked ? (
            <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Button variant="primary" size="lg" as="a" href="#library" rightIcon={<span>→</span>}>Browse the library</Button>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--success)' }}>✓ You're in — download anything below.</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) onUnlock(email); }}
              style={{ marginTop: '30px', display: 'flex', gap: '12px', maxWidth: 480, flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 240px' }}>
                <Input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
              </div>
              <Button variant="primary" size="md" type="submit">Unlock the library</Button>
            </form>
          )}
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', marginTop: '14px' }}>
            Join <strong style={{ color: 'var(--text-body)' }}>2,500+</strong> founders & marketers. No spam — unsubscribe anytime.
          </p>
        </div>
        <div style={{ position: 'relative', justifySelf: 'center' }}>
          <div style={{ width: 'min(400px,82vw)', aspectRatio: '3/4', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', background: 'var(--blush-200)' }}>
            <img src="../../assets/photo-phone.jpg" alt="Reading on phone" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: -24, left: -28, width: 'min(180px,42vw)', transform: 'rotate(-5deg)' }}>
            <GuideCover guide={GUIDES[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured guide ---------- */
function FeaturedGuide({ onGet }) {
  const { Eyebrow, Button, Badge } = DSr;
  const g = GUIDES[0];
  return (
    <section style={{ background: 'var(--cream-50)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-lg)', margin: '0 auto', padding: '0 var(--gutter)', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
        <div style={{ maxWidth: 320, justifySelf: 'center', width: '100%' }}>
          <GuideCover guide={g} big />
        </div>
        <div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
            <Badge tone="accent">Most popular</Badge>
            <Badge tone="neutral">{g.category}</Badge>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px,3.6vw,48px)', color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.05 }}>{g.title}</h2>
          <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--text-body)', margin: '18px 0 0', maxWidth: 520 }}>{g.blurb}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {g.inside.map((i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--terracotta-600)', fontWeight: 700, lineHeight: 1.5 }}>✓</span>{i}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '30px', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onGet(g)} rightIcon={<span>↓</span>}>Download free</Button>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)' }}>{g.meta}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Library grid ---------- */
function Library({ onGet }) {
  const { Eyebrow, Badge } = DSr;
  const items = GUIDES.slice(1);
  return (
    <section id="library" style={{ background: 'var(--cream-100)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Eyebrow>Download anything</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(34px,4vw,52px)', color: 'var(--ink)', margin: '12px 0 0', letterSpacing: '-0.02em' }}>The library</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
          {items.map((g) => (
            <article key={g.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <GuideCover guide={g} />
              <div style={{ padding: '18px 2px 0' }}>
                <Badge tone="outline">{g.category}</Badge>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-body)', margin: '14px 0 14px' }}>{g.blurb}</p>
                <button onClick={() => onGet(g)} style={{
                  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '14px', color: 'var(--terracotta-600)',
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                }}>Download free <span aria-hidden="true">↓</span></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Proof band ---------- */
function ProofBand() {
  const { Stat, Eyebrow } = DSr;
  return (
    <section style={{ background: 'var(--espresso-900)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'clamp(48px,6vw,80px) var(--gutter)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', aspectRatio: '3/2' }}>
          <img src="../../assets/photo-duo-studio.jpg" alt="The Studio T team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <Eyebrow color="var(--rose-300)">Not generic templates</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px,3.2vw,42px)', color: 'var(--cream-50)', margin: '12px 0 24px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
            Every guide is pulled from real client work.
          </h2>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <Stat value="250%" label="Avg. lift in brand awareness" tone="cream" />
            <Stat value="50+" label="Brands grown with these systems" tone="rose" />
            <Stat value="500+" label="Strategies delivered" tone="cream" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  const { Button, Eyebrow } = DSr;
  return (
    <section style={{ background: 'var(--rose-400)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>
        <Eyebrow color="var(--cream-50)">Ready for the real thing?</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(32px,4vw,54px)', color: 'var(--cream-50)', margin: '14px 0 16px', letterSpacing: '-0.02em', lineHeight: 1.08 }}>
          Want a growth plan built for your brand?
        </h2>
        <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--cream-100)', maxWidth: 520, margin: '0 auto 30px' }}>
          The guides get you moving. A custom strategy gets you momentum. Tell us what you're
          trying to improve and we'll send a tailored proposal.
        </p>
        <Button variant="inverse" size="lg" as="a" href="index.html#contact" rightIcon={<span>→</span>}>Get a Custom Proposal</Button>
      </div>
    </section>
  );
}

/* ---------- Lead capture modal ---------- */
function LeadModal({ guide, onClose, onComplete }) {
  const { Field, Input, Select, Button, Badge } = DSr;
  const [done, setDone] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  if (!guide) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--scrim)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--cream-50)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', width: 'min(880px,100%)', maxHeight: '92vh', overflow: 'auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr' }}>
        <div style={{ background: 'var(--cream-200)', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 'min(220px,60vw)' }}><GuideCover guide={guide} big /></div>
        </div>
        <div style={{ padding: 'clamp(28px,4vw,44px)', position: 'relative' }}>
          <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 18, right: 20, background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: 'var(--text-muted)', lineHeight: 1 }}>×</button>
          {done ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center' }}>
              <Badge tone="success">Ready to download</Badge>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '30px', color: 'var(--ink)', margin: 0, lineHeight: 1.1 }}>Check your inbox, {name.split(' ')[0] || 'friend'}.</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                We just sent <strong>{guide.title}</strong> to {email || 'your email'}. Grab it now:
              </p>
              <Button variant="primary" size="lg" onClick={() => alert('Demo: ' + guide.title + ' would download here.')} rightIcon={<span>↓</span>}>Download the {guide.meta.split('·')[0].trim()}</Button>
              <a href="index.html#contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--terracotta-600)' }}>Or book a custom strategy call →</a>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); onComplete(guide); }} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terracotta-600)' }}>Free download</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(24px,3vw,32px)', color: 'var(--ink)', margin: '8px 0 4px', lineHeight: 1.08 }}>{guide.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Tell us where to send it — that's the only catch.</p>
              </div>
              <Field label="Full Name" htmlFor="lm-name" required><Input id="lm-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Rivera" required /></Field>
              <Field label="Email" htmlFor="lm-email" required><Input id="lm-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required /></Field>
              <Field label="What are you trying to improve?" htmlFor="lm-improve">
                <Select id="lm-improve" defaultValue="Brand Identity">
                  <option>Brand Identity</option><option>Content System</option><option>Marketing Strategy</option><option>Not sure</option>
                </Select>
              </Field>
              <Button variant="primary" size="lg" type="submit" fullWidth>Send me the guide</Button>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-subtle)', margin: 0, textAlign: 'center' }}>By downloading you agree to receive occasional emails from Studio T. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { RH: { RHeader, RHero, FeaturedGuide, Library, ProofBand, FinalCTA, LeadModal, GUIDES } });
