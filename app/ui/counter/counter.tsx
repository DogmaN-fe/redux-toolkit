"use client";

import { ReactElement } from "react";
import { minus, plus } from "@/app/lib/counter";
import { useDispatch } from "react-redux";
import styles from "@/app/ui/counter/counter.module.css";
import { AppDispatch, useAppSelector } from "@/app/lib/store";

export default function Counter(): ReactElement {
  const count = useAppSelector((state) => state.counterSlice.count);
  const dispatch = useDispatch<AppDispatch>();

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
