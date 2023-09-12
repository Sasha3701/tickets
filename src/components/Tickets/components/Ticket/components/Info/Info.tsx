import type { ITicket } from "src/components/Tickets/Tickets.types";

import styles from "./styles.module.css";
import { Arrow, Place } from "./components";

export const Info = ({
  arrival_date,
  arrival_time,
  departure_date,
  departure_time,
  destination,
  destination_name,
  origin,
  origin_name,
  carrier,
  stops,
}: Omit<ITicket, "price">) => (
  <div className={styles.container}>
    <Place
      date={departure_date}
      time={departure_time}
      name={origin_name}
      shortName={origin}
    />
    <Arrow carrier={carrier} stops={stops} />
    <Place
      date={arrival_date}
      time={arrival_time}
      name={destination_name}
      shortName={destination}
    />
  </div>
);
