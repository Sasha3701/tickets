export const cloneDeepJson = <T>(value: T): T => {
  const newStateJson = JSON.stringify(value);
  return JSON.parse(newStateJson);
};

export const formatToCurrency = (value: number, currency?: string) => {
  const options = { style: "currency", currency: currency || "RUB" };
  const numberFormat = new Intl.NumberFormat("ru-RU", options);

  return numberFormat.format(value);
};
