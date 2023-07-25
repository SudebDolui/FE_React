import React, { useReducer } from "react";

// Note: Used for Global variables. View counter3.js
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    //   return currentState + 1;
    // break;

    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    //   return currentState - 1;

    case "reset":
      //   return { firstCounter: initialState.firstCounter };
      // return (currentState = initialState);
      return initialState;

    case "2increment":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };

    case "2decrement":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };

    default:
      return 0;
  }
  // return newState;
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Count = {count.firstCounter}</h4>
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
      <h4>Counter 2 = {count.secondCounter}</h4>
      <button onClick={() => dispatch({ type: "2increment", value: 1 })}>
        2Increment
      </button>
      <button onClick={() => dispatch({ type: "2decrement", value: 1 })}>
        2Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
