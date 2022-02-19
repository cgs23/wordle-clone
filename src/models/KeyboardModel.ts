import { ButtonStatus } from "../constants/enums";
import { IKeyboardButtonModel, IKeyboardModel } from "./IModels";
import keyboard from '../constants/keyboardButtons';
import { KeyboardButtonModel } from "./KeyboardButton";


export class KeyboardModel implements IKeyboardModel{
    keyboard: IKeyboardButtonModel[];
    constructor() {
        this.keyboard = [];
        keyboard.forEach(x => this.keyboard.push(new KeyboardButtonModel(x, ButtonStatus.NONE)));
    }
}