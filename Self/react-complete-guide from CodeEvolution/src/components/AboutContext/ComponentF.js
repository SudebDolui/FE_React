import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(userName) => {
            return <div>Hello {userName}</div>;
          }}
        </UserConsumer>
        From ComponentF.
      </div>
    );
  }
}

export default ComponentF;
