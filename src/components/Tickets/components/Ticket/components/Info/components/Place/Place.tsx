import dayjs from "dayjs";

import styles from "./styles.module.css";

import "dayjs/locale/ru";

dayjs.locale("ru");

interface IProps {
  readonly date: string;
  readonly time: string;
  readonly name: string;
  readonly shortName: string;
}

export const Place = ({ date, name, shortName, time }: IProps) => (
  <div className={styles.container}>
    <span className={styles.time}>{time}</span>
    <div className={styles.place}>
      <span>{shortName}</span>,<span>{name}</span>
    </div>
    <span>{dayjs(date, "DD.MM.YY").format("D MMMM YYYY").toLowerCase()}</span>
  </div>
);
