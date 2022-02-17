import * as React from "react";
import { useState, useCallback } from "react";
import "./styles.css";

interface KeyboardButtonProps {
  character: string;
  keyPressHandle(button: string): void;
}

const KeyboardButton: React.FunctionComponent<KeyboardButtonProps> = ({
  character,
  keyPressHandle,
}) => {
  const id: string = `${character}-button`;

  const onClick = React.useCallback(() => {
    keyPressHandle(character);
  }, [character, keyPressHandle]);

  return (
    <button className="keyboard-button" onClick={onClick} id={id}>
      {character}
    </button>
  );
};

export default KeyboardButton;
