import queryString from "query-string";
import { Button } from "src/components/ui";
import { formatToCurrency } from "src/utils";

import styles from "./styles.module.css";

interface IProps {
  readonly price: number;
}

export const Buy = ({ price }: IProps) => {
  const currency = (
    queryString.parse(location.search).currency as string
  )?.toUpperCase();

  const handleBuy = () => alert("Билет куплен!");

  return (
    <div className={styles.container}>
      <Button onClick={handleBuy} className={styles.button}>
        Купить за {formatToCurrency(price, currency)}
      </Button>
    </div>
  );
};
