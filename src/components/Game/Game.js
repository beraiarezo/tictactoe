import React, { useState } from "react";
import Board from "./Board";
// import { calculateWinner, cloneNestedArray } from "../utils";

const Game = (props) => {
  const [cursor, setCursors] = useState("X");

  const handleClick = (x, y) => {
    props.onCellClick(x, y);
    setCursors(cursor === "X" ? "0" : "X");
  };
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={props.cells}
          onClick={(x, y) => props.onCellClick(x, y)}
        />
      </div>
    </div>
  );
};

export default Game;
