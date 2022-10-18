"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const airbnb_logo_png_1 = __importDefault(require("/images/airbnb-logo.png"));
const NavBar = () => {
    return (react_1.default.createElement("nav", null,
        react_1.default.createElement("img", { src: airbnb_logo_png_1.default, className: "nav--logo" })));
};
exports.default = NavBar;
