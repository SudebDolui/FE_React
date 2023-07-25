import React from "react";

const Hello = () => {
  // Note: Using JSX.
  return (
    <div className="dummyClass">
      <h2>Welcome to REACT JS</h2>
      {/* <h4 className={styles.sucess}>Sucess</h4> */}
      <h4 className="error">Error</h4>
    </div>
  );

  // Note: Using regular JavaScript.
  // return React.createElement(
  //   "div",
  //   { id: "hello", className: "dummyClass" },
  //   React.createElement("h2", null, "Welcome to REACT JS")
  // );
};
export default Hello;
