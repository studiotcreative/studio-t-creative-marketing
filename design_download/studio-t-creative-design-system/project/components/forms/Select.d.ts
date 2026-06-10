import * as React from 'react';

/** Styled native select with a custom chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Show error styling. @default false */
  invalid?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
