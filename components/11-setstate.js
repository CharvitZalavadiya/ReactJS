import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  inc() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

    this.setState(prevState =>({
        count : prevState.count + 1
    }))
  }

  inc3(){
    this.inc()
    this.inc()
    this.inc()
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={() => this.inc()}>Inc 1</button>
        <button onClick={() => this.inc3()}>Inc 3</button>
      </div>
    );
  }
}

export default Counter;
