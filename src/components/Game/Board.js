import React, { Component } from "react";
import Row from "./Row";

const Board = (props) => {
  const { squares } = props;
  console.log(squares.length, squares, "squares");
  return (
    <div className={squares.length > 50 ? "board-wrapper" : ""}>
      {squares.map((row, i) => (
        <Row key={i} row={row} rowIdx={i} onClick={props.onClick} />
      ))}
    </div>
  );
};

export default Board;
