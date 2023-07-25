import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    // $Focus the input element
    inputRef.current.focus();
    console.log(inputRef);
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
