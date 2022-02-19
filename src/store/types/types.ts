import { GameStatus } from "../../constants/gameStatus";
import { GridModel } from "../../models/Grid";

export interface Store {
    grid: GridModel,
    gameStatus: GameStatus,
    animate: boolean
}