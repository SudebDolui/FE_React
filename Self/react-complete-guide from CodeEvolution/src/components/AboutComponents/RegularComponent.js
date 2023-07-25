import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("Regular Component Render");
    return (
      <div>
        <div>RegularComponent {this.props.name}</div>
      </div>
    );
  }
}

export default RegularComponent;
