import React from 'react';

/**
 * Studio T Creative — Badge
 * Small status/category pill.
 */
export function Badge({ children, tone = 'brand', style = {}, ...rest }) {
  const tones = {
    brand:   { bg: 'var(--surface-blush)',  fg: 'var(--terracotta-700)' },
    accent:  { bg: 'var(--terracotta-600)', fg: 'var(--cream-50)' },
    neutral: { bg: 'var(--cream-200)',      fg: 'var(--warm-700)' },
    success: { bg: 'color-mix(in srgb, var(--success) 16%, white)', fg: 'var(--success)' },
    outline: { bg: 'transparent',           fg: 'var(--terracotta-600)' },
  };
  const t = tones[tone];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.fg,
        border: tone === 'outline' ? '1.5px solid var(--border-accent)' : '1.5px solid transparent',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
