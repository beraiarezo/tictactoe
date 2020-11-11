import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";

const Game = ({ cells, onCellClick }) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={cells} onClick={(x, y) => onCellClick(x, y)} />
      </div>
    </div>
  );
};

Game.propTypes = {
  cells: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default Game;
