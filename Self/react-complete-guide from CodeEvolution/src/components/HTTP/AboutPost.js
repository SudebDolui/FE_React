import axios from "axios";
import e from "cors";
import React, { Component } from "react";

export class AboutPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (events) => {
    console.log(events);
    this.setState({ [events.target.name]: events.target.value });
  };

  submitHandler = (events) => {
    events.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>userId: </label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>body: </label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default AboutPost;
