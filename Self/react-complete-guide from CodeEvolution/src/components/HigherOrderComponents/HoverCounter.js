import React, { Component } from "react";
import withCounter from "./withCounter";

export class HoverCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementCount}>
          {name} Hovered {count} Times
        </h3>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 3);
