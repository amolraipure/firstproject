import React from "react";

function FunctionClick() {
    let click = () => {
        document.getElementById("i1").innerHTML = "Component Updated";
    };
    return (
        <div>
            <h1 id="i1">this is Functionalcomponent for event handling</h1>
            <button onClick={click}> Function Click</button>
        </div>

    );

}
export default FunctionClick;