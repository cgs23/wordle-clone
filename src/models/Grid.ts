import { GameStatus } from "../constants/enums";
import { GridRowModel } from "./GridRow";
import { IGridModel } from "./IModels";
import answers from "../constants/answers";
import seedrandom from 'seedrandom';

export class GridModel implements IGridModel {
  rows!: GridRowModel[];
  currentRow: number;
  currentTile: number;
  gameStatus: GameStatus;
  hiddenWord: string;
  constructor() {
    this.currentRow = 0;
    this.currentTile = 0;
    let rng = seedrandom(new Date().toDateString());
    this.gameStatus = GameStatus.PLAYING;
    this.rows = [];
    console.log(Math.floor(rng() * answers.length));
    
    const idx = Math.floor(rng() * answers.length);
    this.hiddenWord = answers[idx];
    for (let index = 0; index < 6; index++) {
      this.rows.push(new GridRowModel());
    }
  }
}
