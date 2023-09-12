import queryString from "query-string";
import { CHECKBOX_ALL, checkboxes } from "./GroupCheckboxes.constants";
import type { TCheckboxes } from "./GroupCheckboxes.types";
import { cloneDeepJson } from "src/utils";

const checkStatus = (values: TCheckboxes): TCheckboxes => {
  if (
    values
      .filter(({ value }) => value !== CHECKBOX_ALL.value)
      .every(({ checked }) => checked)
  ) {
    return values.map((item) => ({ ...item, checked: true }));
  }

  return values;
};

export const getDefaultValues = (): TCheckboxes => {
  const queryValues = queryString.parse(location.search);

  const result = checkboxes.map((item) => ({
    ...item,
    checked: !!queryValues.transplants?.includes(item.value),
  }));

  return checkStatus(result);
};

export const getNewUrl = (values: TCheckboxes): string => {
  const queryValues = queryString.parse(location.search);
  queryValues.transplants = values
    .filter(({ checked, value }) => checked && value !== CHECKBOX_ALL.value)
    .map(({ value }) => value);

  return queryString.stringify(queryValues);
};

export const changeStatus = (
  values: TCheckboxes,
  value: string,
): TCheckboxes => {
  const newState = cloneDeepJson(values);

  if (value === CHECKBOX_ALL.value) {
    const currentItem = newState.find((item) => item.value === value);

    if (currentItem) {
      return newState.map((item) => ({
        ...item,
        checked: !currentItem.checked,
      }));
    }
  }

  const currentItem = newState.findIndex((item) => item.value === value);

  if (currentItem !== -1) {
    const itemAll = newState.findIndex(
      (item) => item.value === CHECKBOX_ALL.value,
    );

    newState[itemAll] = {
      ...newState[itemAll],
      checked: false,
    };

    newState[currentItem] = {
      ...newState[currentItem],
      checked: !newState[currentItem].checked,
    };
  }

  return checkStatus(newState);
};
