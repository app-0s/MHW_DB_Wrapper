
export default class ArmorAttributes {
    requiredGender: string

    constructor(dataObj: any) {
        if (dataObj !== null)
            this.requiredGender = dataObj.requiredGender
    }
}