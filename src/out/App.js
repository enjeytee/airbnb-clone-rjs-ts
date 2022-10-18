"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavBar_1 = __importDefault(require("./components/NavBar"));
const Hero_1 = __importDefault(require("./components/Hero"));
const Card_1 = __importDefault(require("./components/Card"));
const data_jsx_1 = __importDefault(require("./data.jsx"));
const App = () => {
    const cards = data_jsx_1.default.map(item => react_1.default.createElement(Card_1.default, { key: item.id, item: item }));
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(NavBar_1.default, null),
        react_1.default.createElement(Hero_1.default, null),
        react_1.default.createElement("section", { className: "cards-list" }, cards)));
};
exports.default = App;
