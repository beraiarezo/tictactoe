import React, { Component } from "react";
import Row from "./Row";

const Board = (props) => {
  const { squares, highLights } = props;
  return (
    <div>
      {squares.map((row, i) => (
        <Row
          key={i}
          highLights={highLights}
          row={row}
          rowIdx={i}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
};

export default Board;
