import React, { Component } from "react";

class HCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  HCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return <div>
        <p onMouseOver={this.HCount}>Hovered {this.state.count} Times</p>
    </div>;
  }
}

export default HCounter;
