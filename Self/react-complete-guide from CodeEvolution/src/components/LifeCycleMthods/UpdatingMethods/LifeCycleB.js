import React, { Component } from "react";

class UpdateLifeCycleB extends Component {
  // Note: 1. Using Constructor. This gets executed first if we place it anywhere.
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
    console.log("LifeCycleB Constructor");
  }

  // Note: 2. Using getDerivedState. This gets executed second if we place it anywhere.
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  // Note: 3. Using render. This gets executed third if we place it anywhere.
  render() {
    console.log("LifeCycleB Render");
    return <div>Inside LifeCycle B</div>;
  }

  // Note: 4. Using componentDidMount. This gets executed fourth if we place it anywhere.
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  // Note: Update Methods and their LifeCycles.
  shouldComponentUpdate() {
    console.log("LifeCycleB shoulComponentUpdate.");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate.");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate.");
  }
}

export default UpdateLifeCycleB;
