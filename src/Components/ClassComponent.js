import React, { Component } from "react";

class ClassComponent extends Component {
    //props
    //state
    state = {
        name: "SuperMan",
        power: "Fly",
        dress: "red and blue",
    };

    render() {
        return (
            <div>
                <h1>Hello I am {this.props.hero}</h1>
                <h2>This is line two</h2>
                <h2>
                    {this.state.name} has the ability to  {this.state.power} and he wears{" "}
                    {this.state.dress}
                </h2>
            </div>
        );
    }
}

export default ClassComponent;