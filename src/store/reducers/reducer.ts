import { createStore } from "redux";
import { ButtonStatus, CharacterStatus, GameStatus } from "../../constants/enums";
import { GridModel } from "../../models/Grid";
import { GridRowModel } from "../../models/GridRow";
import { GridTileModel } from "../../models/GridTile";
import { KeyboardButtonModel } from "../../models/KeyboardButton";
import { KeyboardModel } from "../../models/KeyboardModel";
import { Action, ADD_TILE, DELETE_TILE, SUBMIT, INCREMENT_ROW, SET_ANIMATE, COLORIZE_KEYBOARD } from "../actions/actions";
import { Store } from "../types/types";

const addTile = (letter: string, grid: GridModel, animate: boolean): GridModel => {
    if (grid.currentTile > 4 || animate) return grid;
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

const deleteTile = (grid: GridModel, animate: boolean): GridModel => {
    if (grid.currentTile === 0 || animate) return grid;
    if (grid.gameStatus === GameStatus.PLAYING && grid.currentRow < 6){
        let newGridRows = grid.rows.slice();
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

const colorizeRow = (gridRow: GridRowModel, hiddenWord: string): GridRowModel => {
    const hiddenWordArr = hiddenWord.split('');

    const tiles: GridTileModel[] = gridRow.tiles;
    // First loop to find the correct letters, cause if we search for them together it creates some issues
    // that I don't feel like solving :D its 23:25 on a Friday cmon
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].character === hiddenWordArr[i]){
            tiles[i].status = CharacterStatus.CORRECT;
            hiddenWordArr[i] = "_";
        }
    }
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].status === CharacterStatus.CORRECT) continue;
        let idx: number = hiddenWordArr.indexOf(tiles[i].character);
        if (idx !== -1){
            tiles[i].status = CharacterStatus.MISPLACED;
            hiddenWordArr[idx] = "_";
        }
    }
    return {
        ...gridRow,
        tiles: tiles
    };
}

const submitLine = (grid: GridModel, animate: boolean): GridModel => {
    if (grid.gameStatus !== GameStatus.PLAYING || animate) return grid;
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
        alert('You win! :>');
        gameStatus = GameStatus.WIN;
    }
    else if (grid.currentRow === 5){
        alert('You lose :<');
        gameStatus = GameStatus.LOSE;
    }
    // colorize the letters
    let newGridRows: GridRowModel[] = grid.rows;
    newGridRows[grid.currentRow] = colorizeRow(grid.rows[grid.currentRow], grid.hiddenWord);
    return {
        ...grid,
        rows: newGridRows,
        gameStatus: gameStatus,
        currentRow: grid.currentRow,
        currentTile: 0
    }
}

const incrementRow = (grid: GridModel): GridModel => {
    if (grid.currentRow === 6){
        console.log('you lost anyway so, lol');
        return grid;
    }
    return {
        ...grid,
        currentRow: grid.currentRow + 1
    }
}

const colorizeKeyboard = (grid: GridModel,keyboard: KeyboardModel): KeyboardModel => {
    let newKeyboard: KeyboardButtonModel[] = keyboard.keyboard.slice();
    let idx: number
    grid.rows.forEach(row => {
        row.tiles.forEach(tile => {
            if (tile.character !== ''){
                idx = keyboard.keyboard.map(x => x.character).indexOf(tile.character);
                switch (tile.status) {
                    case CharacterStatus.CORRECT:
                    if (idx !== -1)
                        keyboard.keyboard[idx].status = ButtonStatus.CORRECT;
                        break;
                    case CharacterStatus.INCORRECT:
                        if (idx !== -1 && keyboard.keyboard[idx].status === ButtonStatus.NONE)
                            keyboard.keyboard[idx].status = ButtonStatus.INCORRECT;
                        break;
                    case CharacterStatus.MISPLACED:
                        if (idx !== -1 && keyboard.keyboard[idx].status === ButtonStatus.NONE)
                            keyboard.keyboard[idx].status = ButtonStatus.MISSPLACED;
                        break;
                    default:
                        break;
                }
            }
        })
    });
    console.log(newKeyboard);
    
    return {
        ...keyboard,
        keyboard: newKeyboard
    }
}

const initialGrid: GridModel = new GridModel('HELLO');
const initialKeyboard: KeyboardModel = new KeyboardModel();

function reducer(state: Store = {
    grid: initialGrid,
    gameStatus: GameStatus.PLAYING,
    animate: false,
    keyboard: initialKeyboard
}, action: Action ) {
    switch (action.type){
        case ADD_TILE:
            return{
                ...state,
                grid: addTile(action.payload, state.grid, state.animate)
            }
        case DELETE_TILE:
            return{
                ...state,
                grid: deleteTile(state.grid, state.animate)
            }
        case SUBMIT:
            return {
                ...state,
                grid: submitLine(state.grid, state.animate)
            }
        case INCREMENT_ROW:
            return {
                ...state,
                grid: incrementRow(state.grid)
            }
        case SET_ANIMATE:
            return {
                ...state,
                animate: action.payload
            }
        case COLORIZE_KEYBOARD:
            return {
                ...state,
                keyboard: colorizeKeyboard(state.grid, state.keyboard)
            };
        default:
            return state;
    }
}

const store  = createStore(reducer);

export default store;