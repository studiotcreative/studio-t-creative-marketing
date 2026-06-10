import * as React from 'react';

/**
 * Primary call-to-action button in the Studio T Creative system.
 * Warm capsule CTA — use `primary` (terracotta fill) for the main action,
 * `secondary` (outline) for alternates, `inverse` on dark surfaces.
 *
 * @startingPoint section="Core" subtitle="Capsule CTA — primary, secondary, soft, ghost, inverse" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost' | 'inverse';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Corner style. @default "pill" */
  shape?: 'pill' | 'rounded';
  /** Stretch to fill container width. @default false */
  fullWidth?: boolean;
  /** Element/icon rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Element/icon rendered after the label. */
  rightIcon?: React.ReactNode;
  /** Disable interaction. @default false */
  disabled?: boolean;
  /** Render as a different element, e.g. "a". @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
