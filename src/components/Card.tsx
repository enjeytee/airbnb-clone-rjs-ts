import React from "react";
import { ItfProps } from "../interfaces.jsx";

const Card = (props: ItfProps): JSX.Element => {
    const { title, description, price, coverImg, stats, location, openSpots } = props.item;
    const { rating, reviewCount } = stats;
    let badgeText = "";
    if (!openSpots) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    };
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src={"/images/star.png"} className="card--star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    );
};
export default Card;
