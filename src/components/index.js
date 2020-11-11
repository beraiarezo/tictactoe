import React, { useState } from "react";
import Game from "./Game/Game";

export const Dashboard = () => {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(3);
  const [winCount, setWinCount] = useState(3);
  const [cells, setCells] = useState(3);
  const drawBoard = () => {
    let dashboard = [];
    let simple = [];

    for (let i = 1; i <= rows * columns; i++) {
      if (i % columns === 0) {
        simple.push({ numb: i, value: "" });
        dashboard.push(simple);
        simple = [];
      } else {
        simple.push({ numb: i, value: "" });
      }
    }

    setCells(dashboard);
  };

  const onCellClick = (x, y, cursor) => {
    let arr = cells;
    if(arr[x][y].value === "") {
    arr[x][y].value = cursor;
    setCells(arr);
    checkWinner(x, y, arr, cursor)
    }
  };

  const checkWinner = (x, y, arr, cursor) => {
    console.log(x, y, arr, "aarrs ", cursor, winCount)

    // vertically check
    let verticallyCounter = 0
    for(let i = 0; i < arr[x].length; i++) {
      if(arr[x][i].value === cursor) {
        verticallyCounter++
      } else {
        verticallyCounter = 0
      }
      if(verticallyCounter === winCount) {
        alert(`Player ${cursor} win`)
      }
    }
    // horizontaly counter
    let horCounter = 0
    for(let i=0; i < arr.length; i++) {
      if(arr[i][y].value === cursor) {
        horCounter++
      } else {
        horCounter = 0
      }
      if(horCounter === winCount) {
        console.log("")
        alert(`Player ${cursor} win`)
      }
    }

    let diagonalCounterX = 0
    let diagonalCounterY = 0
    let diff = x > y ? x-y : y-x
    console.log(diff, "dif")
      for(let i = 0; i < arr.length; i++) {
        if(i === 0) {
            // console.log(arr[i][diff], "/", arr[i][y+x])
            if(arr[i][diff] && arr[i][diff].value === cursor) {
              diagonalCounterX++
            } else {
              diagonalCounterX = 0
            }

            if(arr[i][y+x] && arr[i][y + x].value === cursor) {
              diagonalCounterY++
            } else {
              diagonalCounterY = 0
            }

        } else {
          // console.log(arr[i][diff + parseInt(i)], "ii", arr[i][(y+x) - i])
          if(arr[i][(y+x) - i] && arr[i][(y+x) - i].value === cursor) {
            diagonalCounterY++
          } else {
            diagonalCounterY = 0
          }

          if(arr[i][diff + parseInt(i)] && arr[i][diff + parseInt(i)].value === cursor) {
            diagonalCounterX++
          } else {
            diagonalCounterX = 0
          }
        }
        
        // console.log(diagonalCounterX, "diagonalCounterX")
        if(diagonalCounterX === winCount || diagonalCounterY === winCount) {
          alert(`Player ${cursor} Win`)
        }
      }
   
      if(x > y) {
      for(let j = x - y; j < arr.length; j++) {
        if(j === diff) {
          console.log(arr[j][diff - diff], "ii", arr[j][(y+x) - j], j, 'jj')
        } else {
          console.log(arr[j][parseInt(j) - diff], "iooo", arr[j][(y+x) - j], j, 'jj')

        }
        // for(let i = 0; i < arr[j].length; j++) {
        //   if(arr[j][i] === cursor) {

        //   }
        // }
      }

    }

  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <input
        type="text"
        placeholder="columns"
        value={columns}
        onChange={(e) => setColumns(e.target.value)}
      />
      <input
        type="text"
        placeholder="row"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />
      <input
        type="text"
        placeholder="win count"
        value={winCount}
        onChange={(e) => setWinCount(e.target.value)}
      />
      <div onClick={drawBoard}>Start Game</div>

      <div>
        {cells.length > 0 ? (
          <Game cells={cells} onCellClick={onCellClick} />
        ) : null}
      </div>
    </div>
  );
};
