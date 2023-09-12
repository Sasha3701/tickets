import logo from "src/assets/logo.svg";

import styles from "./styles.module.css";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <img width={200} height={100} src={logo} alt="logo" />
    </div>
  );
};
