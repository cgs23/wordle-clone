import { ButtonStatus } from "../constants/enums";
import { IKeyboardButtonModel } from "./IModels";

export class KeyboardButtonModel implements IKeyboardButtonModel {
  character: string;
  status: ButtonStatus;

  constructor(char: string, status: ButtonStatus) {
    this.character = char;
    this.status = status;
  }
}
