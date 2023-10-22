import React, { Component } from "react";

class MountingChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "cz",
    };
    console.log("MountingChild constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountingChild getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("MountingChild componentDidMount");
  }

  render() {
    console.log("MountingChild render");
    return <div>MountingChild Lifecycle</div>;
  }
}

export default MountingChild;