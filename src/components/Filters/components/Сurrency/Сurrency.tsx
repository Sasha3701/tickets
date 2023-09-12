import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switcher } from "src/components/ui";

import { getNewUrl, getDefaultValue } from "./Сurrency.utils";
import { currencies } from "./Сurrency.constants";
import type { TValue } from "./Сurrency.types";
import styles from "./styles.module.css";

export const Сurrency = () => {
  const [currency, setСurrency] = useState<TValue>(() => getDefaultValue());
  const isFirstRender = useRef(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    navigate({ search: getNewUrl(currency) });
  }, [currency]);

  const handleChange = useCallback((value: TValue) => setСurrency(value), []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Валюта</h2>
      <Switcher onChange={handleChange} values={currencies} value={currency} />
    </div>
  );
};
