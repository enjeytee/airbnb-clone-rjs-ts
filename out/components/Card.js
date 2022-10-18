"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const katie_zaferes_png_1 = __importDefault(require("../images/katie-zaferes.png"));
const Card = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("img", { src: katie_zaferes_png_1.default, width: "176px" })));
};
exports.default = Card;
