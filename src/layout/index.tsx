import type { PropsWithChildren } from "react";
import logo from "src/assets/logo.svg";

import styles from "./styles.module.css";

export const Layout = ({ children }: PropsWithChildren) => (
  <main className={styles.container}>
    <img src={logo} width={200} height={100} alt="logo" />
    <section className={styles.content}>{children}</section>
  </main>
);
