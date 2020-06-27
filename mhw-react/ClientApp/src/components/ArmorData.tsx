import * as React from 'react';
import Armor from './armor/Armor.js'
import Defense from './shared-stats/defense.js';

interface IProps { 
    location: any
}

interface IState {
    //armorId: number
    armor: any,
    loading: boolean;
}

export class ArmorData extends React.Component<IProps, IState> {
    static displayName = ArmorData.name;
    constructor(props: IProps) {
        super(props);

        this.state = {
            //armorId: this.props.location.state.armorId,
            armor: new Armor(),
            loading: true
        };
    }
    //
    componentDidMount() {
        console.log("Location State?" + this.props.location.state);
        console.log("Armor Id: " + this.props.location.state.armorId);
        this.getArmorData();
    }

    // Table of Armor stats
    // Note: will break out certain parts into subtable areas
    // I think this is made static to prevent having to bind it
    static renderArmorStats(armor: Armor) {
        return (
            <div>
                <h3></h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name: </th>
                            <th>{armor.name} </th>
                        </tr>
                        {
                            //<tr>
                            //<th>Stat</th>
                            //<th>Value</th>
                            //</tr>
                        }
                </thead>
                <tbody>
                    
                    <tr>
                        <td>Type:</td>
                        <td>{armor.type} </td>
                    </tr>
                    <tr>
                        <td>Rank:</td>
                        <td>{armor.rank} </td>
                    </tr>
                    {
                    //<tr>
                    //    <td>Defense:</td>
                    //    <td>{armor.defense} </td>
                    //    </tr>
                    }
                    {
                    //<tr>
                    //    <td>Resistances:</td>
                    //    <td>{armor.resistances} </td>
                    //</tr>
                    }
                    {
                    //<tr>
                    //    <td>Attributes:</td>
                    //    <td>{armor.attributes} </td>
                    //</tr>   
                    }
                </tbody>
                </table>

                {ArmorData.renderArmorDefense(armor.defense)}
             </div>
        );
    }
    // TODO: Would like show set info on side IF a set armor is a part of set  
    static renderArmorDefense(defense: Defense) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Defenses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Base:</td>
                        <td>{defense.base} </td>
                    </tr>
                    <tr>
                        <td>Max:</td>
                        <td>{defense.max} </td>
                    </tr>
                    <tr>
                        <td>Augmented:</td>
                        <td>{defense.augmented} </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render()
    {
        let contents = this.state.loading ?
            <p><em>Loading...</em></p> :
            ArmorData.renderArmorStats(this.state.armor); //

        return (
            <div>
                <p> Armor Data </p>
                {contents}
            </div>
        );
    }

    async getArmorData()
    {
        if (this.props.location.state.armorId == null) {
            console.log("Armor Id is null/undefined");
            return;
        }

        try {
            // Call id route for armor
            const response = await fetch('armor/id/' + this.props.location.state.armorId); // Initially thinking this is same name as armorcontroller
            
            const data = await response.json();
            //await console.log("Data response: " + response.status);
            console.log(data);
            //console.log(response.json());   //NOTE: json is a method, correct with data above, and fix resulting react issue
            //console.log(response.text);
            this.setState({
                armor: new Armor(data)
                , loading: false
            });
            //console.log(this.state.armor)
        } catch (err) {
            console.log("Error: ", err);
        }        
        
    }

}

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