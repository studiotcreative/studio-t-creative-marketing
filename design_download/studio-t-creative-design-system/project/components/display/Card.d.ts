import * as React from 'react';

/**
 * Soft, warm surface container with optional eyebrow + title header and media slot.
 *
 * @startingPoint section="Core" subtitle="Content card — surface, blush, inverse, outline" viewport="700x320"
 */
export interface CardProps {
  /** Surface treatment. @default "surface" */
  variant?: 'surface' | 'blush' | 'inverse' | 'outline';
  /** Optional uppercase eyebrow above the title. */
  eyebrow?: React.ReactNode;
  /** Optional display-serif title. */
  title?: React.ReactNode;
  /** Optional media element rendered flush at the top (image, etc). */
  media?: React.ReactNode;
  /** Inner padding. @default "var(--space-6)" */
  padding?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
