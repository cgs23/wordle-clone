import * as React from "react";
import { ButtonStatus } from "../../constants/enums";
import "./styles.css";

interface KeyboardButtonProps {
  character: string;
  buttonStatus: ButtonStatus;
  keyPressHandle(button: string): void;
}

const KeyboardButton: React.FunctionComponent<KeyboardButtonProps> = ({
  character,
  buttonStatus,
  keyPressHandle,
}) => {
  const id: string = `${character}-button`;
  const className = React.useMemo(() => {
    let className = "keyboard-button";
    switch (buttonStatus) {
      case ButtonStatus.CORRECT:
        className = className + " correct";
        break;
      case ButtonStatus.INCORRECT:
        className = className + " incorrect";
        break;
      case ButtonStatus.MISSPLACED:
        className = className + " missplaced";
        break;
      case ButtonStatus.NONE:
      default:
        break;
    }
    return className;
  }, [buttonStatus]);
  const onClick = React.useCallback(() => {
    keyPressHandle(character);
  }, [character, keyPressHandle]);

  return (
    <button className={className} onClick={onClick} id={id}>
      {character}
    </button>
  );
};

export default KeyboardButton;
