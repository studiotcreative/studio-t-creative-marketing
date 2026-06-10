import React from 'react';

/**
 * Studio T Creative — Input
 * Text field with warm borders and terracotta focus.
 */
export function Input({ invalid = false, size = 'md', style = {}, ...rest }) {
  const sizes = {
    sm: { padding: '9px 13px', fontSize: 'var(--text-sm)' },
    md: { padding: '13px 16px', fontSize: 'var(--text-base)' },
    lg: { padding: '16px 18px', fontSize: 'var(--text-md)' },
  };
  return (
    <input
      style={{
        width: '100%',
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-strong)',
        background: 'var(--surface-card)',
        border: `1.5px solid ${invalid ? 'var(--error)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        transition: 'var(--transition-base)',
        ...sizes[size],
        ...style,
      }}
      onFocus={(e) => { if (!invalid) e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
      onBlur={(e) => { e.target.style.borderColor = invalid ? 'var(--error)' : 'var(--border-default)'; e.target.style.boxShadow = 'none'; }}
      {...rest}
    />
  );
}
