import React, { Component } from "react";

class ClassClick extends Component {
    clickHandle() {
        document.getElementById("i1").innerHTML = "Class event handled and updated";
    }
    render() {
        return (
            <div>
                <h1 id="i1">This is class Component</h1>
                <button onClick={this.clickHandle}>Class Event</button>
            </div>
        );
    }
}

export default ClassClick;
