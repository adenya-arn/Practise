import React from "react";
import userContext from "./ContextUser";
import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
