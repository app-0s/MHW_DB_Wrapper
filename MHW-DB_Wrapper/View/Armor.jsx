﻿import React from 'react';


export default class Armor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			armorProfile: {
				"id": 20,
				"type": "legs",
				"rank": "low",
				"rarity": 1,
				"defense": {
					"base": 6,
					"max": 42,
					"augmented": 72
				},
				"resistances": {
					"fire": 2,
					"water": 0,
					"ice": 0,
					"thunder": 2,
					"dragon": 2
				},
				"attributes": {},
				"name": "Bone Greaves",
				"slots": [],
				"skills": [
					{
						"id": 291,
						"level": 1,
						"modifiers": {}, // figure out how to te3ll newtonsoft to convert this to the skillrankmodifiers object
						"description": "Increases the chances of a corpse being left behind.",
						"skill": 100,
						"skillName": "Entomologist"
					}
				],
				"armorSet": {
					"id": 4,
					"rank": "low",
					"name": "Bone",
					"pieces": [
						16,
						17,
						18,
						19,
						20
					],
					"bonus": null
				},
				"assets": {
					"imageMale": "https://assets.mhw-db.com/armor/6313ff3401ad840bde1a30f0207f8dfd778597b2.84ae9eadb85dd65663fb6ff366b5662c.png",
					"imageFemale": "https://assets.mhw-db.com/armor/269a927a5e7002ba223797aa2cc9e55bcf542870.6ed223f6abbe87a03e1e5a80a6f3cb06.png"
				},
				"crafting": {
					"materials": [
						{
							"quantity": 1,
							"item": {
								"id": 147,
								"rarity": 3,
								"carryLimit": 99,
								"value": 30,
								"name": "Monster Bone S",
								"description": "A material found in bonepiles. Indispensable for both hunting and daily life."
							}
						},
						{
							"quantity": 1,
							"item": {
								"id": 138,
								"rarity": 4,
								"carryLimit": 99,
								"value": 400,
								"name": "Ancient Bone",
								"description": "A bone used as crafting material. Can be found in bonepiles in the Ancient Forest. Its size evokes a certain primal quality."
							}
						}
					]
				}
			},
            loading: ''
        }
    }

    componentDidMount() {
        this.setState(() => ({
            loading: true
            })
        );

        // make call to controller api to get armor
        // set state of armorProfile to result
        // turn loading on false
    }

    render() {
        return (
            this.state.loading?    
        )
    }
}