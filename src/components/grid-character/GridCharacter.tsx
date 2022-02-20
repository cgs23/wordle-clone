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
    const wasSaved: boolean = useSelector((state: Store) => state.wasSaved);
    const id: string = `row-${rowIndex}-tile-${index}`;
    const dispatch = useDispatch();
    const [charClass, setCharClass] = React.useState('character incorrect');
    const [initialClassSetup, setInitialClassSetup] = React.useState(true);

      useEffect(() => {
        function setClass(tile: GridTileModel, flip: boolean): void{
            let className: string = '';
            className = flip ? 'character flip ' : 'character';
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

        if (wasSaved && initialClassSetup){
            setClass(tile, false);
            setInitialClassSetup(false);
        }
        else{
            if(rowIndex === currentRowState-1){
                setTimeout(()=> {
                    setClass(tile, true);
                    if(index === 4){
                        dispatch(setAnimate(false));
                        dispatch(colorizeKeyboard());
                    }
                }, 700 * index);
            }
        }
      }, [rowIndex, currentRowState, index, tile.status, tile, dispatch]);

      return (
        <div className={charClass} id={id}>
            {tile.character}
        </div>
     );
}

export default GridCharacter;