import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {BrowserRouter, HashRouter} from "react-router-dom";

function HW5() {
    console.log("hello roman")
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>
            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
