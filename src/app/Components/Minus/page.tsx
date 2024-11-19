"use client";
import styles from './Minus.module.css';
import { decremented } from '@/Store/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Minus() {
  const counter = useSelector((state: any) => state.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => dispatch(decremented())}>
        -
      </button>
      <div className={styles.counter}>{counter}</div>
    </div>
  );
}

