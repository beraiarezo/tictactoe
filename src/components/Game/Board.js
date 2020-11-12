import React from "react";
import Row from "./Row";

const Board = ({ squares, onClick }) => {
  return (
    <div className={squares.length > 10 ? "board-wrapper" : ""}>
      {squares.map((row, i) => (
        <Row key={i} row={row} rowIdx={i} onClick={onClick} />
      ))}
    </div>
  );
};

export default Board;
