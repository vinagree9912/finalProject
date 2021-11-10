import React from "react";
import './Counter.css';
import images from '../Counter/images.jpeg';
import './images.css';

function Counter () {
    return(
        <React.Fragment>
            <img className='images' src={images} />
            <h1 className='Counter'>Departures</h1>

        </React.Fragment>

    )
}
export {Counter}