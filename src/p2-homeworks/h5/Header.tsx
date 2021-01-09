import React from "react";
import {BrowserRouter, NavLink} from 'react-router-dom'


function Header() {
    return (
        <BrowserRouter>
        <div>
            <NavLink to={"/pre-junior"}/>
            // add NavLinks

        </div>
        </BrowserRouter>
    );
}

export default Header;
