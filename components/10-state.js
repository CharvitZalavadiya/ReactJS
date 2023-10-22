// class component

import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "10 - Welcome Visitor"
    }
  }

  likemsg() {
    this.setState({
      msg: 'Thank you for like me'
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={() => this.likemsg()}>Like</button>
      </div>
    );
  }
}

export default Message;
