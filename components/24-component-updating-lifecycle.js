import React, { Component } from "react";
import UpdatingChild from "./24-component-updating-lifecycle-2";

class Updating extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      name: "cz",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Updating getDerivedStateFromProps");
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

  changestate = () => {
    this.setState ({
        name: "zc"
    })
  }

  render() {
    console.log("Updating render");
    return (
      <div>
        <div>Updating Lifecycle</div>
        <button onClick={this.changestate}>Change State</button>
        <UpdatingChild />
      </div>
    );
  }
}

export default Updating;
