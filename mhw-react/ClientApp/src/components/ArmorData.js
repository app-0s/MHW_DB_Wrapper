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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmorData = void 0;
var React = require("react");
var Armor_js_1 = require("./armor/Armor.js");
var ArmorData = /** @class */ (function (_super) {
    __extends(ArmorData, _super);
    function ArmorData(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            armor: new Armor_js_1.default(),
            loading: true
        };
        return _this;
    }
    ArmorData.prototype.componentDidMount = function () {
        this.getArmorData();
    };
    // Table of Armor stats
    // Note: will break out certain parts into subtable areas
    // I think this is made static to prevent having to bind it
    ArmorData.renderArmorStats = function (armor) {
        return (React.createElement("div", null,
            React.createElement("h3", null),
            React.createElement("table", { className: 'table table-striped' },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name: "),
                        React.createElement("th", null,
                            armor.name,
                            " "))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "Type:"),
                        React.createElement("td", null,
                            armor.type,
                            " ")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Rank:"),
                        React.createElement("td", null,
                            armor.rank,
                            " ")))),
            ArmorData.renderArmorDefense(armor.defense)));
    };
    ArmorData.renderArmorDefense = function (defense) {
        return (React.createElement("table", { className: "table table-striped" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Defenses"))),
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "Base:"),
                    React.createElement("td", null,
                        defense.base,
                        " ")),
                React.createElement("tr", null,
                    React.createElement("td", null, "Max:"),
                    React.createElement("td", null,
                        defense.max,
                        " ")),
                React.createElement("tr", null,
                    React.createElement("td", null, "Augmented:"),
                    React.createElement("td", null,
                        defense.augmented,
                        " ")))));
    };
    ArmorData.prototype.render = function () {
        var contents = this.state.loading ?
            React.createElement("p", null,
                React.createElement("em", null, "Loading...")) :
            ArmorData.renderArmorStats(this.state.armor); //
        return (React.createElement("div", null,
            React.createElement("p", null, " Armor Data "),
            contents));
    };
    ArmorData.prototype.getArmorData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('armor/id/20')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        //await console.log("Data response: " + response.status);
                        console.log(data);
                        //console.log(response.json());   //NOTE: json is a method, correct with data above, and fix resulting react issue
                        //console.log(response.text);
                        this.setState({
                            armor: new Armor_js_1.default(data),
                            loading: false
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("Error: ", err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArmorData.displayName = ArmorData.name;
    return ArmorData;
}(React.Component));
exports.ArmorData = ArmorData;
/* Try this after initially getting it working
 *
 * <tbody>
           {this.state.armor.map(this.state.armor.keys?)}
<tr>
    <td> </td>
    <td>{this.state.armor.rank} </td>
</tr>
                    )}
                </tbody >

*/ 
//# sourceMappingURL=ArmorData.js.map