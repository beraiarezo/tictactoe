// left bottom to up right
const SearchLeftBottomToUpRight = (x, y, cursor, arr, winCount) => {
  let data = {};
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      counter =
        arr[i][y + x] && arr[i][y + x].value === cursor ? counter + 1 : 0;
      // if (arr[i][y + x]) {
      //   arr[i][y + x].color =
      //     arr[i][y + x] && arr[i][y + x].value === cursor ? "yellow" : null;
      // }
    } else {
      counter =
        arr[i][y + x - i] && arr[i][y + x - i].value === cursor
          ? counter + 1
          : 0;

      // if (arr[i][y + x - i] && arr[i][y + x - i].color) {
      //   arr[i][y + x - i].color =
      //     arr[i][y + x - i].value === cursor ? "yellow" : null;
      // }
    }
    if (counter === winCount) {
      alert(`Win ${cursor}, SearchLeftBottomToUpRight`);
      data.win = true;
      data.finished = true;
      data.arr = SearchColorLeftBottomToUpRight(x, y, cursor, arr, winCount);
    }
  }
  return data;
};

const SearchColorLeftBottomToUpRight = (x, y, cursor, arr, winCount) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[i][y + x] && arr[i][y + x].value === cursor) {
        arr[i][y + x].color = "yellow";
        counter++;
      } else {
        arr[i][y + x].color = null;
        counter = 0;
      }
    } else {
      if (arr[i][y + x - i] && arr[i][y + x - i].value === cursor) {
        arr[i][y + x - i].color = "yellow";
        counter++;
      } else if (arr[i][y + x - i]) {
        for (let k = 0; k < i; k++) {
          arr[k][y + x - k].color = null;
          counter = 0;
        }
      }
    }
    if (counter === winCount) {
      return arr;
    }
  }
};

//  top lef to right bottom
const SearchLeftTopToRigthBottom = (x, y, cursor, arr, winCount) => {
  let counter = 0;
  let data = { win: false, arr: arr };
  let diff = x > y ? x - y : y - x;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      counter = arr[i][diff] && arr[i][diff].value === cursor ? counter + 1 : 0;
    } else {
      counter =
        arr[i][diff + parseInt(i)] &&
        arr[i][diff + parseInt(i)].value === cursor
          ? counter + 1
          : 0;
    }

    if (counter === winCount) {
      alert(`Player ${cursor} Win SearchLeftTopToRigthBottom`);
      data.win = true;
      data.finished = true;
      data.arr = SeachColorLeftoTopToRightBottom(x, y, cursor, arr, winCount);
    }
  }
  return data;
};

const SeachColorLeftoTopToRightBottom = (x, y, cursor, arr, winCount) => {
  let counter = 0;
  let diff = x > y ? x - y : y - x;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[i][diff] && arr[i][diff].value === cursor) {
        counter++;
        arr[i][diff].color = "yellow";
      } else {
        counter = 0;
        arr[i][diff].color = null;
      }
    } else {
      if (
        arr[i][diff + parseInt(i)] &&
        arr[i][diff + parseInt(i)].value === cursor
      ) {
        arr[i][diff + parseInt(i)].color = "yellow";
        counter++;
      } else if (arr[i][diff + parseInt(i)]) {
        for (let k = 0; k < i; k++) {
          arr[k][diff + parseInt(k)].color = null;
        }
        counter = 0;
      }
    }

    if (counter === winCount) {
      return arr;
    }
  }
};

// SearchDiagonal
const SearchDiagonal = (x, y, cursor, arr, winCount) => {
  let data = { win: false, arr: arr };
  let diff = x > y ? x - y : y - x;

  if (x > y) {
    let counter = 0;
    for (let j = x - y; j < arr.length; j++) {
      if (j === diff) {
        counter = arr[j][0] && arr[j][0].value === cursor ? counter + 1 : 0;

        // if (arr[j][0] && arr[j][0].color) {
        //   arr[j][0].color =
        //     arr[j][0] && arr[j][0].value === cursor ? "yellow" : null;
        // }
      } else {
        counter =
          arr[j][parseInt(j) - diff] &&
          arr[j][parseInt(j) - diff].value === cursor
            ? counter + 1
            : 0;

        // if (arr[j][parseInt(j) - diff] && arr[j][parseInt(j) - diff].color) {
        //   arr[j][parseInt(j) - diff].color = arr[j][parseInt(j) - diff].color =
        //     arr[j][parseInt(j) - diff] &&
        //     arr[j][parseInt(j) - diff].value === cursor
        //       ? "yellow"
        //       : null;
        // }
      }

      if (counter === winCount) {
        alert(`Player ${cursor} won, diagonalX`);
        data.win = true;
        data.finished = true;
        data.arr = SearchColorDiagonal(x, y, cursor, arr, winCount);
      }
    }
  }
  return data;
};

