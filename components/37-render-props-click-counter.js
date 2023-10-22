import React, { Component } from "react";

class CCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  CCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.CCount}>Clicked {this.state.count} Times</button>
      </div>
    );
  }
}

export default CCounter;
