import * as React from "react";
import "./styles.css";
import GridRow from "../grid-row/GridRow";
import { useSelector } from "react-redux";
import { Store } from "../../store/types/types";
import { GridRowModel } from "../../models/GridRow"
import { GameStatus } from "../../constants/enums";
import toast from "react-hot-toast";

const Grid: React.FunctionComponent = () => {

  const gridState = useSelector((state: Store) => state.grid);
  const animate = useSelector((state: Store) => state.animate);

  React.useEffect(() => {
    if(gridState.gameStatus === GameStatus.WIN && !animate){
      toast('yay')!
    }
    if(gridState.gameStatus === GameStatus.LOSE && !animate){
      toast('nay :<')
    }
  })


  return (
    <section className="grid">
        {gridState.rows.map((row: GridRowModel, index: number) => (
            <GridRow key={index} tiles={row.tiles} index={index} />
        ))}
    </section>
  );
};

export default Grid;
