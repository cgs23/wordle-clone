import { GameStatus } from "../../constants/enums";
import { GridModel } from "../../models/Grid";
import { IGridModel, IKeyboardModel } from "../../models/IModels";
import { KeyboardModel } from "../../models/KeyboardModel";

export const STORAGE_KEY = "game-state";

export interface Store {
  grid: IGridModel;
  gameStatus: GameStatus;
  animate: boolean;
  keyboard: IKeyboardModel;
  date: string;
  wasSaved: boolean;
}

export class Store implements Store {
  grid: IGridModel;
  gameStatus: GameStatus;
  animate: boolean;
  keyboard: IKeyboardModel;
  date: string;
  wasSaved: boolean;
  savedRow: number;

  constructor() {
    const storageValue = localStorage.getItem(STORAGE_KEY);
    if (
      storageValue !== null &&
      JSON.parse(storageValue).date === new Date().toLocaleDateString()
    ) {
      const state: Store = JSON.parse(storageValue);
      this.grid = state.grid;
      this.animate = false;
      this.keyboard = state.keyboard;
      this.date = state.date;
      this.gameStatus = state.gameStatus;
      this.wasSaved = true;
      this.savedRow = state.savedRow;
    } else {
      localStorage.removeItem(STORAGE_KEY);
      this.grid = new GridModel();
      this.gameStatus = GameStatus.PLAYING;
      this.animate = false;
      this.keyboard = new KeyboardModel();
      this.date = new Date().toLocaleDateString();
      this.wasSaved = false;
      this.savedRow = 0;
    }
  }
}
