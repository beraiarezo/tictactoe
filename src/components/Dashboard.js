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
    // vertically check
    let verticallyCounter = 0;
    for (let i = 0; i < arr[x].length; i++) {
      if (arr[x][i].value === cursor) {
        verticallyCounter++;
      } else {
        verticallyCounter = 0;
      }

      if (verticallyCounter === winC) {
        alert(`Player ${cursor} win`);
        setWon(true);
      }
    }
    // horizontaly counter
    let horCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][y].value === cursor) {
        horCounter++;
      } else {
        horCounter = 0;
      }
      if (horCounter === winC) {
        alert(`Player ${cursor} win`);
        setWon(true);
      }
    }

    let diagonalCounterX = 0;
    let diagonalCounterY = 0;
    let diff = x > y ? x - y : y - x;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        if (arr[i][diff] && arr[i][diff].value === cursor) {
          diagonalCounterX++;
        } else {
          diagonalCounterX = 0;
        }

        if (arr[i][y + x] && arr[i][y + x].value === cursor) {
          diagonalCounterY++;
        } else {
          diagonalCounterY = 0;
        }
      } else {
        if (arr[i][y + x - i] && arr[i][y + x - i].value === cursor) {
          diagonalCounterY++;
        } else {
          diagonalCounterY = 0;
        }

        if (
          arr[i][diff + parseInt(i)] &&
          arr[i][diff + parseInt(i)].value === cursor
        ) {
          diagonalCounterX++;
        } else {
          diagonalCounterX = 0;
        }
      }

      if (diagonalCounterX === winC || diagonalCounterY === winC) {
        alert(`Player ${cursor} Win`);
        setWon(true);
      }
    }

    if (x > y) {
      let diagonalX = 0;
      for (let j = x - y; j < arr.length; j++) {
        if (j === diff) {
          if (arr[j][diff - diff] && arr[j][diff - diff].value === cursor) {
            diagonalX++;
          } else {
            diagonalX = 0;
          }
        } else {
          if (
            arr[j][parseInt(j) - diff] &&
            arr[j][parseInt(j) - diff].value === cursor
          ) {
            diagonalX++;
          } else {
            diagonalX = 0;
          }
        }
        if (diagonalX === winC) {
          alert(`Player ${cursor} won`);
          setWon(true);
        }
      }
    }

    setCursors(cursor === "X" ? "0" : "X");
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
