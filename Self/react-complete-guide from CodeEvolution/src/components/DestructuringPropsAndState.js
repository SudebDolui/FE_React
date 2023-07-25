// const Greet = ({ name, heroname }) => {

import { Component } from "react";

//Info: Another way
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h2>
        Hello {name} a.k.a {heroName}
      </h2>
    </div>
  );
};

export class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const {state1, state2} = this.state;
    return (
      <h2>
        Welcome {name} a.k.a {heroName}
      </h2>
    );
  }
}

export default Greet;
