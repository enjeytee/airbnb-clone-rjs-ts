"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const photo_grid_png_1 = __importDefault(require("../images/photo-grid.png"));
const Hero = () => {
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("img", { src: photo_grid_png_1.default, className: "hero--photo", width: "395.91px" }),
        react_1.default.createElement("h1", { className: "hero--header" }, "Online Experiences"),
        react_1.default.createElement("p", { className: "hero--text" }, "Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.")));
};
exports.default = Hero;