const SearchColorDiagonal = (x, y, cursor, arr, winCount) => {
  let diff = x > y ? x - y : y - x;
  if (x > y) {
    let counter = 0;
    for (let j = x - y; j < arr.length; j++) {
      if (j === diff) {
        if (arr[j][0] && arr[j][0].value === cursor) {
          counter++;
          arr[j][0].color = "yellow";
        } else {
          counter = 0;
          arr[j][0].color = null;
        }
      } else {
        if (
          arr[j][parseInt(j) - diff] &&
          arr[j][parseInt(j) - diff].value === cursor
        ) {
          arr[j][parseInt(j) - diff].color = "yellow";
          counter++;
        } else if (arr[j][parseInt(j) - diff]) {
          for (let k = x - y; k < j; k++) {
            arr[k][parseInt(k) - diff].color = null;
          }
          counter = 0;
        }
      }

      if (counter === winCount) {
        return arr;
      }
    }
  }
};

// left to right
const SearchLeftToRight = (x, y, cursor, arr, winCount) => {
  let data = { win: false, arr: arr };
  let counter = 0;
  for (let i = 0; i < arr[x].length; i++) {
    counter = arr[x][i].value === cursor ? counter + 1 : 0;
    if (counter === winCount) {
      alert(`Player ${cursor} win SearchLeftToRight`);
      data.win = true;
      data.finished = true;
      data.arr = SearchColorsLeftToRight(x, y, cursor, arr, winCount);
    }
  }
  return data;
};

const SearchColorsLeftToRight = (x, y, cursor, arr, winCount) => {
  let counter = 0;
  for (let i = 0; i < arr[x].length; i++) {
    if (arr[x][i] && arr[x][i].value === cursor) {
      counter++;
      arr[x][i].color = "yellow";
    } else if (arr[x][i]) {
      for (let j = 0; j < i; j++) {
        arr[x][j].color = null;
      }
      counter = 0;
    }

    if (counter === winCount) {
      return arr;
    }
  }

  return arr;
};

// top to bottom
const SearchTopToBottom = (x, y, cursor, arr, winCount) => {
  let data = { win: false, arr: arr };

  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter = arr[i][y].value === cursor ? counter + 1 : 0;
    if (counter === winCount) {
      alert(`Player ${cursor} win, SearchTopToBottom`);
      data.win = true;
      data.finished = true;
      data.arr = SearchColorsTopToBottom(x, y, cursor, arr, winCount);
    }
  }
  return data;
};

const SearchColorsTopToBottom = (x, y, cursor, arr, winCount) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][y] && arr[i][y].value === cursor) {
      arr[i][y].color = "yellow";
      counter++;
    } else if (arr[i][y] && i !== 0) {
      for (let j = 0; j < i; j++) {
        arr[j][y].color = null;
      }
      counter = 0;
    }

    if (counter === winCount) {
      return arr;
    }
  }

  return arr;
};

// draw
const checkIfDraw = (cells) => {
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
    return { win: false, arr: cells, draw: true };
  }

  return { win: false, arr: cells, draw: false };
};

//  search
export const SearchCheckWay = (x, y, arr, cursor, winCount) => {
  let data = {
    win: false,
    arr: null,
    draw: false,
  };
  data = SearchLeftToRight(x, y, cursor, arr, winCount);
  if (data.win) {
    return data;
  }

  data = SearchTopToBottom(x, y, cursor, arr, winCount);
  if (data.win) {
    return data;
  }

  data = SearchLeftBottomToUpRight(x, y, cursor, arr, winCount);
  if (data.win) {
    return data;
  }

  data = SearchLeftTopToRigthBottom(x, y, cursor, arr, winCount);

  if (data.win) {
    return data;
  }

  data = SearchDiagonal(x, y, cursor, arr, winCount);

  if (data.win) {
    return data;
  }

  data = checkIfDraw(arr);
  if (data.draw) {
    return data;
  }
};
