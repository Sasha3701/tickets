import type { InputHTMLAttributes } from "react";

export enum CheckboxSize {
  Medium = "medium",
}

type TCheckboxSizes = `${CheckboxSize}`;

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly sizeElement?: TCheckboxSizes;
  readonly classNameContainer?: string;
  readonly classNameCheckmark?: string;
}
