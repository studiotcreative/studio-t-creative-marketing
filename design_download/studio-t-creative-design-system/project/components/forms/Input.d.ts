import * as React from 'react';

/** Text input with warm borders and terracotta focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Show error styling. @default false */
  invalid?: boolean;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
