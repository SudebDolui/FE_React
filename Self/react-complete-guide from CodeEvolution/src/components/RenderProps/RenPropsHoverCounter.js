import React, { Component } from "react";

export class RenPropsHoverCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCounter = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementCounter}>Hovered {count} Times.</h3>
      </div>
    );
  }
}

export default RenPropsHoverCounter;
