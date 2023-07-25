import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");

    return <div>PureComponent {this.props.name}</div>;
  }
}

export default PureComp;

/* 
$ A pure component implements shouldComponentUpdate with a shallow props(=== Opertor) and state comparison.

# SC of prevState with currentState.
# SC of prevProps with currentProps.

* If there is only a difference between the props value. Here User.
*/
