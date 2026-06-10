import React from 'react';

/**
 * Studio T Creative — Checkbox
 * Custom checkbox with terracotta fill when checked.
 */
export function Checkbox({ checked = false, onChange, label, disabled = false, style = {}, ...rest }) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: '20px',
          height: '20px',
          flex: 'none',
          borderRadius: 'var(--radius-xs)',
          border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--accent)' : 'var(--surface-card)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--cream-50)',
          fontSize: '12px',
          lineHeight: 1,
          transition: 'var(--transition-base)',
        }}
      >
        {checked && '✓'}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      {label}
    </label>
  );
}
