import React from "react";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else setCounter(counter);
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else setCounter(counter);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>Current value is {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
};

export default Counter;
