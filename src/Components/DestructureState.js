import React, { Component } from "react";

class DestuctureState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Batman",
            power: "fly",
            suit: "black",
        };
    }
    render() {
        const { name, power, suit } = this.state;
        return (
            <h2>
                Hello I am {name} I can {power} and i wear {suit}
            </h2>
        );
    }
}
export default DestuctureState;
