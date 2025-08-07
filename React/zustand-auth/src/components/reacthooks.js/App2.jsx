import React, { useState } from "react";

const App2 = () => {
  const array = useState(0);
  const counter = array[0];
  console.log(array);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button>Increase</button>
    </div>
  );
};

export default App2;
