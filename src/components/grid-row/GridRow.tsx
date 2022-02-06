import * as React from 'react';
import { useState } from 'react';
import GridCharacter from '../grid-character/GridCharacter'
import './styles.css';


interface GridRowProps {
    rowData: string[]
    index: number;
}
 
const GridRow: React.FunctionComponent<GridRowProps> = ({rowData, index}) => {
    return ( 
        <div className="grid-row">
            {rowData.map((char: string, idx: number) => (
                <GridCharacter character={char} key={index}/ >
            ))}
        </div>
     );
}
 
export default GridRow;