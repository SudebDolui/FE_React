// Note: Four ways of Conditional Rendering:
//* 1. if/else
//* 2. Element Variables
//* 3. Ternary Conditional Operator
//* 4. Short circuit operator

import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //Info: if/else. Prefer this.
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome User.</div>;
    // } else {
    //   return (
    //     <div>
    //       Welcome Guest.
    //     </div>
    //   );
    // }
    // Info: Element Variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome User.</div>;
    // } else {
    //   message = <div>Welcome Guest.</div>;
    // }
    // return <div>{message}</div>;
    // Info: Ternary Conditional Operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome User.</div>
    // ) : (
    //   <div>Welcome Guest.</div>
    // );
    // Info: Short Circuit Operator. Prefer this.

    return this.state.isLoggedIn && <div>Welcome User.</div>;

    // return (
    //   <div>
    //     <div>Welcome User.</div>
    //     <div>
    //       Welcome Guest
    //     </div>
    //   </div>
    // );
  }
}

export default ConditionalRendering;
