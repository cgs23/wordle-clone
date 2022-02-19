import { GameStatus } from "../../constants/enums";
import { IGridModel, IKeyboardModel } from "../../models/IModels";

export interface Store {
    grid: IGridModel,
    gameStatus: GameStatus,
    animate: boolean,
    keyboard: IKeyboardModel
}