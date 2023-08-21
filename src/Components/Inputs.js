import React, { Component } from 'react'

class Inputs extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: "",
        }
    }
    handleSubmit = (event) => {
      alert ('Entered value is ${this.state.name}');

    };
  render() {
    return (
      <from onSubmit={this.handleSubmit}>
      <div>
        <label>UserName</label>
        <label>Email</label>
        <label>Password</label>
        <input type ></input>
      </div>
      </from>
    );
  }
}
export default Inputs;