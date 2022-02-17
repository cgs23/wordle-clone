import { createStore } from "redux";
import { GameStatus } from "../../constants/gameStatus";
import { GridModel } from "../../models/Grid";
import { Action, ADD_TILE, DELETE_TILE, SUBMIT } from "../actions/actions";
import { Store } from "../types/types";

const addTile = (letter: string, grid: GridModel): void => {
    if (grid.currentTile > 4){
        console.log('Word full -> Show error');
        return;
    }
    grid.rows[grid.currentRow].tiles[grid.currentTile].character = letter;
    grid.currentTile++;
    return;
}

const deleteTile = (grid: GridModel): void => {
    if (grid.currentTile === 0){
        console.log('Word empty -> Show error');
        return;
    }
    grid.rows[grid.currentRow].tiles[grid.currentTile].character = '';
    grid.currentTile--;
    return;
}

const submitLine = (grid: GridModel): void => {
    if (grid.gameStatus !== GameStatus.PLAYING) return;
    if (grid.currentTile !== 4){
        console.log('Not full word -> Show error');
        return;
    }
    console.log("Checking.. stuff");
    return;
}
const initialGrid: GridModel = new GridModel();

function reducer(state: Store = {
    grid: initialGrid,
    gameStatus: GameStatus.PLAYING
}, action: Action ) {
    switch (action.type){
        case ADD_TILE:
            addTile(action.payload, state.grid);
            return state;
        case DELETE_TILE:
            deleteTile(state.grid);
            return state;
        case SUBMIT:
            submitLine(state.grid);
            return state;
        default:
            return state;
    }
}

const store  = createStore(reducer);

export default store;