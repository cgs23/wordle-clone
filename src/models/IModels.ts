import { ButtonStatus, CharacterStatus, GameStatus } from "../constants/enums";

export interface IGridModel{
    rows: IGridRowModel[];
    currentRow: number;
    currentTile: number;
    gameStatus: GameStatus;
    hiddenWord: string;
}

export interface IGridRowModel{
    tiles: IGridTileModel[];
}

export interface IGridTileModel{
    character: string;
    status: CharacterStatus;
}

export interface IKeyboardButtonModel{
    character: string,
    status: ButtonStatus
}

export interface IKeyboardModel{
    keyboard: IKeyboardButtonModel[]
}