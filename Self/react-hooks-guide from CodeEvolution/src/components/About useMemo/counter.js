import React, { useMemo, useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("Inside Check");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  // const isEven = () => {
  //   console.log("Inside Check");
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return counterOne % 2 === 0;
  // };

  return (
    <div>
      <h4>
        {/* Counter 1: {counterOne} is {isEven() ? "EVEN" : "ODD"} */}
        Counter 1: {counterOne} is {isEven ? "EVEN" : "ODD"}
        {/* Counter 1: {counterOne} */}
      </h4>
      <button onClick={incrementOne}>Counter 1 Increment</button>
      <h4>Counter 2: {counterTwo}</h4>
      <button onClick={incrementTwo}>Counter 2 Increment</button>
    </div>
  );
}

export default Counter;
