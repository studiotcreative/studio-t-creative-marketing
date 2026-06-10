import React from 'react';

/**
 * Studio T Creative — Card
 * Soft, warm surface container. Supports an optional eyebrow + title header,
 * a media slot, and any children as the body.
 */
export function Card({
  variant = 'surface',
  eyebrow = null,
  title = null,
  media = null,
  padding = 'var(--space-6)',
  children,
  style = {},
  ...rest
}) {
  const variants = {
    surface: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
    blush:   { background: 'var(--surface-blush)', border: '1px solid transparent', boxShadow: 'none' },
    inverse: { background: 'var(--espresso-900)', border: '1px solid transparent', boxShadow: 'var(--shadow-lg)' },
    outline: { background: 'transparent', border: '1.5px solid var(--border-default)', boxShadow: 'none' },
  };
  const inverse = variant === 'inverse';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        color: inverse ? 'var(--cream-100)' : 'var(--text-body)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {media && <div style={{ width: '100%' }}>{media}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding }}>
        {eyebrow && (
          <span style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-2xs)',
            textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)',
            color: inverse ? 'var(--rose-300)' : 'var(--text-accent)',
          }}>{eyebrow}</span>
        )}
        {title && (
          <h3 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)',
            fontSize: 'var(--text-2xl)', lineHeight: 'var(--leading-snug)',
            color: inverse ? 'var(--cream-50)' : 'var(--text-strong)',
          }}>{title}</h3>
        )}
        {children}
      </div>
    </div>
  );
}
