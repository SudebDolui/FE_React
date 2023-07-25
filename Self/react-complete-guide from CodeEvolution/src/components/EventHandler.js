import React, { Component } from "react";

function FunctionEventHandler() {
  function clickHandler() {
    console.log("Function Button Clicked.");
  }
  return (
    <div>
      <button onClick={clickHandler}>Function Click</button>
    </div>
  );
}

class ClassEventHandler extends Component {
  clickHandler() {
    console.log("Class Button Clicked.");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Button Click</button>
      </div>
    );
  }
}

export { ClassEventHandler };

export default FunctionEventHandler;
