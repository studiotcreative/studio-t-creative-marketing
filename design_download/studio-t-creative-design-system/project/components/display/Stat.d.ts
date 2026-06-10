import * as React from 'react';

/**
 * Large display-serif metric with a caption — used in results / proof bands
 * (e.g. "250% increase in brand awareness").
 *
 * @startingPoint section="Core" subtitle="Big-number metric with caption" viewport="700x200"
 */
export interface StatProps {
  /** The headline figure, e.g. "250%" or "50+". */
  value: React.ReactNode;
  /** Supporting caption beneath the figure. */
  label: React.ReactNode;
  /** Text alignment. @default "left" */
  align?: 'left' | 'center';
  /** Color of the figure. @default "accent" */
  tone?: 'accent' | 'ink' | 'cream' | 'rose';
  style?: React.CSSProperties;
}
export function Stat(props: StatProps): JSX.Element;
