import * as React from "react";
import "./styles.css";
import KeyboardButton from "../keyboard-button/KeyboardButton";
import { useDispatch, useSelector } from "react-redux";
import {
  submit,
  addTile,
  deleteTile,
  incrementRow,
  setAnimate,
} from "../../store/actions/actions";
import { Store } from "../../store/types/types";
import { IKeyboardButtonModel } from "../../models/IModels";
import { GridModel } from "../../models/Grid";
import toast from "react-hot-toast";
import { GameStatus } from "../../constants/enums";
import validWords from "../../constants/validWords";

const Keyboard: React.FunctionComponent = () => {
  const animate: boolean = useSelector((state: Store) => state.animate);
  const keyboard: IKeyboardButtonModel[] = useSelector(
    (state: Store) => state.keyboard.keyboard
  );
  const gridState: GridModel = useSelector((state: Store) => state.grid);
  const dispatch = useDispatch();

  const isSubmitable: boolean = React.useMemo(() => {
    return gridState.currentTile === 5;
  }, [gridState.currentTile]);

  const isWordValid = React.useCallback(() => {
    const guess = gridState.rows[gridState.currentRow].tiles
      .map((x) => x.character)
      .join("");
    return validWords.indexOf(guess) !== -1;
  }, [gridState.currentRow, gridState.rows]);

  const buttonPressHandle = (button: string) => {
    switch (button) {
      case "<<":
        dispatch(deleteTile());
        break;
      case "Enter":
        if (!isSubmitable && gridState.gameStatus === GameStatus.PLAYING)
          toast("Please fill all the letters");
        if (!isWordValid() && isSubmitable) toast("Word is not valid");
        if (!animate && isSubmitable && isWordValid()) {
          dispatch(submit());
          dispatch(setAnimate(true));
          dispatch(incrementRow());
        }
        break;
      default:
        dispatch(addTile(button));
        break;
    }
  };

  return (
    <section className="keyboard">
      {keyboard.map((button) => (
        <KeyboardButton
          key={button.character}
          character={button.character}
          buttonStatus={button.status}
          keyPressHandle={buttonPressHandle}
        />
      ))}
    </section>
  );
};

export default Keyboard;
