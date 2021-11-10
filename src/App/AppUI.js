import React from "react";
import {Counter} from "../Counter/Counter";
import {CounterColumns} from "../CounterColumns/CounterColumns";
import {ScreenItem} from "../ScreenItem/ScreenItem";
import {SearchScreen} from "../SearchScreen/SearchScreen";


function AppUI ({
                    columnasPantalla,
                    items

                })
{
    return (
        <React.Fragment>
            <Counter/>
            <SearchScreen/>
            {columnasPantalla.map(x =>
                <CounterColumns key={x.text} text={x.text}/>
            )};


            {items.map( item =>
                <ScreenItem key = {item.destination}
                            time = {item.time}
                            destination = {item.destination}
                            flight = {item.flight}
                            gate = {item.gate}
                            remarks = {item.remarks}
                />
            )};




        </React.Fragment>
    )
}

export {AppUI};