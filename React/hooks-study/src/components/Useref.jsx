import React, { useRef, useState, useEffect, use } from "react";

export function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type Here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export function PrevValue() {
  const [set, setter] = useState(0);
  const prevSetRef = useRef();
  useEffect(() => {
    prevSetRef.current = set;
  });
  return (
    <div>
      <p>Current Count: {set}</p>
      <p>Previous Count: {prevSetRef.current}</p>
      <button onClick={() => setter(set + 1)}>Increment</button>
    </div>
  );
}

function MiniTask() {
  const [inputs, setInput] = useState("");

  const prevInput = useRef("");

  useEffect(() => {
    prevInput.current = inputs;
  }, [inputs]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setInput("");
  };

  return (
    <div>
      <h2>Use Ref</h2>
      <input
        type="text"
        value={inputs}
        placeholder="Type something"
        onChange={handleChange}
      />
      <p>Current input:{inputs}</p>
      <p>Previous input:{prevInput.current} </p>
      <button onClick={handleSubmit}>ChangeInput</button>
    </div>
  );
}
export default MiniTask;
