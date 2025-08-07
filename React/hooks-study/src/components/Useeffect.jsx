import React, { useEffect, useState } from "react";

export function MyComponent() {
  useEffect(() => {
    console.log("component mounted");
  }, []);
  return <div>Hello!</div>;
}

export function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ran");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Trial2() {
  const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div>
      <p>Increased {counter} times </p>
    </div>
  );
}

export default Trial2;
