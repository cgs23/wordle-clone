import { GameStatus } from "../constants/enums";
import { GridRowModel } from "./GridRow";
import { IGridModel } from "./IModels";

export class GridModel implements IGridModel{
    rows!: GridRowModel[]
    currentRow: number;
    currentTile: number;
    gameStatus: GameStatus;
    hiddenWord: string;
    constructor(word: string){
        this.currentRow = 0;
        this.currentTile = 0;
        this.gameStatus = GameStatus.PLAYING;
        this.rows = [];
        this.hiddenWord = word;
        for (let index = 0; index < 6; index++) {
            this.rows.push(new GridRowModel());
        }
    }
}