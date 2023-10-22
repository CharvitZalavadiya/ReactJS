import React, { Component } from "react";
import MountingChild from "./23-component-mounting-lifecycle-method-2";

class Mounting extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      name: "cz",
    };
    console.log("Mounting constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Mounting getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Mounting componentDidMount");
  }

  render() {
    console.log("Mounting render");
    return (
      <div>
        <div>Mounting Lifecycle</div>
        <MountingChild />
      </div>
    );
  }
}

export default Mounting;
