import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";

const Game = ({ cells, onCellClick, showColors }) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={cells}
          onClick={(x, y) => onCellClick(x, y)}
          showColors={showColors}
        />
      </div>
    </div>
  );
};

Game.propTypes = {
  cells: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired,
  showColors: PropTypes.bool.isRequired,
};

export default Game;
