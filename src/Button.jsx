import React from "react";

const reload = () =>{
    window.location.reload()
}

function Buttonjs(){
    return(
        <button onClick={reload}>
            Click me
        </button>
    );
}
export default Buttonjs;