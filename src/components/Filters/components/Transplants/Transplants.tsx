import { GroupCheckboxes } from "./components";
import styles from "./styles.module.css";

export const Transplants = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Количество пересадок</h2>
    <GroupCheckboxes />
  </div>
);
