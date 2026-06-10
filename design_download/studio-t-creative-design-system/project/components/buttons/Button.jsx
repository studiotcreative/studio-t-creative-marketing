import React from 'react';

/**
 * Studio T Creative — Button
 * Capsule CTA in the brand's warm palette.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  disabled = false,
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: 'var(--text-sm)', gap: '7px' },
    md: { padding: '12px 26px', fontSize: 'var(--text-base)', gap: '9px' },
    lg: { padding: '16px 36px', fontSize: 'var(--text-md)', gap: '11px' },
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid var(--accent)',
      boxShadow: 'var(--shadow-brand)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1.5px solid var(--border-accent)',
      boxShadow: 'none',
    },
    soft: {
      background: 'var(--surface-blush)',
      color: 'var(--terracotta-700)',
      border: '1.5px solid transparent',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1.5px solid transparent',
      boxShadow: 'none',
    },
    inverse: {
      background: 'var(--cream-100)',
      color: 'var(--espresso-900)',
      border: '1.5px solid var(--cream-100)',
      boxShadow: 'var(--shadow-md)',
    },
  };

  const radius = shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)';
  const Tag = as;

  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      data-variant={variant}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes[size].gap,
        width: fullWidth ? '100%' : 'auto',
        padding: sizes[size].padding,
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: sizes[size].fontSize,
        letterSpacing: '0.02em',
        lineHeight: 1,
        borderRadius: radius,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        textDecoration: 'none',
        transition: 'var(--transition-base)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </Tag>
  );
}
