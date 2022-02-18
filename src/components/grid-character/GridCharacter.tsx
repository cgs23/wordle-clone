import * as React from 'react';
import './styles.css';
import { GridTileModel } from '../../models/GridTile';
import { CharacterStatus } from '../../constants/gameStatus';

interface GridCharacterProps {
    tile: GridTileModel;
    index: number;
    rowIndex: number;
}
 
const GridCharacter: React.FunctionComponent<GridCharacterProps> = ({tile, index, rowIndex}) => {
    const id: string = `row-${rowIndex}-tile-${index}`;
    const className = React.useMemo(() => {
        let className: string = 'character';
        switch(tile.status){
            case CharacterStatus.CORRECT:
                className = className + ' correct';
                break;
            case CharacterStatus.MISPLACED:
                className = className + ' missplaced';
                break;
            case CharacterStatus.INCORRECT:
            default:
                break;
        }
        return className;
      }, [tile.status]);    
      return ( 
        <div className={className} id={id}>
            {tile.character}
        </div>
     );
}
 
export default GridCharacter;