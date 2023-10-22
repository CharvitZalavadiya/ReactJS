import React, { Component } from "react";

class UpdatingChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "cz",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Updating Child getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(){
    console.log("Updating shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Updating getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate(){
    console.log("Updating componentDidUpdate")
  }

  render() {
    console.log("Updating Child render");
    return <div>Updating Child Lifecycle</div>;
  }
}

export default UpdatingChild;