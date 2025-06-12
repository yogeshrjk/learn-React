import React from 'react';

const Square = (props) => {
    return (
        <div onClick={props.onClick} className="square" style={{border: '1px solid black', height: '100px', width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h5 style={{fontSize:"30px"}}>{props.value}</h5>
        </div>
    );
};

export default Square;