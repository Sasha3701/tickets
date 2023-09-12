import { HTMLAttributes } from "react";

export enum ButtonVariant {
  Orange = "orange",
}

type TButtonVariants = `${ButtonVariant}`;

export enum ButtonSize {
  Medium = "medium",
}

type TButtonSizes = `${ButtonSize}`;

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  readonly loading?: boolean;
  readonly variant?: TButtonVariants;
  readonly size?: TButtonSizes;
}
