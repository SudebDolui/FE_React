import React, { Component } from "react";
import UpdateLifeCycleB from "./LifeCycleB";

class UpdateLifeCycleA extends Component {
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

  changeState = () => {
    this.setState({
      name: "CodeEvolution",
    });
  };
  // Note: 3. Using render. This gets executed third if we place it anywhere.
  render() {
    console.log("LifeCycleA Render");
    return (
      <div>
        <p>Inside LifeCycle A.</p>
        <button onClick={this.changeState}>Change State</button>
        <UpdateLifeCycleB />
        <div>Got Outside LifeCycle B(Child)</div>
      </div>
    );
  }

  // Note: 4. Using componentDidMount. This gets executed fourth if we place it anywhere.
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  // Note: Update Methods and their LifeCycles.
  // Note1: shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate.");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate.");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate.");
  }
}

export default UpdateLifeCycleA;
