import { useState } from "react";

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    // setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    //   setCount(count - 1);
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    // setCount(0);
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
