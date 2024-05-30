"use client";

import { AppDispatch, square, useAppSelector } from "@/app/lib/store";
import { ReactElement } from "react";
import styles from "@/app/ui/inSquare/inSquare.module.css";
import { useDispatch } from "react-redux";

export default function Square(): ReactElement {
  const count = useAppSelector((state) => state.square.count);
  const dispatch = useDispatch<AppDispatch>();

  const handleSquare = () => dispatch(square(2));

  return (
    <div className={styles.square}>
      <div className={styles.count}>{count}</div>
      <button onClick={handleSquare}>in square</button>
    </div>
  );
}
