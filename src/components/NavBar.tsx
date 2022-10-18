import React from "react";
import logo from "/images/airbnb-logo.png";

const NavBar = (): JSX.Element => {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
    );
};
export default NavBar;