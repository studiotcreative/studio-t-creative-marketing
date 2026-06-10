import * as React from 'react';

/** Small status / category pill. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** Color treatment. @default "brand" */
  tone?: 'brand' | 'accent' | 'neutral' | 'success' | 'outline';
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
