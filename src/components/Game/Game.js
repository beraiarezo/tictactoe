import React from "react";
import Board from "./Board";

const Game = (props) => {
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
