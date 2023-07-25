import React, { Component } from "react";

export class ClassCounter2 extends Component {
  initialCount = 0;
  constructor(props) {
    super(props);

    this.state = {
      count: this.initialCount,
    };
  }

  incrementHandler = () => {
    console.log(this.initialCount, this.state.count);
    this.setState((prevState) => {
      return {
        count: prevState.count + 5,
      };
    });
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.incrementHandler}>Increment by 5</button>
      </div>
    );
  }
}

export default ClassCounter2;
