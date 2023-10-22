import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      address: "",
      city: "gadhinagar",
    };
  }

  usernameevent = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  addressevent = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  cityevent = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  submitevent = (event) => {
    alert(`${this.state.username} ${this.state.address} ${this.state.city}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitevent}>
        <div>
          <lable>UserName : </lable>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameevent}
          ></input>
        </div>

        <div>
          <lable>Address : </lable>
          <input
            type="textarea"
            value={this.state.address}
            onChange={this.addressevent}
          ></input>
        </div>

        <div>
          <lable>City : </lable>
          <select value={this.state.city} onChange={this.cityevent}>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="vadodara">Vadodara</option>
            <option value="gandhinagar">Gandhinagar</option>
            <option value="morbi">Morbi</option>
            <option value="navsari">Navsari</option>
            <option value="khageshri">Khageshri</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
