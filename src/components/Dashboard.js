import React, { useState } from "react";
import { SearchCheckWay } from "./Utils";
import Game from "./Game/Game";

export const Dashboard = () => {
  const [columns, setColumns] = useState("");
  const [rows, setRows] = useState("");
  const [winCount, setWinCount] = useState("");
  const [cells, setCells] = useState([]);
  const [won, setWon] = useState(false);
  const [cursor, setCursors] = useState("X");

  const drawBoard = () => {
    if (parseInt(columns) < 3 || parseInt(rows) < 3 || parseInt(winCount) < 3) {
      alert("Min colums:3, Min rows: 3, Min win identifier: 3");
      return;
    }
    let dashboard = [];
    let splitedArr = [];

    for (let i = 1; i <= rows * columns; i++) {
      if (i % columns === 0) {
        splitedArr.push({ numb: i, value: "", color: null });
        dashboard.push(splitedArr);
        splitedArr = [];
      } else {
        splitedArr.push({ numb: i, value: "", color: null });
      }
    }
    setCells(dashboard);
    setWon(false);
  };

  const onCellClick = (x, y) => {
    if (!won) {
      if (cells[x][y].value === "") {
        cells[x][y].value = cursor;
        let caluclatedData = SearchCheckWay(x, y, cells, cursor, winCount);
        if (caluclatedData && caluclatedData.win) {
        }
        setCells(cells);
        setCursors(cursor === "X" ? "0" : "X");
      }
    } else {
      alert("Please start game again.");
    }
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <input
        type="number"
        placeholder="Columns"
        value={columns}
        onChange={(e) => setColumns(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Row"
        value={rows}
        onChange={(e) => setRows(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Identifier win"
        value={winCount}
        onChange={(e) => setWinCount(parseInt(e.target.value))}
      />
      <div onClick={drawBoard} className="start-game">
        Start Game
      </div>

      <div>
        {cells.length > 0 ? (
          <Game cells={cells} onCellClick={onCellClick} />
        ) : null}
      </div>
    </div>
  );
};
