import React from "react";

function Input (props){
return(
    <label>
    {props.label}
    <input
        className={props.className}
        type="text"
        value={props.value}
        name={props.name}
        required
        onChange={props.handleChange}
    />
    </label>
)
}

export default Input;