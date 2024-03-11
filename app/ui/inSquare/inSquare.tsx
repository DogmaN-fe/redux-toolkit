"use client";

import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { square } from "@/app/lib/store";
import { ReactElement } from "react";
import styles from "@/app/ui/inSquare/inSquare.module.css";

export default function Square(): ReactElement {
  const count = useAppSelector((state) => state.square.count);
  const dispatch = useAppDispatch();

  const handleSquare = () => dispatch(square(2));

  return (
    <div className={styles.square}>
      <div className={styles.count}>{count}</div>
      <button onClick={handleSquare}>in square</button>
    </div>
  );
}
