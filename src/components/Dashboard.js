import React, { useState } from "react";
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
        splitedArr.push({ numb: i, value: "" });
        dashboard.push(splitedArr);
        splitedArr = [];
      } else {
        splitedArr.push({ numb: i, value: "" });
      }
    }

    setCells(dashboard);
    setWon(false);
  };

  const onCellClick = (x, y) => {
    if (!won) {
      let arr = cells;
      if (arr[x][y].value === "") {
        arr[x][y].value = cursor;
        setCells(arr);
        checkWinner(x, y, arr);
      }
    } else {
      alert("Please start game again.");
    }
  };

  const checkWinner = (x, y, arr) => {
    let winC = parseInt(winCount);
    let finished = false;

    // vertically check
    let verticallyCounter = 0;
    for (let i = 0; i < arr[x].length; i++) {
      verticallyCounter =
        arr[x][i].value === cursor ? verticallyCounter + 1 : 0;

      if (verticallyCounter === winC) {
        alert(`Player ${cursor} winnn`);
        setWon(true);
        finished = true;
      }
    }

    // horizontaly counter
    let horCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      horCounter = arr[i][y].value === cursor ? horCounter + 1 : 0;
      if (horCounter === winC) {
        alert(`Player ${cursor} win`);
        setWon(true);
        finished = true;
      }
    }

    let diagonalCounterX = 0;
    let diagonalCounterY = 0;
    let diff = x > y ? x - y : y - x;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        diagonalCounterX =
          arr[i][diff] && arr[i][diff].value === cursor
            ? diagonalCounterX + 1
            : 0;

        diagonalCounterY =
          arr[i][y + x] && arr[i][y + x].value === cursor
            ? diagonalCounterY + 1
            : 0;
      } else {
        diagonalCounterY =
          arr[i][y + x - i] && arr[i][y + x - i].value === cursor
            ? diagonalCounterY + 1
            : 0;

        diagonalCounterX =
          arr[i][diff + parseInt(i)] &&
          arr[i][diff + parseInt(i)].value === cursor
            ? diagonalCounterX + 1
            : 0;
      }

      if (diagonalCounterX === winC || diagonalCounterY === winC) {
        alert(`Player ${cursor} Win`);
        setWon(true);
        finished = true;
      }
    }

    if (x > y) {
      let diagonalX = 0;
      for (let j = x - y; j < arr.length; j++) {
        if (j === diff) {
          diagonalX =
            arr[j][0] && arr[j][0].value === cursor ? diagonalX + 1 : 0;
        } else {
          diagonalX =
            arr[j][parseInt(j) - diff] &&
            arr[j][parseInt(j) - diff].value === cursor
              ? diagonalX + 1
              : 0;
        }

        if (diagonalX === winC) {
          alert(`Player ${cursor} won`);
          setWon(true);
          finished = true;
        }
      }
    }

    setCursors(cursor === "X" ? "0" : "X");
    if (!finished) {
      checkIfDraw();
    }
  };

  const checkIfDraw = () => {
    let draw = true;
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        if (cells[i][j].value === "") {
          draw = false;
        }
      }
    }
    if (draw) {
      alert("draw");
    }
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <input
        type="number"
        placeholder="Columns"
        value={columns}
        onChange={(e) => setColumns(e.target.value)}
      />
      <input
        type="number"
        placeholder="Row"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />
      <input
        type="number"
        placeholder="Identifier win"
        value={winCount}
        onChange={(e) => setWinCount(e.target.value)}
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
