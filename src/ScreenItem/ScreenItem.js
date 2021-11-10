import React from "react";
import './ScreenItem.css';



function ScreenItem (props) {
    return (
        <React.Fragment>
            <ul className='ScreenItem'>
                <li>{props.time} </li>
                <li>    {props.destination}</li>
                <li> {props.flight} </li>
                 <li> {props.gate} </li>
                <li> {props.remarks} </li>
                </ul>

        </React.Fragment>
    );
}
export {ScreenItem}