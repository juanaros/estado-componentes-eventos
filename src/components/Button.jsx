import React from "react";

const Button = (props) => {
    return (
        <button disabled={props.disable} type="submit" className="btn btn-dark">{props.text}</button>
    )
}

export default Button;