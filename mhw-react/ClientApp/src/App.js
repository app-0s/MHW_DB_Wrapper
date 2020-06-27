"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var ArmorData_1 = require("./components/ArmorData");
var ArmorSearch_1 = require("./components/armor/ArmorSearch");
require("./custom.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Layout_1.Layout, null,
            React.createElement(react_router_1.Route, { exact: true, path: '/', component: ArmorSearch_1.ArmorSearch }),
            React.createElement(react_router_1.Route, { path: '/armor-search', component: ArmorSearch_1.ArmorSearch }),
            React.createElement(react_router_1.Route, { path: "/home", component: Home_1.Home }),
            React.createElement(react_router_1.Route, { path: '/armor-data', component: ArmorData_1.ArmorData })));
    };
    App.displayName = App.name;
    return App;
}(React.Component));
exports.default = App;
// Note: Have to setup webpack/typescript transpilation within vsco/vscommunity 2019
//# sourceMappingURL=App.js.map