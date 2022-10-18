"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavBar_1 = __importDefault(require("./components/NavBar"));
const Hero_1 = __importDefault(require("./components/Hero"));
const Card_1 = __importDefault(require("./components/Card"));
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(NavBar_1.default, null),
        react_1.default.createElement(Hero_1.default, null),
        react_1.default.createElement(Card_1.default, null)));
};
exports.default = App;
