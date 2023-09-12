import classNames from "classnames";
import type { ISwitcherProps } from "./Switcher.types";
import styles from "./styles.module.css";
import { memo } from "react";

export const Switcher = memo(
  ({ onChange, values, value, className = "" }: ISwitcherProps) => {
    if (!values.length) return null;

    return (
      <div className={classNames(styles.container, className)}>
        {values.map((item) => (
          <button
            onClick={() => onChange(item)}
            className={classNames(styles.button, {
              [styles.buttonActive]: value.value === item.value,
            })}
            key={item.value}
          >
            {item.title}
          </button>
        ))}
      </div>
    );
  },
);

Switcher.displayName = "Switcher";
