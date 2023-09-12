import { Skeleton, Spin } from "src/components/ui";

import { Ticket } from "./components";
import { useTickets } from "./hooks";
import styles from "./styles.module.css";

export const Tickets = () => {
  const { tickets, isFetching, isLoading } = useTickets();

  if (isFetching) return <Skeleton />;

  if (!tickets.length) return null;

  return (
    <Spin loading={isLoading}>
      <div className={styles.container}>
        {tickets.map((ticket, index) => (
          <Ticket key={index} {...ticket} />
        ))}
      </div>
    </Spin>
  );
};
