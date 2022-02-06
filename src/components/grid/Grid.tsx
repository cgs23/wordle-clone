import * as React from "react";
import { useState } from "react";
import "./styles.css";
import GridRow from "../grid-row/GridRow";

const Grid: React.FunctionComponent = () => {
  const [gridState, setGridState] = useState([
    ["a", "b", "c", "d", "e"],
    ["f", "f", "f", "f", "f"],
    ["f", "f", "f", "f", "f"],
    ["f", "f", "f", "f", "f"],
    ["f", "f", "f", "f", "f"],
    ["f", "f", "f", "f", "f"],
  ]);
  
  return (
    <section className="container grid">
        {gridState.map((row: string[], index: number) => (
            <GridRow key={index} rowData={row} index={index} />
        ))}
    </section>
  );
};

export default Grid;
