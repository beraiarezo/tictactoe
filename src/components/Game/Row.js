import React from "react";

const Square = (props) => {
  return (
    <button
      className={props.value.color ? "square yellow" : "square EE"}
      onClick={props.onClick}
    >
      {props.value.value}
    </button>
  );
};

const Row = (props) => {
  return (
    <div className="board-row">
      {props.row.map((col, colIdx) => {
        return (
          <Square
            key={colIdx}
            value={props.row[colIdx]}
            onClick={() => props.onClick(props.rowIdx, colIdx)}
          />
        );
      })}
    </div>
  );
};

export default Row;
