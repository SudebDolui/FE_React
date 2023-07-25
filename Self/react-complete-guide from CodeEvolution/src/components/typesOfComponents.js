import React, { Component } from "react"; //Info: Component is used to make a class.

const inputName = "React";

// Note: Using Functional Components.
function Greeting() {
  return <h3>Hello, {inputName} from functional 1</h3>;
}

function Greeter() {
  return <h3>Hello, {inputName} from functional 2</h3>;
}

// Info: Using ES6 type:
// const Greet = () => <h3>Hello, {inputName}</h3>;

// Info: Using Named Exports: In this the self JSX or HTML Tag name should be the same as the name given here where are importing the component.
// export const Greet = () => <h3>Hello, {inputName}</h3>;

// Note: Using Class Components.
export default class Greet extends Component {
  render() {
    // return <h3>From {inputName} from class 1</h3>;
    return (
      <div>
        <h3>Welcome {this.props.name}</h3>
        {this.props.children}
      </div>
    );
  }
}

// export

// export default Greet;
export { Greeter, Greeting };
