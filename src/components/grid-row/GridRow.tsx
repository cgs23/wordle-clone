import * as React from "react";
import GridCharacter from "../grid-character/GridCharacter";
import "./styles.css";
import { GridTileModel } from "../../models/GridTile";

interface GridRowProps {
  tiles: GridTileModel[];
  index: number;
}

const GridRow: React.FunctionComponent<GridRowProps> = ({ tiles, index }) => {
  const id: string = `row-${index}`;
  return (
    <div className="grid-row" id={id}>
      {tiles.map((tile: GridTileModel, idx: number) => (
        <GridCharacter
          tile={tile}
          key={`${index}-${idx}`}
          index={idx}
          rowIndex={index}
        />
      ))}
    </div>
  );
};

export default GridRow;
