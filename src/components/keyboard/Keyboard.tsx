import * as React from 'react';
import './styles.css';
import KeyboardButton from '../keyboard-button/KeyboardButton';
import { useDispatch, useSelector } from "react-redux";
import { submit, addTile, deleteTile, incrementRow, setAnimate } from '../../store/actions/actions';
import { Store } from '../../store/types/types';
import { IKeyboardButtonModel } from '../../models/IModels';

const Keyboard: React.FunctionComponent = () => {
    const animate: boolean = useSelector((state: Store) => state.animate);
    const keyboard: IKeyboardButtonModel[] = useSelector((state: Store) => state.keyboard.keyboard);
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
        <section className='keyboard'>
            {keyboard.map(button => (
                <KeyboardButton key={button.character} character={button.character} buttonStatus={button.status} keyPressHandle={buttonPressHandle} />
            ))}
        </section>
    );
}

export default Keyboard;