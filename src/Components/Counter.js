import React from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
}

increment = () => {
    this.setState((previous) => {
        return { count: previous.count + 1};
    });
};

render() {
    return (
        <div>
            <h1>I have Clicke {this.state.count} times </h1>
            <button></button>
        </div>
    )
}


export default Counter;