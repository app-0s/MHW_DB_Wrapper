export interface IDefense {
    base: number;
    max: number;
    augmented: number;
}

export default class Defense {
    base: number;
    max: number;
    augmented: number;

    constructor(dataObj?: IDefense) {
        this.base = dataObj && dataObj.base || -1;  // Falsy check (dataobj is null, base isnull)
        this.max = dataObj && dataObj.max || -1;
        this.augmented = dataObj && dataObj.augmented || -1;
    }
}