import * as React from 'react';

/** Custom checkbox with terracotta fill when checked. */
export interface CheckboxProps {
  /** Checked state. @default false */
  checked?: boolean;
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Label rendered beside the box. */
  label?: React.ReactNode;
  /** Disable interaction. @default false */
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
