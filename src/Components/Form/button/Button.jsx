import React from 'react';
import classes from "./Button.module.css";
const Button = (props) => {
    return (
        <button onClick={props.onClick} className={classes.myBtn}>
            {props.children}
        </button>
    );
}

export default Button;