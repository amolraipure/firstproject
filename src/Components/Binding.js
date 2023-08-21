import React, { Component } from 'react';

// function Binding(){
//   return(
//     <h1> Hello</h1>
//   );
// }


 class Binding extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            message: "Good morning",
        };

        this.Update = this.Update.bind(this);
    }
    Update() {
        console.log(this);
        //undefined.setstate(do something) 1
        //Ox1.setState(do something) 2
        this.setState({
            message: "Bye Bye",
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.Update}>Change message</button>
      </div>
    );
  }
}
  export default Binding;

