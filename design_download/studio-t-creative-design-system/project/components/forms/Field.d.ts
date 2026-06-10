import * as React from 'react';

/** Label + control wrapper with optional hint / error text. */
export interface FieldProps {
  /** Field label. */
  label?: React.ReactNode;
  /** id of the control the label points at. */
  htmlFor?: string;
  /** Helper text shown below when there's no error. */
  hint?: React.ReactNode;
  /** Error text — replaces hint and turns red. */
  error?: React.ReactNode;
  /** Append a required asterisk. @default false */
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;
