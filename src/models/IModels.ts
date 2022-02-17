import { CharacterStatus, GameStatus } from "../constants/gameStatus";

export interface IGridModel{
    rows: IGridRowModel[];
    currentRow: number;
    currentTile: number;
    gameStatus: GameStatus
}

export interface IGridRowModel{
    tiles: IGridTileModel[];
}

export interface IGridTileModel{
    character: string;
    status: CharacterStatus;
}