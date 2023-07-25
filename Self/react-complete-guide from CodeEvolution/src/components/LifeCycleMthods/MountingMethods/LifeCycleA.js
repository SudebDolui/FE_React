import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  // Note: 1. Using Constructor. This gets executed first if we place it anywhere.
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
    console.log("LifeCycleA Constructor");
  }

  // Note: 2. Using getDerivedState. This gets executed second if we place it anywhere.
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  // Note: 3. Using render. This gets executed third if we place it anywhere.
  render() {
    console.log("LifeCycleA Render");
    return (
      <div>
        <p>Inside LifeCycle A.</p>
        <div>Getting Inside LifeCycle B(Child)</div>
        <LifeCycleB />
        <div>Got Outside LifeCycle B(Child)</div>
      </div>
    );
  }

  // Note: 4. Using componentDidMount. This gets executed fourth if we place it anywhere.
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
}

export default LifeCycleA;
