import React from "react";
import ReactDOM from "react-dom";

function PortalsDemo() {
  const { userName, password, phone, comment } = "";
  const submitHandler = (event) => {
    console.log(userName, password, phone, comment);
  };
  //   console.log(userName, password, phone, comment);
  return ReactDOM.createPortal(
    <div>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input type="text" value={userName} />
        <label>Password:</label>
        <input type="password" value={password} />
        <label>Phone:</label>
        <input type={"number"} value={phone} />
        <label>Comment:</label>
        <textarea type={"text"} value={comment} />
      </form>
      <button type="submit">Submit</button>
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalsDemo;
