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
// const circle = (document.getElementsByClassName = "circle");
// const x = "x";
// const o = "o";

// let turn = 1;
// const player1 = gameState.players[0]
// const player2 = gameState.players[1]

const board = document.getElementById("board");
const cell = document.querySelectorAll(".cell");

let winner = document.querySelector(".winner");
let response = document.querySelector(".response");

board.addEventListener("click", function (event) {
  // console.log(event.target.id);
  // the next line splits our id at the comma, returning an array of two numbers (indexes)
  let gridCoordinates = event.target.id.split(",");
  console.log(event.target, 'target')
  console.log(gridCoordinates);
  let row = gridCoordinates[0];
  let col = gridCoordinates[1];
  // if (event.target.???){}
  if(!gameState.board[row][col]){
    gameState.board[row][col] = gameState.players[gameState.currentPlayerIndex];
    console.log(gameState.currentPlayerIndex, 'player')
  if (gameState.currentPlayerIndex === 0) {
    gameState.currentPlayerIndex = 1;
    event.target.classList.add("x");
    response.innerHTML = "Player 2 turn";
  } else if (gameState.currentPlayerIndex === 1) {
    event.target.classList.add("circle");
    response.innerHTML = "Player 1 turn";
    gameState.currentPlayerIndex = 0;
  }
  checkWin();
  }

  console.log(gameState.board);
  // console.log(gameState.board[0][0], "0 0")
});

function checkWin() {
  // for (let i = 0; i < gameState.board.length; i++) {
  if (
    gameState.board[0][0] && gameState.board [0][1] && gameState.board [0][2] == 'x'
  ) {    
    alert("win")
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

// checkWin();

// function gamePlay() {
//   for (let i = 0; i < gameState.board.length; i++) {
//     console.log(gameState.board[i], "loop")
//   }
// }

// function checkWin() {
//   for (let row = 0; row < gameState.board.length; row++) {
//     // console.log(row, 'row')
//     for (let col = 0; col < gameState.board[row].length; col++) {
//       // console.log(col, 'column')
//       if ( gameState.board[0][0] && gameState.board[0][1] === gameState.board[0][2] === "x")
//      {
//         response.innerHTML = "Player 2 Wins";
//       }
//       // console.log(gameState.board[0][0], "0 0")
//     }
//   }
// }


function renderGame() {
  gamePlay();
  checkWin();
  board();
}
