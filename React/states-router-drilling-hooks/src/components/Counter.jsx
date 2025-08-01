import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>You clicked {count} times</p> <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br /> <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
