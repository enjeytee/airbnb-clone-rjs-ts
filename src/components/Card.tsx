import React from "react";
import ks from "../images/katie-zaferes.png";
import si from "../images/star.png";

const Card = (): JSX.Element => {
    return (
        <div className="card">
            <img src={ks} className="card--image"/>
            <div>
                <img src={si} className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
};
export default Card;