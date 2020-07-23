import React from "react";
import './App.css';
import {Link } from "react-router-dom";


function Nav (){

    const navStyle = {
        color : 'white'
    }


    return(
        <nav>
            <h1>M2M</h1>
            <ul className = "navLinks">
                <Link style = {navStyle} to = "/"><li>Login/Logout</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;