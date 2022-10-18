import React from "react";
import logo from "../images/photo-grid.png";

const Hero = (): JSX.Element => {
    return (
        <section>
            <img src={logo} className="hero--photo" width="395.91px"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    );
};
export default Hero;