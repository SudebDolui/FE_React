import React, { useContext } from "react";
import { CountContext } from "./putInsideApp";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h6>In Component A: {countContext.countState}</h6>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment", value: 1 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement", value: 1 })
        }
      >
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
