import { Component, useState } from "react";

export const UserMessage = () => {
  let message = "Welcome User";
  // const [presentMessage, changeMessage] = useState("Welcome User");
  const [presentMessage, changeMessage] = useState(message);

  // const clickhandler = () => {
  //   changeMessage("Thank You for visiting us.")
  // }

  return (
    <div>
      <h1>{presentMessage}</h1>
      <button onClick={() => changeMessage("Thank You for Visiting us.")}>
        Subscribe
      </button>
    </div>
  );
};

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank You for Visiting us.",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
