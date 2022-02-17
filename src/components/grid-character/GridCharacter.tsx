import * as React from 'react';
import './styles.css';
import { GridTileModel } from '../../models/GridTile';

interface GridCharacterProps {
    tile: GridTileModel;
    index: number;
    rowIndex: number;
}
 
const GridCharacter: React.FunctionComponent<GridCharacterProps> = ({tile, index, rowIndex}) => {
    const id: string = `row-${rowIndex}-tile-${index}`;
    return ( 
        <div className="character" id={id}>
            {tile.character}
        </div>
     );
}
 
export default GridCharacter;