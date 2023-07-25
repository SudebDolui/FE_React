import React, { useReducer } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return currentState + action.value;

    case "decrement":
      return currentState - action.value;

    case "reset":
      return initialState;

    default:
      return 0;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Counter 1 = {count}</h4>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>

      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <h4>Counter 2 = {countTwo}</h4>

      <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
        Increment
      </button>

      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatchTwo({ type: "increment", value: 5 })}>
        Increment 5
      </button>

      <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterThree;
