import React, { Component } from "react";
import CompF from "./39-context-comp-f";
import UserContext from './39-user-provider'

class CompE extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component E {this.context}
        <CompF />
      </div>
    );
  }
}

export default CompE;
