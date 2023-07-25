import React, { Component } from "react";

class BindingEventHandlers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this); //Info: 3rd way
  }

  // Info: 1st way
  // clickHandler() {
  //   this.setState({
  //     msg: "GoodBye",
  //   });
  //   console.log(this);
  // }

  // Info: 4th way
  clickHandler = () => {
    this.setState({
      msg: "GoodBye",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> // Info: 1st Way. It has Performance Implications. */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> // Info: 2nd way. It also has some implications*/}
        {/* <button onClick={this.clickHandler}>Click</button> //Info: 3rd way. Best Approach. */}
        <button onClick={this.clickHandler}>Click</button>{" "}
        {/* //Info: Experimental Approach. */}
      </div>
    );
  }
}

export default BindingEventHandlers;
