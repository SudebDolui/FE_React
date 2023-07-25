import React, { Component, createRef } from "react";

class ClassFocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      console.log(element);
      this.cbRef = element;
      console.log(element);
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      console.log(this.cbref);
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input name="" id="" placeholder="Input" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
        <input name="" id="" placeholder="Input" ref={this.setCbRef} />
      </div>
    );
  }
}

export default ClassFocusInput;
