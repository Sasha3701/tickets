import type { ITicket } from "../../Tickets.types";
import { Buy, Info, Logo } from "./components";
import styles from "./styles.module.css";

export const Ticket = ({ price, ...rest }: ITicket) => (
  <div className={styles.container}>
    <Logo />
    <Info {...rest} />
    <Buy price={price} />
  </div>
);
