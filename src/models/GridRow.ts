import { GridTileModel } from "./GridTile";
import { IGridRowModel } from "./IModels";
import { CharacterStatus } from "../constants/gameStatus";


export class GridRowModel implements IGridRowModel{
    tiles!: GridTileModel[];

    constructor(){
        this.tiles = [];
        for (let index = 0; index < 5; index++) {
            this.tiles.push(new GridTileModel('A', CharacterStatus.NONE));
        }
    }
}