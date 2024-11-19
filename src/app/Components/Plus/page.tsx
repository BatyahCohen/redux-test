"use client";
import styles from './Plus.module.css'; 
import { useDispatch, useSelector } from "react-redux";
import { incremented } from "@/Store/store";

export default function Plus() {
  const counter = useSelector((state: any) => state.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => dispatch(incremented())}>
        +
      </button>
      <div className={styles.counter}>{counter}</div>
    </div>
  );
}
