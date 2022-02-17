import {CharacterStatus} from "../constants/gameStatus";
import { IGridTileModel } from "./IModels";

export class GridTileModel implements IGridTileModel{
    character: string;
    status: CharacterStatus;

    constructor(char: string, status: CharacterStatus) {
        this.character = char;
        this.status = status;
    }
}