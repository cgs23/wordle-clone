export const SUBMIT = "SUBMIT";
export const DELETE_TILE = "DELETE_TILE";
export const ADD_TILE = "ADD_TILE";
export const INCREMENT_ROW = "INCREMENT_ROW";
export const SET_ANIMATE = "SET_ANIMATE";
export const COLORIZE_KEYBOARD = "COLORIZE_KEYBOARD";

interface SubmitAction {
  type: typeof SUBMIT;
}

interface DeleteTileAction {
  type: typeof DELETE_TILE;
}

interface AddTileAction {
  type: typeof ADD_TILE;
  payload: string;
}

interface IncrementRowAction {
  type: typeof INCREMENT_ROW;
}

interface SetAnimateAction {
  type: typeof SET_ANIMATE;
  payload: boolean;
}

interface ColorizeKeyboardAction {
  type: typeof COLORIZE_KEYBOARD;
}

export type Action =
  | SubmitAction
  | DeleteTileAction
  | AddTileAction
  | IncrementRowAction
  | SetAnimateAction
  | ColorizeKeyboardAction;

export const addTile = (letter: string): Action => ({
  type: ADD_TILE,
  payload: letter,
});

export const deleteTile = (): Action => ({ type: DELETE_TILE });

export const submit = (): Action => ({ type: SUBMIT });

export const incrementRow = (): Action => ({ type: INCREMENT_ROW });

export const setAnimate = (animate: boolean): Action => ({
  type: SET_ANIMATE,
  payload: animate,
});

export const colorizeKeyboard = (): Action => ({ type: COLORIZE_KEYBOARD });
