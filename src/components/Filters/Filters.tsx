import { Сurrency, Transplants } from "./components";
import styles from "./styles.module.css";

export const Filters = () => (
  <div className={styles.container}>
    <Сurrency />
    <Transplants />
  </div>
);
