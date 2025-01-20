import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = (value) => {
    setCount(count + value);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = (value) => {
    setCount((prevCount) => Math.max(0, prevCount - value));
  };

  return (
    <div className={styles.counter}>
      <h1>Compteur: {count}</h1>
      <button className={styles.button} onClick={() => decrement(1)}>-1</button>
      <button className={styles.button} onClick={() => decrement(10)}>-10</button>
      <button className={styles.button} onClick={() => decrement(100)}>-100</button>
      <button className={styles.button} onClick={() => decrement(1000)}>-1000</button>
      <button className={styles.button} onClick={() => decrement(10000)}>-10000</button>
      <button className={styles.button} onClick={reset}>Reset</button>
      <button className={styles.button} onClick={() => increment(1)}>+1</button>
      <button className={styles.button} onClick={() => increment(10)}>+10</button>
      <button className={styles.button} onClick={() => increment(100)}>+100</button>
      <button className={styles.button} onClick={() => increment(1000)}>+1000</button>
      <button className={styles.button} onClick={() => increment(10000)}>+10000</button>
    </div>
  );
}

export default Counter;
