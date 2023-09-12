import classNames from "classnames";
import { ButtonSize, ButtonVariant, type IButtonProps } from "./Button.types";
import styles from "./styles.module.css";

export const Button = ({
  loading = false,
  children,
  className = "",
  size = ButtonSize.Medium,
  variant = ButtonVariant.Orange,
  ...props
}: IButtonProps) => (
  <button
    className={classNames(
      styles.button,
      className,
      styles[`button-${variant}`],
      styles[`button-${size}`],
    )}
    {...props}
  >
    {children}
  </button>
);
