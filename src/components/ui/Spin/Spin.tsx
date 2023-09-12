import type { ISpinProps } from "./Spin.types";
import styles from "./styles.module.css";

export const Spin = ({ children, loading }: ISpinProps) => (
  <div className={styles.wrapper}>
    {loading && (
      <div className={styles.container}>
        <div className={styles.loader}></div>
      </div>
    )}
    {children}
  </div>
);
