import React from "react";

function Title() {
  console.log("Rendering Title");
  return <h4>useCallback Hook</h4>;
}

export default React.memo(Title);
