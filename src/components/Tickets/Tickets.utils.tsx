import queryString from "query-string";
import type { TTickets } from "./Tickets.types";

export const filterTickets = (values: TTickets): TTickets => {
  const queryValues = queryString.parse(location.search);

  if (!queryValues.transplants?.length) {
    return values;
  }

  return values.filter(
    ({ stops }) => queryValues.transplants?.includes(String(stops)),
  );
};
