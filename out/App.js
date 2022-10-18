"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_1 = __importDefault(require("./components/Card"));
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.default, null)));
};
exports.default = App;
