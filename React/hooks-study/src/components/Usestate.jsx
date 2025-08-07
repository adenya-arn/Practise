import React, { useState } from "react";

function Trial1() {
  const [state, setState] = useState(0);
  return (
    <div>
      <p>Likes:{state}</p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Like
      </button>
    </div>
  );
}

export default Trial1;
