"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Hero = () => {
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("img", { src: "/images/photo-grid.png", className: "hero--photo" }),
        react_1.default.createElement("h1", { className: "hero--header" }, "Online Experiences"),
        react_1.default.createElement("p", { className: "hero--text" }, "Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.")));
};
exports.default = Hero;
