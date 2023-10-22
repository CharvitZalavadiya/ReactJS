import React, { Component } from "react";
import RegularComp from "./26-regular-comp";
import PureComp from "./26-pure-comp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "cz",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "cz",
      });
    }, 5000);
  }

  render() {
    // console.log("-----Parent Component-----")
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
