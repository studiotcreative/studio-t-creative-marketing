import * as React from 'react';

/** Small uppercase eyebrow label that sits above a heading. */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** Text color. @default "var(--text-accent)" */
  color?: string;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
