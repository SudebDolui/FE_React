import React from "react";
import useCounter from "./hooks/useCounter";

function CounterTwo() {
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

  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <span>Counter 2 Count is: {count}</span>
      <button onClick={increment}>+10</button>
      <button onClick={decrement}>-10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
