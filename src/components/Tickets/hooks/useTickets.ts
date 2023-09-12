import { useCallback, useEffect, useRef, useState } from "react";
import data from "src/data/tickets.json";
import { useLocation } from "react-router-dom";

import type { TTickets } from "../Tickets.types";
import { filterTickets } from "../Tickets.utils";

export const useTickets = (): {
  tickets: TTickets;
  isLoading: boolean;
  isFetching: boolean;
} => {
  const [tickets, setTickets] = useState<TTickets>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const isFirstRender = useRef(true);

  const { search } = useLocation();

  const handleFetchTickets = async () => {
    const tickets = await new Promise<TTickets>((r) =>
      setTimeout(() => r(data.tickets), 2000),
    );
    const ticketsWithFilter = filterTickets(tickets);
    setTickets(ticketsWithFilter);
    setIsFetching(false);
  };

  const handleUpdateTickets = useCallback(async () => {
    setIsLoading(true);
    const tickets = await new Promise<TTickets>((r) =>
      setTimeout(() => r(data.tickets), 2000),
    );
    const ticketsWithFilter = filterTickets(tickets);
    setTickets(ticketsWithFilter);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchTickets();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    handleUpdateTickets();
  }, [search]);

  return { isFetching, isLoading, tickets };
};
