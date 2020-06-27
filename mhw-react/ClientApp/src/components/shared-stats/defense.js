var Defense = /** @class */ (function () {
    function Defense(dataObj) {
        this.base = dataObj && dataObj.base || -1; // Falsy check (dataobj is null, base isnull)
        this.max = dataObj && dataObj.max || -1;
        this.augmented = dataObj && dataObj.augmented || -1;
    }
    return Defense;
}());
export default Defense;
