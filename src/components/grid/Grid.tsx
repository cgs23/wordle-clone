import * as React from "react";
import { useState } from "react";
import "./styles.css";
import GridRow from "../grid-row/GridRow";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../store/types/types";
import { GridRowModel } from "../../models/GridRow"

const Grid: React.FunctionComponent = () => {

  const gridState = useSelector((state: Store) => state.grid);
  
  return (
    <section className="container grid">
        {gridState.rows.map((row: GridRowModel, index: number) => (
            <GridRow key={index} tiles={row.tiles} index={index} />
        ))}
    </section>
  );
};

export default Grid;
