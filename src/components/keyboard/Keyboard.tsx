import * as React from 'react';
import { useState } from 'react';
import './styles.css';
import keyboard from '../../constants/keyboardButtons';
import KeyboardButton from '../keyboard-button/KeyboardButton';
 
const Keyboard: React.FunctionComponent = () => {

    const buttonPressHandle = (button:string) => {
        console.log('Keyboard level - clicked ' + button);
                
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