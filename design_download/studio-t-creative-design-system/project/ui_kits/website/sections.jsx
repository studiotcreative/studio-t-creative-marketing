/* Studio T Creative — Website UI kit: page sections */
const DSx = window.StudioTCreativeDesignSystem_34f7c6;

function Hero({ onNav }) {
  const { Button, Eyebrow } = DSx;
  return (
    <section style={{ background: 'var(--cream-100)', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'clamp(56px,8vw,104px) var(--gutter)',
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center',
      }}>
        <div>
          <Eyebrow>Strategic Brand Growth Partner</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(48px,6vw,84px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '18px 0 0' }}>
            Strategic<br />Brand <span style={{ fontStyle: 'italic', color: 'var(--terracotta-600)' }}>Growth</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 460, margin: '24px 0 0' }}>
            For businesses that need clarity, consistency, and measurable momentum. We help you
            define your brand, communicate clearly, and build content and conversion systems that
            turn attention into action.
          </p>
          <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" rightIcon={<span>→</span>} onClick={() => onNav('Contact')}>Get a Custom Proposal</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav('Services')}>View Services</Button>
          </div>
        </div>
        <div style={{ position: 'relative', justifySelf: 'center' }}>
          <div style={{
            width: 'min(380px,80vw)', aspectRatio: '4/5', borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)', background: 'var(--blush-200)',
          }}>
            <img src="../../assets/mood-overwhelm.png" alt="Studio T editorial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <img src="../../assets/logo-monogram.png" alt="" style={{
            position: 'absolute', bottom: -26, left: -26, width: 96, height: 96, borderRadius: '50%',
            boxShadow: 'var(--shadow-lg)', border: '4px solid var(--cream-100)',
          }} />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { name: 'Brand Foundation', img: 'mood-canva.png', desc: 'Positioning, identity & messaging that give every touchpoint a clear, consistent base.' },
  { name: 'Content Engine', img: 'mood-engage.png', desc: 'A structured, repeatable system that keeps you publishing with intention.' },
  { name: 'Growth & Conversion', img: 'mood-outdated.png', desc: 'Funnels and touchpoints engineered to turn attention into measurable action.' },
  { name: 'Campaign Production Studio', img: 'mood-overwhelm.png', desc: 'Photo, video and campaign production that brings the strategy to life.' },
];

function Services({ onNav }) {
  const { Eyebrow } = DSx;
  return (
    <section id="services" style={{ background: 'var(--cream-50)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Eyebrow>What we do</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(34px,4vw,52px)', color: 'var(--ink)', margin: '12px 0 0', letterSpacing: '-0.02em' }}>Services</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {SERVICES.map((s) => (
            <a key={s.name} href="#" onClick={(e) => { e.preventDefault(); onNav('Services'); }}
               className="svc-tile"
               style={{ textDecoration: 'none', display: 'block', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--surface-card)', boxShadow: 'var(--shadow-md)', transition: 'var(--transition-base)' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img src={`../../assets/${s.img}`} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '21px', color: 'var(--text-strong)', margin: '0 0 8px', lineHeight: 1.15 }}>{s.name}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  ['250%', 'Increase in brand awareness for clients who use our system'],
  ['20+', 'Years of combined experience crafting stories that connect'],
  ['50+', 'Happy clients who partnered with us to bring their vision to life'],
  ['500+', 'Strategies delivered — every one designed to win'],
];

function StatsBand() {
  const { Stat } = DSx;
  return (
    <section style={{ background: 'var(--espresso-900)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'clamp(48px,6vw,80px) var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '32px' }}>
        {STATS.map(([v, l]) => <Stat key={v} value={v} label={l} tone="cream" />)}
      </div>
    </section>
  );
}

function About() {
  const { Eyebrow } = DSx;
  return (
    <section style={{ background: 'var(--cream-100)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>
        <Eyebrow>About Studio T</Eyebrow>
        <hr className="st-rule" style={{ margin: '18px auto' }} />
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: 1.3, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
          We're a Strategic Brand Growth Partner for businesses ready to grow with more clarity,
          stronger positioning, and a more intentional presence.
        </p>
        <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-body)', marginTop: '24px' }}>
          Through our systems, we turn scattered marketing efforts into one aligned growth approach
          designed to create consistency, strengthen trust, and generate meaningful business momentum —
          so visibility connects directly to action.
        </p>
      </div>
    </section>
  );
}

const CLIENTS = ['Restaurante Alma', 'Motores Dryft', 'Chimo El Tigrito', 'West Plaza', 'Ninguna Cultura', 'Estudio Rosalba'];
function Clients() {
  const { Eyebrow } = DSx;
  return (
    <section style={{ background: 'var(--cream-50)', padding: 'clamp(48px,6vw,80px) 0', borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 'var(--container-lg)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>
        <Eyebrow color="var(--text-muted)">Trusted by brands we've grown</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '16px', marginTop: '28px' }}>
          {CLIENTS.map((c) => (
            <div key={c} style={{
              aspectRatio: '1', borderRadius: '50%', background: 'var(--cream-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px',
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '13px', lineHeight: 1.2,
              color: 'var(--terracotta-600)', textAlign: 'center', border: '1px solid var(--hairline)',
            }}>{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { Eyebrow, Field, Input, Select, Button } = DSx;
  const { useState } = React;
  const [improve, setImprove] = useState('Brand Identity');
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" style={{ background: 'var(--rose-400)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ background: 'var(--cream-50)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 'clamp(32px,5vw,56px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Eyebrow>Let's chat!</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px,3.4vw,46px)', color: 'var(--ink)', margin: '12px 0 8px', letterSpacing: '-0.02em' }}>Start a conversation</h2>
            <a href="mailto:hello@studiot-creative.com" style={{ fontSize: '15px', color: 'var(--terracotta-600)' }}>hello@studiot-creative.com</a>
          </div>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '24px', fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--terracotta-600)' }}>
              Thank you — we'll be in touch within one business day.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Field label="What are you trying to improve?" htmlFor="improve">
                <Select id="improve" value={improve} onChange={(e) => setImprove(e.target.value)}>
                  <option>Brand Identity</option>
                  <option>Content System</option>
                  <option>Marketing Strategy</option>
                  <option>Not sure</option>
                </Select>
              </Field>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <Field label="Full Name" htmlFor="fn" required><Input id="fn" placeholder="Jordan Rivera" /></Field>
                <Field label="Email" htmlFor="em" required><Input id="em" type="email" placeholder="you@company.com" /></Field>
              </div>
              <Button variant="primary" size="lg" fullWidth onClick={() => setSent(true)}>Submit</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { STHero: Hero, STServices: Services, STStatsBand: StatsBand, STAbout: About, STClients: Clients, STContact: Contact });
