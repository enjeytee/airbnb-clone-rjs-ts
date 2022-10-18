"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const katie_zaferes_png_1 = __importDefault(require("../images/katie-zaferes.png"));
const star_png_1 = __importDefault(require("../images/star.png"));
const Card = () => {
    return (react_1.default.createElement("div", { className: "card" },
        react_1.default.createElement("img", { src: katie_zaferes_png_1.default, className: "card--image" }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("img", { src: star_png_1.default, className: "card--star" }),
            react_1.default.createElement("span", null, "5.0"),
            react_1.default.createElement("span", { className: "gray" }, "(6) \u2022 "),
            react_1.default.createElement("span", { className: "gray" }, "USA")),
        react_1.default.createElement("p", null, "Life Lessons with Katie Zaferes"),
        react_1.default.createElement("p", null,
            react_1.default.createElement("span", { className: "bold" }, "From $136"),
            " / person")));
};
exports.default = Card;
