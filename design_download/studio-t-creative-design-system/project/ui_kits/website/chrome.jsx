/* Studio T Creative — Website UI kit: Header & Footer */
const DS = window.StudioTCreativeDesignSystem_34f7c6;

function Header({ onNav, active }) {
  const { Button } = DS;
  const links = ['Home', 'Services', 'Resource Hub', 'Portfolio', 'Case Studies'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in srgb, var(--cream-100) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto',
        padding: '14px var(--gutter)', display: 'flex', alignItems: 'center', gap: '28px',
      }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); onNav('Home'); }}
           style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="../../assets/logo-monogram.png" alt="Studio T" style={{ width: 44, height: 44, borderRadius: '50%' }} />
        </a>
        <nav style={{ display: 'flex', gap: '26px', flex: 1 }}>
          {links.map((l) => (
            <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNav(l); }}
               style={{
                 fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500,
                 letterSpacing: '0.01em', textDecoration: 'none',
                 color: active === l ? 'var(--terracotta-600)' : 'var(--text-body)',
                 paddingBottom: '2px',
                 borderBottom: active === l ? '2px solid var(--terracotta-600)' : '2px solid transparent',
               }}>{l}</a>
          ))}
        </nav>
        <Button variant="primary" size="sm" onClick={() => onNav('Contact')}>Get a Custom Proposal</Button>
      </div>
    </header>
  );
}

function Footer({ onNav }) {
  const socials = ['Instagram', 'TikTok', 'Facebook', 'LinkedIn'];
  return (
    <footer style={{ background: 'var(--espresso-900)', color: 'var(--cream-200)' }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '56px var(--gutter) 40px',
        display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', alignItems: 'flex-start',
      }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', color: 'var(--cream-50)', fontWeight: 500, lineHeight: 1.1 }}>
            studio T <span style={{ fontFamily: 'var(--font-script)', color: 'var(--rose-300)', fontSize: '26px' }}>creative</span>
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.6, marginTop: '14px', color: 'var(--cream-300)' }}>
            Strategic Brand Growth for businesses that need clarity, consistency, and measurable momentum.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--rose-300)', marginBottom: '14px', fontWeight: 600 }}>Services</div>
            {['Brand Foundation', 'Content Engine', 'Growth & Conversion', 'Campaign Production Studio'].map((s) => (
              <a key={s} href="#" onClick={(e) => { e.preventDefault(); onNav('Services'); }}
                 style={{ display: 'block', fontSize: '14px', color: 'var(--cream-200)', textDecoration: 'none', marginBottom: '9px' }}>{s}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--rose-300)', marginBottom: '14px', fontWeight: 600 }}>Connect</div>
            <a href="mailto:hello@studiot-creative.com" style={{ display: 'block', fontSize: '14px', color: 'var(--cream-200)', textDecoration: 'none', marginBottom: '14px' }}>hello@studiot-creative.com</a>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s) => (
                <span key={s} title={s} style={{
                  width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--warm-500)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--cream-200)',
                }}>
                  <i data-lucide={s.toLowerCase()} style={{ width: 16, height: 16 }}></i>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid color-mix(in srgb, var(--cream-200) 18%, transparent)', padding: '18px var(--gutter)', maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <span style={{ fontSize: '12px', color: 'var(--warm-400)' }}>© 2026 Studio T Creative Marketing. All rights reserved.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { STHeader: Header, STFooter: Footer });
