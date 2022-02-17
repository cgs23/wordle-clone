export const SUBMIT = "SUBMIT";
export const DELETE_TILE = "DELETE_TILE";
export const ADD_TILE = "ADD_TILE";

interface SubmitAction{
    type: typeof SUBMIT;
}

interface DeleteTileAction{
    type: typeof DELETE_TILE;
}

interface AddTileAction{
    type: typeof ADD_TILE;
    payload: string;
}

export type Action = SubmitAction | DeleteTileAction | AddTileAction;

export const addTile = (letter: string): Action => ({type: ADD_TILE, payload: letter})

export const deleteTile = (): Action => ({type: DELETE_TILE})

export const submit = (): Action => ({type: SUBMIT})
