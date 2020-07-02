export default class Slot {
    rank: number;

    constructor(dataObj) {
        if (dataObj !== null) {
            this.rank = dataObj.rank;
        }
    }
}