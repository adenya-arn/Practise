import React, { useState } from "react";

function LiveInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name || "stranger"} </p>
    </div>
  );
}

export default LiveInput;
