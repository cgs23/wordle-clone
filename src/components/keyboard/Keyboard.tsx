import * as React from 'react';
import './styles.css';
import keyboard from '../../constants/keyboardButtons';
import KeyboardButton from '../keyboard-button/KeyboardButton';
import { useSelector, useDispatch } from "react-redux";
import { submit, addTile, deleteTile } from '../../store/actions/actions';

 
const Keyboard: React.FunctionComponent = () => {
    
    const dispatch = useDispatch();
    const buttonPressHandle = (button:string) => {
        console.log('Keyboard level - clicked ' + button);
        switch(button){
            case "<<":
                dispatch(deleteTile());
                break;
            case "Enter":
                dispatch(submit());
                break;
            default:
                dispatch(addTile(button));
                break;
        }
    }

    return (
        <section className='container keyboard'>
            {keyboard.map(key => (
                <KeyboardButton key={key} character={key} keyPressHandle={buttonPressHandle} />
            ))}
        </section>
    );
}
 
export default Keyboard;