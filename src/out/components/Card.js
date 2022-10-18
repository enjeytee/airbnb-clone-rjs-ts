"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = (props) => {
    const { title, description, price, coverImg, stats, location, openSpots } = props.item;
    const { rating, reviewCount } = stats;
    let badgeText = "";
    if (!openSpots) {
        badgeText = "SOLD OUT";
    }
    else if (location === "Online") {
        badgeText = "ONLINE";
    }
    ;
    return (react_1.default.createElement("div", { className: "card" },
        badgeText && react_1.default.createElement("div", { className: "card--badge" }, badgeText),
        react_1.default.createElement("img", { src: `/images/${coverImg}`, className: "card--image" }),
        react_1.default.createElement("div", { className: "card--stats" },
            react_1.default.createElement("img", { src: "/images/star.png", className: "card--star" }),
            react_1.default.createElement("span", null, rating),
            react_1.default.createElement("span", { className: "gray" },
                "(",
                reviewCount,
                ") \u2022 "),
            react_1.default.createElement("span", { className: "gray" }, location)),
        react_1.default.createElement("p", { className: "card--title" }, title),
        react_1.default.createElement("p", { className: "card--price" },
            react_1.default.createElement("span", { className: "bold" },
                "From $",
                price),
            " / person")));
};
exports.default = Card;
