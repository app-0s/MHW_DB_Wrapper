"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// hotlink row to armor data page(mouseover(highlight) and onclick?)
function ArmorSearchResultsDisplay(props) {
    return React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Type"),
                React.createElement("th", null, "Rank"))),
        React.createElement("tbody", null, props.armorSearchResults.map(function (armor) {
            return React.createElement("tr", { key: armor.id },
                React.createElement("td", null, armor.name),
                React.createElement("td", null, armor.type),
                React.createElement("td", null, armor.rank));
        })));
}
exports.default = ArmorSearchResultsDisplay;
//# sourceMappingURL=ArmorSearchResultDisplay.js.map