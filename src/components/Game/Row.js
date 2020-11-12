import React from "react";

const Square = (props) => {
  return (
    <button
      className={
        props.value.color && props.showColors ? "square yellow" : "square EE"
      }
      onClick={props.onClick}
    >
      {props.value.value}
    </button>
  );
};

const Row = (props) => {
  const clicker = (rowIdx, colIdx) => {
    props.onClick(rowIdx, colIdx);
  };

  return (
    <div className="board-row">
      {props.row.map((col, colIdx) => {
        return (
          <Square
            showColors={props.showColors}
            key={colIdx}
            value={props.row[colIdx]}
            onClick={() => clicker(props.rowIdx, colIdx)}
          />
        );
      })}
    </div>
  );
};

export default Row;
