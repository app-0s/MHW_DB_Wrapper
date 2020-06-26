import * as React from 'react';
import Armor from './Armor.js';

interface IProps {
    armorSearchResults: Armor[]
}

// hotlink row to armor data page(mouseover(highlight) and onclick?)
export default function ArmorSearchResultsDisplay(props: IProps){
    return <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Rank</th>
            </tr>
        </thead>
        <tbody>
            {props.armorSearchResults.map(armor => 
                <tr key={armor.id}>
                    <td>{armor.name}</td>
                    <td>{armor.type}</td>
                    <td>{armor.rank}</td>
                </tr>)}
        </tbody>
    </table>
}