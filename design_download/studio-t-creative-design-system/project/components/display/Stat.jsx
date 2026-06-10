import React from 'react';

/**
 * Studio T Creative — Stat
 * Large display-serif metric with caption. Used in proof/results bands.
 */
export function Stat({ value, label, align = 'left', tone = 'accent', style = {}, ...rest }) {
  const tones = {
    accent: 'var(--terracotta-600)',
    ink: 'var(--text-strong)',
    cream: 'var(--cream-100)',
    rose: 'var(--rose-400)',
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-5xl)',
          lineHeight: 1,
          letterSpacing: 'var(--tracking-tight)',
          color: tones[tone],
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-sm)',
          lineHeight: 'var(--leading-normal)',
          color: tone === 'cream' ? 'var(--cream-200)' : 'var(--text-muted)',
          maxWidth: '22ch',
        }}
      >
        {label}
      </span>
    </div>
  );
}
