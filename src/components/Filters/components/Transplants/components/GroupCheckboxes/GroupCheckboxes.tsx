import { useEffect, useRef, useState } from "react";
import { Checkbox } from "src/components/ui";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import {
  changeStatus,
  getNewUrl,
  getDefaultValues,
} from "./GroupCheckboxes.utils";
import type { TCheckboxes } from "./GroupCheckboxes.types";

export const GroupCheckboxes = () => {
  const [values, setValues] = useState<TCheckboxes>(() => getDefaultValues());
  const isFirstRender = useRef(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    navigate({ search: getNewUrl(values) });
  }, [values]);

  const handleChange = (value: string) =>
    setValues((prevState) => changeStatus(prevState, value));

  return (
    <div className={styles.container}>
      {values.map(({ label, value, checked }) => (
        <Checkbox
          classNameContainer={styles.checkbox}
          classNameCheckmark={styles.checkmark}
          key={value}
          onChange={() => handleChange(value)}
          checked={checked}
        >
          {label}
        </Checkbox>
      ))}
    </div>
  );
};
