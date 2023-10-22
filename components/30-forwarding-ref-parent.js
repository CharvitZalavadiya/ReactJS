import React, { Component } from "react";
import FWInput from "./30-forwarding-ref";

class FWParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FWInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default FWParentInput;
