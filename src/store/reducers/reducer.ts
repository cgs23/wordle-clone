import { createStore } from "redux";
import { GameStatus } from "../../constants/gameStatus";
import { GridModel } from "../../models/Grid";
import { Action, ADD_TILE, DELETE_TILE, SUBMIT } from "../actions/actions";
import { Store } from "../types/types";

const addTile = (letter: string, grid: GridModel): GridModel => {
    if (grid.currentTile > 4){
        console.log('Word full -> Show error');
        return grid;
    }
    if (grid.gameStatus === GameStatus.PLAYING && grid.currentRow < 6){
        let newGridRows = grid.rows.slice();
        newGridRows[grid.currentRow].tiles[grid.currentTile].character = letter;
        return {
            ...grid,
            rows: newGridRows,
            currentTile: grid.currentTile + 1
        };
    }
    else {
        console.log('The game is over!');
        return grid;
    }
}

const deleteTile = (grid: GridModel): GridModel => {
    if (grid.currentTile === 0){
        console.log('Word empty -> Show error');
        return grid;
    }
    if (grid.gameStatus === GameStatus.PLAYING && grid.currentRow < 6){
        let newGridRows = grid.rows.slice();
        console.log('in delete');
        console.log(grid);
        newGridRows[grid.currentRow].tiles[grid.currentTile-1].character = '';
        return {
            ...grid,
            rows: newGridRows,
            currentTile: grid.currentTile - 1
        };
    }
    else {
        console.log('The game is over!');
        return grid;
    }
}

const submitLine = (grid: GridModel): GridModel => {
    if (grid.gameStatus !== GameStatus.PLAYING) return grid;    
    if (grid.currentTile !== 5){
        console.log('Not full word -> Show error');
        return grid;
    }
    // check for word
    // if it is correct -> change game state to win
    // green letters
    const guess = grid.rows[grid.currentRow].tiles.map(x => x.character).join('');
    let gameStatus: GameStatus = GameStatus.PLAYING;
    if (guess === grid.hiddenWord){
        console.log('YOU WIN!');
        gameStatus = GameStatus.WIN;
    }
    else if (grid.currentRow === 5){
        console.log('You lose :<');
        gameStatus = GameStatus.LOSE;
    }
    // colorize the letters 
    return {
        ...grid,
        gameStatus: gameStatus,
        currentRow: grid.currentRow + 1,
        currentTile: 0
    }
}
const initialGrid: GridModel = new GridModel();

function reducer(state: Store = {
    grid: initialGrid,
    gameStatus: GameStatus.PLAYING
}, action: Action ) {
    switch (action.type){
        case ADD_TILE:
            return{
                ...state,
                grid: addTile(action.payload, state.grid)
            }
        case DELETE_TILE:
            return{
                ...state,
                grid: deleteTile(state.grid)
            }
        case SUBMIT:
            return {
                ...state,
                grid: submitLine(state.grid)
            }
        default:
            return state;
    }
}

const store  = createStore(reducer);

export default store;