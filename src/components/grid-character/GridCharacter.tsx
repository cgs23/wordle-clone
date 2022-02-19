import * as React from 'react';
import './styles.css';
import { GridTileModel } from '../../models/GridTile';
import { CharacterStatus } from '../../constants/enums';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../store/types/types';
import { colorizeKeyboard, setAnimate } from '../../store/actions/actions';


interface GridCharacterProps {
    tile: GridTileModel;
    index: number;
    rowIndex: number;
}

const GridCharacter: React.FunctionComponent<GridCharacterProps> = ({tile, index, rowIndex}) => {
    const currentRowState: number = useSelector((state: Store) => state.grid.currentRow);
    const id: string = `row-${rowIndex}-tile-${index}`;
    const dispatch = useDispatch();
    const [charClass, setCharClass] = React.useState('character incorrect');

      useEffect(() => {
        function setClass(tile: GridTileModel): void{
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
                    className = className + ' incorrect';
                    break;
            }
            setCharClass(className);
        }
        if(rowIndex === currentRowState-1){
            setTimeout(()=> {
                setClass(tile);
                if(index === 4){
                    dispatch(setAnimate(false));
                    dispatch(colorizeKeyboard());
                }
            }, 500 * index);
        }
      }, [rowIndex, currentRowState, index, tile.status, tile, dispatch]);

      return (
        <div className={charClass} id={id}>
            {tile.character}
        </div>
     );
}

export default GridCharacter;