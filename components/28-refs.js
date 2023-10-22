import React, { Component } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.callbackRef = null;
    this.setCallbackRef = (element) => {
        this.callbackRef = element
    }
  }

  componentDidMount() {

    //Method 2
    if(this.callbackRef){
        this.callbackRef.focus()
    }

    //Method 1
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    console.log(this.inputRef.current.value);
    console.log(this.callbackRef.value)
  };

  render() {
    return (
      <div>
        <label>UserName : </label>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallbackRef} />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default Refs;
