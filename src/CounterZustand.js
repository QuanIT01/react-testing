import React from "react";
import { useCounterStore } from "./counterStore";

const CounterZustand = () => {
  const { increment, decrement, count } = useCounterStore();
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment
        </button>
        <span role="contentinfo">{count}</span>
        <button aria-label="Decrement value" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterZustand;
