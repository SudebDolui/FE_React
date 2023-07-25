import React, { useContext } from "react";
import { CountContext } from "./putInsideApp";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h6>In Component F: {countContext.countState}</h6>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment", value: 3 })
        }
      >
        Increment by 3
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement", value: 3 })
        }
      >
        Decrement by 3
      </button>
      <button onClick={() => countContext.countDispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ComponentF;
