import React from 'react';

/**
 * Studio T Creative — Select
 * Styled native select with custom chevron.
 */
export function Select({ invalid = false, children, style = {}, ...rest }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select
        style={{
          width: '100%',
          appearance: 'none',
          WebkitAppearance: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          color: 'var(--text-strong)',
          background: 'var(--surface-card)',
          border: `1.5px solid ${invalid ? 'var(--error)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '13px 42px 13px 16px',
          outline: 'none',
          cursor: 'pointer',
          transition: 'var(--transition-base)',
          ...style,
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
        onBlur={(e) => { e.target.style.borderColor = invalid ? 'var(--error)' : 'var(--border-default)'; e.target.style.boxShadow = 'none'; }}
        {...rest}
      >
        {children}
      </select>
      <span style={{
        position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
        pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '12px',
      }}>▾</span>
    </div>
  );
}
