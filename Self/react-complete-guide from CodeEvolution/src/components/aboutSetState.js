import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.value = '';
  }

  increment() {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("Call Back Function Value is: " + this.state.count);
    // });
    // Info: If the current value depends on the previous value then use these.
    this.setState((previousState, props) => ({
      count: previousState.count + 1,
    }));
    this.setValue(() => {
      this.value = "Name";
    });
    // console.log(this.state.count);
  }

  increment5() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Counter - {this.state.count}</div>
        <button onClick={() => this.increment5()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
