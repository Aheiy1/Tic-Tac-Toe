const gameState = {
  players: ["x", "o"],
  currentPlayerIndex: 0,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
// console.log(gameState.board);

const board = document.getElementById("board");
const cell = document.querySelectorAll(".cell");

let winner = document.querySelector(".winner");
let response = document.querySelector(".response");

function getWinner() {
  let content = document.createElement("h1");
  let message = document.createTextNode("Congrats! You have won");
  content.appendChild(message);
  document.body.appendChild(content);
}
function noWinner() {
  let content = document.createElement("h1");
  let message = document.createTextNode("Try again, No one wins");
  content.appendChild(message);
  document.body.appendChild(content);
}
board.addEventListener("click", function (event) {
  // console.log(event.target.id);
  // the next line splits our id at the comma, returning an array of two numbers (indexes)
  let gridCoordinates = event.target.id.split(",");
  // console.log(event.target, "target");
  // console.log(gridCoordinates);
  let row = gridCoordinates[0];
  let col = gridCoordinates[1];
  // if (event.target.???){}
  if (!gameState.board[row][col]) {
    gameState.board[row][col] = gameState.players[gameState.currentPlayerIndex];

    if (gameState.currentPlayerIndex === 0) {
      gameState.currentPlayerIndex = 1;
      event.target.classList.add("x");
      response.innerHTML = "Player 2 turn";
    } else if (gameState.currentPlayerIndex === 1) {
      event.target.classList.add("circle");
      response.innerHTML = "Player 1 turn";
      gameState.currentPlayerIndex = 0;
    }
    getWin();

    // console.log(gameState.board);
    // console.log(gameState.board[0][0], "0 0")
  }
});
function getWin() {
  for (let i = 0; i < gameState.board.length; i++) {
    let rowArr = [];
    rowArr.push(gameState.board[i]);
    console.log(rowArr, "row");

    if (
      rowArr[0][0] === "o" &&
      rowArr[0][0] === rowArr[0][1] &&
      rowArr[0][1] === rowArr[0][2]
    ) {
      getWinner();
    } else if (
      rowArr[0][0] === "x" &&
      rowArr[0][0] === rowArr[0][1] &&
      rowArr[0][1] === rowArr[0][2]
    ) {
      getWinner();
    }
  }
  if (
    gameState.board[0][0] &&
    gameState.board[0][0] === gameState.board[1][0] &&
    gameState.board[1][0] === gameState.board[2][0]
  ) {
    getWinner();
  } else if (
    gameState.board[0][1] &&
    gameState.board[0][1] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][1]
  ) {
    getWinner();
  } else if (
    gameState.board[0][2] &&
    gameState.board[0][2] === gameState.board[1][2] &&
    gameState.board[1][2] === gameState.board[2][2]
  ) {
    getWinner();
  } else if (
    gameState.board[0][0] &&
    gameState.board[0][0] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][2]
  ) {
    getWinner();
  } else if (
    gameState.board[0][2] &&
    gameState.board[0][2] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][0]
  ) {
    getWinner();
  } else if (
    gameState.board[0][0] &&
    gameState.board[0][1] &&
    gameState.board[0][2] &&
    gameState.board[1][0] &&
    gameState.board[1][1] &&
    gameState.board[1][2] &&
    gameState.board[2][0] &&
    gameState.board[2][1] &&
    gameState.board[2][2]
  ) {
    noWinner();
  }
}
//loop over the gameState board (nested for loops)
// for (let row = 0; row < gameState.board.length; row++) {
//   // console.log(row, "row");
//   // console.log(gameState.board[row], 'row')

//   for (let col = 0; col < gameState.board[row].length; col++) {
//     // console.log(gameState.board[col], 'column')
//     // console.log(col, "column");
//   }
//   if (gameState)
// }

// use the indexes for the for loops to accsess the value of the currect board position
// use the indexes to query for the corresponding html element
// set the innerText of that element equal to the current board position's value


