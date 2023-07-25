import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    // break;
    case "decrement":
      return currentState - 1;
    case "reset":
      // return (currentState = initialState);
      return initialState;
    default:
      return 0;
  }
  // return newState;
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Count = {count}</h4>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
