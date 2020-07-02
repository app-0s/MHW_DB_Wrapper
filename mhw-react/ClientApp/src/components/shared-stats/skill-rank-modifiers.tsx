export default class SkillRankModifiers {
    affinity: number;
    attack: number;
    damageFire: number;
    damageWater: number;
    damageIce: number;
    damageThunder: number;
    damageDragon: number;
    defense: number;
    health: number;
    sharpnessBonus: number;
    resistAll: number;
    resistFire: number;
    resistWater: number;
    resistIce: number;
    resistThunder: number;
    resistDragon: number;

    constructor(dataObj: any) {
        if (dataObj !== null) {
            this.affinity = dataObj.affinity || NaN;
            this.attack = dataObj.attack || NaN;
            this.damageFire = dataObj.damageFire || NaN;
            this.damageWater = dataObj.damageWater || NaN;
            this.damageIce = dataObj.damageIce || NaN;
            this.damageThunder = dataObj.damageThunder || NaN;
            this.damageDragon = dataObj.damageDragon || NaN;
            this.defense = dataObj.defense || NaN;
            this.health = dataObj.health || NaN;
            this.sharpnessBonus = dataObj.sharpnessBonus || NaN;
            this.resistAll = dataObj.resistAll || NaN;
            this.resistFire = dataObj.resistFire || NaN;
            this.resistWater = dataObj.resistWater || NaN;
            this.resistIce = dataObj.resistIce || NaN;
            this.resistThunder = dataObj.resistThunder || NaN;
            this.resistDragon = dataObj.resistDragon || NaN;
        }
    }
}