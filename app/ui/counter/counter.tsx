"use client";

import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { minus, plus } from "@/app/lib/store";
import { ReactElement } from "react";
import styles from "@/app/ui/counter/counter.module.css";

export default function Counter(): ReactElement {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handlePlus = () => dispatch(plus(1));
  const handleMinus = () => dispatch(minus(1));

  return (
    <div className={styles.counter}>
      <div className={styles.count}>{count}</div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handlePlus}>
          Plus
        </button>
        <button className={styles.button} onClick={handleMinus}>
          Minus
        </button>
      </div>
    </div>
  );
}
