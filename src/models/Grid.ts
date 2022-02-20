import { GameStatus } from "../constants/enums";
import { GridRowModel } from "./GridRow";
import { IGridModel } from "./IModels";
import answers from '../constants/answers';

export class GridModel implements IGridModel{
    rows!: GridRowModel[]
    currentRow: number;
    currentTile: number;
    gameStatus: GameStatus;
    hiddenWord: string;
    constructor(){
        this.currentRow = 0;
        this.currentTile = 0;
        this.gameStatus = GameStatus.PLAYING;
        this.rows = [];
        const idx = Math.floor(Math.random() * answers.length);
        this.hiddenWord = answers[idx];
        for (let index = 0; index < 6; index++) {
            this.rows.push(new GridRowModel());
        }
    }
}