import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    // const interval = setInterval(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      // clearInterval(interval);
    };
  }, []);

  return (
    <div>
      Hook Timer: {timer}
      <button
        onClick={() => {
          console.log(intervalRef);
          return clearInterval(intervalRef.current);
        }}
      >
        Clear Timer
      </button>
    </div>
  );
}

export default HookTimer;
