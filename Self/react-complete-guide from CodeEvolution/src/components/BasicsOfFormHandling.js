import React, { Component } from "react";

class BasicsOfFormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comment: "",
      topic: "React",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
    let input = event.target.value;
    console.log(input);
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { userName, comment, topic } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label className="error">Enter Username:</label>
          <input
            type="text"
            value={userName}
            onChange={this.handleUserNameChange}
          ></input>
        </div>

        <div>
          <label>Comments</label>
          <textarea
            value={comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>

        <div>
          <label>Select Tab</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default BasicsOfFormHandling;
