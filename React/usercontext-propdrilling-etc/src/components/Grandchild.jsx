import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

export function Grandchild() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
}
