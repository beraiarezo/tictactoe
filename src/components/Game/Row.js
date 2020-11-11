import React, { Component } from "react";

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={props.isHighLight ? { backgroundColor: "Yellow" } : {}}
    >
      {props.value.value}
    </button>
  );
}

const Row = (props) => {
  const clicker = (rowIdx, colIdx) => {
    props.onClick(rowIdx, colIdx);
  };

  return (
    <div className="board-row">
      {props.row.map((col, colIdx) => {
        const isHighLight =
          props.highLights.filter((highLight) => {
            return highLight.x === props.rowIdx && highLight.y === colIdx;
          }).length > 0;

        return (
          <Square
            key={colIdx}
            isHighLight={isHighLight}
            value={props.row[colIdx]}
            onClick={() => clicker(props.rowIdx, colIdx)}
          />
        );
      })}
    </div>
  );
};

export default Row;
