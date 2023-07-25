import React, { Component, PureComponent } from "react";
import MemoComp from "./Memo";
import PureComp from "./PureComponent";
import RegularComponent from "./RegularComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Guest",
      });
    }, 1000);
    // setInterval(() => {
    //   this.setState({
    //     name: "Hello",
    //   });
    // }, 3000);
    // setInterval(() => {
    //   this.setState({
    //     name: "Friend",
    //   });
    // }, 5000);
  }

  render() {
    console.log("*************Parent Component Render*************");
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name} />
        {/* <RegularComponent name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

/*
class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Guest",
      });
    }, 5000);
  }

  render() {
    console.log("*************Parent Component Render*************");
    return (
      <div>
        ParentComponent
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
*/

export default ParentComponent;
