import React from "react";
import "./VendingMachine.css";
import {NavLink} from "react-router-dom";
const VendingMachine = () =>{


    return(
        <div class="VendingMachine">
            <h1>Vending Machine</h1>
            <div class="sections">
            <div class="Introduction">
                HELLO, I AM A VENDING MACHINE! 
                WHAT WOULD YOU LIKE TO EAT/DRINK?
            </div>
            <div class="Menu">
                HERE ARE YOUR OPTIONS:
                <ul>
                <li><NavLink to="/Cokes">Coke</NavLink></li>
                <li><NavLink to="/Icecreams">Ice Cream</NavLink></li>
                <li><NavLink to="/Sandwiches">Sandwiches</NavLink></li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default VendingMachine;