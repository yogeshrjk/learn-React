import React from 'react';

const Button = (props) => {
    return (
        <button className="refresh" onClick={props.onClick}>{props.value}</button>
    );
};

export default Button;