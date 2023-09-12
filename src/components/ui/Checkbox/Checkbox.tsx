import classNames from "classnames";
import { CheckboxSize, type ICheckboxProps } from "./Checkbox.types";
import styles from "./styles.module.css";

export const Checkbox = ({
  children,
  sizeElement = CheckboxSize.Medium,
  classNameCheckmark = "",
  classNameContainer = "",
  ...props
}: ICheckboxProps) => (
  <label className={classNames(styles.container, classNameContainer)}>
    {children}
    <input type="checkbox" {...props} />
    <span
      className={classNames(
        styles.checkmark,
        styles[`checkmark-${sizeElement}`],
        classNameCheckmark,
      )}
    ></span>
  </label>
);
