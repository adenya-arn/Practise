import React from "react";
import { Grandchild } from "./Grandchild";

export function Child() {
  return (
    <div>
      <h3>Child Component</h3>
      <Grandchild />
    </div>
  );
}
