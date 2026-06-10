import React from 'react';

/**
 * Studio T Creative — Field
 * Label + control wrapper with optional hint / error text.
 */
export function Field({ label, htmlFor, hint, error, required = false, children, style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label && (
        <label
          htmlFor={htmlFor}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-strong)',
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--accent)', marginLeft: '3px' }}>*</span>}
        </label>
      )}
      {children}
      {(hint || error) && (
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-xs)',
          color: error ? 'var(--error)' : 'var(--text-muted)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
