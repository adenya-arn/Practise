import React from "react";
import UserContext from "./ContextUser";
import { useContext } from "react";

function ComponentC() {
  const { user, setUser } = useContext(UserContext);
  const updateUser = () => {
    setUser({ name: "Emily", age: 21 });
  };

  return (
    <div>
      <h4>Component C</h4>
      <p>Hello, {user.name}!</p>
      <p>You are {user.age} years old.</p>
      <button onClick={updateUser}>Change to Emily</button>
    </div>
  );
}

export default ComponentC;
