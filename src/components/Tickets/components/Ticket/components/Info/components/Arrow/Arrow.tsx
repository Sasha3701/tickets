import airplane from "src/assets/airplane.svg";

import styles from "./styles.module.css";

interface IProps {
  readonly carrier: string;
  readonly stops: number;
}

export const Arrow = ({ carrier, stops }: IProps) => (
  <div className={styles.container}>
    {!!stops && (
      <span className={styles.text}>{`${stops} ${
        stops === 1 ? "пересадка" : "пересади"
      }`}</span>
    )}
    <div className={styles.img}>
      <hr />
      <img className={styles.icon} src={airplane} />
    </div>
    <span className={styles.text}>{carrier}</span>
  </div>
);
