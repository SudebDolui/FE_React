import React, { useContext } from "react";
import { CountContext } from "./putInsideApp";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h6>In Component D: {countContext.countState}</h6>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment", value: 2 })
        }
      >
        Increment by 2
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement", value: 2 })
        }
      >
        Decrement by 2
      </button>
      <button onClick={() => countContext.countDispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ComponentD;
