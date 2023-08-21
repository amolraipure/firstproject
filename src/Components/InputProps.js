import React from "react";

function InputProps(props) {
    return (
        <div>
            <h1>
                Hello, {props.hero} played by {props.actor}
            </h1>
        </div>
    );
}

export default InputProps;
