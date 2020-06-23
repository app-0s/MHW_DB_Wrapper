"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Defense = /** @class */ (function () {
    function Defense(dataObj) {
        this.base = dataObj && dataObj.base || -1; // Falsy check (dataobj is null, base isnull)
        this.max = dataObj && dataObj.max || -1;
        this.augmented = dataObj && dataObj.augmented || -1;
    }
    return Defense;
}());
exports.default = Defense;
//# sourceMappingURL=defense.js.map