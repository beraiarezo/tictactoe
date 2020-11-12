export const SearchCheckWay = (x, y, arr, cursor, winCount) => {
  console.log(x, y, arr, cursor, winCount, "SearchCheckWay");
  let data = {};
  if (x === 0 && y === 0) {
    if (arr[x][y + 1].value === "" || arr[x][y + 1].value === cursor) {
      data = SearchLeftToRight(x, y, cursor, arr, winCount);
    }
    if (
      !data.win &&
      (arr[x + 1][y].value === "" || arr[x + 1][y].value) === cursor
    ) {
      data = SearchTopToBottom(x, y, cursor, arr, winCount);
    }
    if (
      !data.win &&
      (arr[x + 1][y + 1] === "" || arr[x + 1][y + 1].value === cursor)
    ) {
      data = SearchLeftTopToRigthBottom(x, y, cursor, arr, winCount);
    }
    if (data && data.win) {
      return data;
    }
  }

  //  if cell in middle
  let ZeroXPosition = x - 1 >= 0 ? true : false;
  let MaxXPosition = x + 1 < arr.length ? true : false;
  if (ZeroXPosition && MaxXPosition) {
    if(arr[x - 1][y].value === "" || arr[x-1][y].value === cursor || arr[x + 1][y].value === "" || arr[x-1][y].value === cursor) {
      console.log("heeree")
      data = SearchTopToBottom(x, y, cursor, arr, winCount);
    }
  }

  console.log(data, "dataa");
};

const SearchLeftTopToRigthBottom = (x, y, cursor, arr, winCount) => {
  const winC = parseInt(winCount);
  let counter = 0;
  let data = {};
  // let diagonalCounterY = 0;
  let diff = x > y ? x - y : y - x;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      console.log(arr[i][diff]);
      counter = arr[i][diff] && arr[i][diff].value === cursor ? counter + 1 : 0;

      if (arr[i][diff] && arr[i][diff].color) {
        arr[i][diff].color = arr[i][diff].value === cursor ? "yellow" : null;
      }
      // diagonalCounterY =
      //   arr[i][y + x] && arr[i][y + x].value === cursor
      //     ? diagonalCounterY + 1
      //     : 0;
    } else {
      console.log(arr[i][diff + parseInt(i)]);
      counter =
        arr[i][diff + parseInt(i)] &&
        arr[i][diff + parseInt(i)].value === cursor
          ? counter + 1
          : 0;

      if (arr[i][diff + parseInt(i)] && arr[i][diff + parseInt(i)].color) {
        arr[i][diff + parseInt(i)].color =
          arr[i][diff + parseInt(i)] &&
          arr[i][diff + parseInt(i)].value === cursor
            ? "yellow"
            : null;
      }

      // diagonalCounterY =
      //   arr[i][y + x - i] && arr[i][y + x - i].value === cursor
      //     ? diagonalCounterY + 1
      //     : 0;
    }

    if (counter === winC) {
      alert(`Player ${cursor} Win SearchLeftTopToRigthBottom`);
      data.data = true;
      data.finished = true;
      data.arr = arr;
    }
  }
};

const SearchLeftToRight = (x, y, cursor, arr, winCount) => {
  const winC = parseInt(winCount);
  let data = {};
  let counter = 0;
  for (let i = 0; i < arr[x].length; i++) {
    counter = arr[x][i].value === cursor ? counter + 1 : 0;

    arr[x][i].color = arr[x][i].value === cursor ? "yellow" : null;

    if (counter === winC) {
      alert(`Player ${cursor} win SearchLeftToRight`);
      data.win = true;
      data.finished = true;
      data.arr = arr;
    }
  }
  return data;
};

const SearchTopToBottom = (x, y, cursor, arr, winCount) => {
  const winC = parseInt(winCount);
  let data = {};

  let horCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    horCounter = arr[i][y].value === cursor ? horCounter + 1 : 0;
    arr[i][y].color = arr[i][y].value === cursor ? "yellow" : null;

    if (horCounter === winC) {
      alert(`Player ${cursor} win, SearchTopToBottom`);
      data.win = true;
      data.finished = true;
      data.arr = arr;
    }
  }
  return data;
};
