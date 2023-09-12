import queryString from "query-string";
import { currencies } from "./Сurrency.constants";
import type { TValue } from "./Сurrency.types";

export const getDefaultValue = (): TValue => {
  const queryValues = queryString.parse(location.search);

  if (queryValues.currency) {
    return (
      currencies.find(({ value }) => value === queryValues.currency) ||
      currencies[0]
    );
  }

  return currencies[0];
};

export const getNewUrl = (value: TValue) => {
  const queryValues = queryString.parse(location.search);
  queryValues.currency = String(value.value);

  return queryString.stringify(queryValues);
};
