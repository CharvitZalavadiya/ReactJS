import React, { Component } from "react";
import MemoComp from "./27-memo"

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
    console.log("-----Parent Component-----");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
