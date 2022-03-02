const gameState = {
  players: ["x", "o"],
  board: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
};
console.log(gameState.board);
const circle = (document.getElementsByClassName = "circle");
const x = "x";
const o = "o";

let turn = 1;
// const player1 = gameState.players[0]
// const player2 = gameState.players[1]

const board = document.getElementById("board");
let response = document.querySelector(".response");
const cell = document.querySelectorAll(".cell");

board.addEventListener("click", function (event) {
  //   console.log(event.target.id.split(","));
  if (turn === 1) {
    event.target.classList.toggle("circle");
    response.innerHTML = "Player 2 Turn";
    turn = 2;
  } else if (turn === 2) {
    event.target.classList.toggle("x");
    response.innerHTML = "Player 1 Turn";
    turn = 1;
    // } else if (turn === 3){
    //   event.target.classList.toggle('circle') === gameState.board[0, 0] && [0, 2] && [0, 3]
    //   // response.innerHTML = "Player One Wins"
    // }
    // else if ((board[0, 0] == '.x') && (board[0, 1] == '.x') && (board[0, 2] == '.x')){
    //   response.innerHTML = "Player 2 Wins"
    // }
    //   }
    //   response.innerHTML = "Player 2 Turn";

    //   if (event.target.matches("div.cell2")){
    //       gameState.players = [1];
    //   }
    //   response.innerHTML = "Player 1 Turn"
  }
});

// function gamePlay() {
//   for (let i = 0; i < gameState.board.length; i++) {
//     console.log(gameState.board[i], "loop")
//   }
// }

// const winOps = [
//   [0,0], [0,1], [0,2]
// ]

// function checkWin() {
//   for (let i = 0; i < gameState.board.length; i++) {
//     let element = gameState.board[i];
//     for (let k = 0; k < element.length; i++) {
//       // console.log(element[(0, 0)], "hello");
//       if (
//         element[0] &&
//         element[0] === element[1] &&
//         element[0] === element[3]
//       ) {
//         response.innerHTML = "Player 2 Wins";
//       }
//     }
//   }
// }
checkWin();
function renderGame() {
  gamePlay();
  board();
  checkWin();
}
