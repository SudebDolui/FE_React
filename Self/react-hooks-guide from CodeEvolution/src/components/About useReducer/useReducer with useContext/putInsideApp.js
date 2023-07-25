import React, { createContext, useReducer } from "react";
import ComponentA from "./componentA";
import ComponentB from "./componentB";
import ComponentC from "./componentC";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function PutInsideApp() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <h5>Count: {count}</h5>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export const CountContext = createContext();
export default PutInsideApp;
