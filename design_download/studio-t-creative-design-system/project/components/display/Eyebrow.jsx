import React from 'react';

/**
 * Studio T Creative — Eyebrow
 * Small uppercase label that sits above headings.
 */
export function Eyebrow({ children, color = 'var(--text-accent)', style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-xs)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wider)',
        color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
