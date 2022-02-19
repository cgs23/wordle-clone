import * as React from 'react';
import './styles.css';
import keyboard from '../../constants/keyboardButtons';
import KeyboardButton from '../keyboard-button/KeyboardButton';
import { useDispatch, useSelector } from "react-redux";
import { submit, addTile, deleteTile, incrementRow, setAnimate } from '../../store/actions/actions';
import { Store } from '../../store/types/types';



const Keyboard: React.FunctionComponent = () => {
    const animate: boolean = useSelector((state: Store) => state.animate);
    const dispatch = useDispatch();
    const buttonPressHandle = (button:string) => {
        switch(button){
            case "<<":
                dispatch(deleteTile());
                break;
            case "Enter":
                if (!animate){
                    dispatch(submit());
                    dispatch(setAnimate(true));
                    dispatch(incrementRow());
                }
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