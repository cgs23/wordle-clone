import * as React from 'react';
import './styles.css';

interface GridCharacterProps {
    character: string;
}
 
const GridCharacter: React.FunctionComponent<GridCharacterProps> = ({character}) => {
    return ( 
        <div className="character">
            {character}
        </div>
     );
}
 
export default GridCharacter;