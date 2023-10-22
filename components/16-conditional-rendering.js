import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    // method 1
    // let msg;
    // if (this.state.isLoggedIn) {
    //   msg = <div>Hii CZ</div>;
    // } else {
    //   msg = <div>Hii Noobie</div>;
    // }

    // return <div>{msg}</div>;

    // method 2
    // if (this.state.isLoggedIn) {
    //   return <div>Hii CZ</div>;
    // } else {
    //   return <div>Hii Noobie</div>;
    // }

    // method 3
    // return this.state.isLoggedIn ?(
    //     <div>Welcome CZ</div> ) : (
    //     <div>Welcome Noobie</div>
    // )

    // method 4
    return this.state.isLoggedIn && <div>Welcome CZ</div>

  }
}

export default UserGreeting;
