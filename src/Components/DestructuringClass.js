import React, { Component } from "react";
class DestructingClass extends Component {
    //destructing props inside class compenent
    render() {
        const { name, actor } = this.props;
        return (
            <h2>
                Hello {name} acted by {actor}
            </h2>
        );
    }
}

export default DestructingClass;