// $ This code explains useState() ===> Normal one(Recommended One.)

import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  //   const resetCount = () => {
  //     setCount(initialCount);
  //   };
  const increment5 = () => {
    // ! Try to follow Naming Convention here(increment5 => incrementFive).
    for (let i = 0; i < 5; i++) {
      //   setCount(count + 1); // ! Here the value only increases by 1 as it only access count once.
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //   setCount(count + 1); // ! Here the value only increases by 1 as it only access count once.
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <p></p>
      {/* <button onClick={() => setCount(count + 1)}> Increment Count(+)</button> */}{" "}
      {/* //! Not correct way to use useState Hooks */}
      {/* <button onClick={() => setCount(count - 1)}>Decrement Count(-)</button> */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count(+)
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement Count(-)
      </button>
      <p></p>
      <button onClick={increment5}>Increment by 5(+5)</button>
      <button onClick={decrementFive}>Decrement by 5(-5)</button>
    </div>
  );
}

export default HookCounter2;
