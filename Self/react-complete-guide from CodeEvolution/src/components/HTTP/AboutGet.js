import React, { Component } from "react";
import axios from "axios";

class AboutGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stationeries: [],
      errorMessage: "",
    };
  }

  // http://localhost:2022/api/all-stationeries-details

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ stationeries: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Error while retrieving data..." });
      });
  }

  render() {
    const { stationeries, errorMessage } = this.state;
    return (
      <div>
        <h3>List Stationeries</h3>
        {stationeries.length
          ? stationeries.map((stationery) => (
              <div key={stationery.id}>{stationery.title}</div>
            ))
          : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
  }
}

export default AboutGet;
