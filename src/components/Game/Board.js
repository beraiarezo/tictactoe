import React from "react";
import Row from "./Row";

const Board = ({ squares, showColors, onClick }) => {
  return (
    <div className={squares.length > 10 ? "board-wrapper" : ""}>
      {squares.map((row, i) => (
        <Row
          key={i}
          row={row}
          rowIdx={i}
          onClick={onClick}
          showColors={showColors}
        />
      ))}
    </div>
  );
};

export default Board;
