import React from "react";
import './CounterColumns.css'


function CounterColumns (props) {

    return (
        <React.Fragment>
            <ul className='CounterColumns'>
                <li>{props.text}  </li>
            </ul>
        </React.Fragment>
    );
}

export {CounterColumns};
