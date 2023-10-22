import React, { Component } from "react";
import Input from "./29-refs-with-class-comp";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.compRef = React.createRef();
  }

  clickHandler = () => {
    this.compRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.compRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default FocusInput;
