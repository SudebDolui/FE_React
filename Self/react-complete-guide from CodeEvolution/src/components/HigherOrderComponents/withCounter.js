import React from "react";

// const UpdatedComponent = (OriginalComponent) => { // Info:not a naming convention

const withCounter = (WrappedComponent, incrementCounter) => {
  //info: Use pascal case for wrapped component or when defining html tags
  class withCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementCounter };
        // return { count: prevState.count + 1 };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <WrappedComponent
          name="User"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return withCounter;
};

export default withCounter;
