import React from "react"

//function Destructinng({name,actor }) {
    function Destructing(props) {
        const { name, actor} = props;
        return (
            <div>
                <h1>
                    Hello {name} acted by {actor}
                </h1>
            </div>
        );
    }

    export default Destructing;