import React from "react";
import useCounter from "./hooks/useCounter";

function CounterOne() {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  //   const reset = () => {
  //     setCount(0);
  //   };

  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <span>Counter 1 Count is: {count}</span>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
