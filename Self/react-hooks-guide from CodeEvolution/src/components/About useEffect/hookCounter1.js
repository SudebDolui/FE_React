// $ This code explains useEffect() ===> Normal one

import React, { useEffect, useState } from "react";

function HookCounter1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating Document Title.");
    document.title = `Clicked ${count} Times`;
  }, [count]);

  return (
    <div>
      <input
        type={"text"}
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Click {count} times.
      </button>
    </div>
  );
}

export default HookCounter1;
