"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defense_1 = require("../shared-stats/defense");
var Armor = /** @class */ (function () {
    function Armor(dataObj) {
        if (dataObj === void 0) { dataObj = null; }
        // Propertties
        this.id = 0;
        if (dataObj !== null) {
            this.id = dataObj.id;
            this.type = dataObj.type;
            this.name = dataObj.name;
            this.rank = dataObj.rank;
            this.rarity = dataObj.rarity;
            this.defense = new defense_1.default(dataObj.defense);
            this.resistances = dataObj.resistances;
            this.attributes = dataObj.attributes;
            this.slots = dataObj.slots;
            this.skills = dataObj.skills;
            this.armorSet = dataObj.armorSet;
            this.crafting = dataObj.crafting;
        }
    }
    return Armor;
}());
exports.default = Armor;
//# sourceMappingURL=Armor.js.map