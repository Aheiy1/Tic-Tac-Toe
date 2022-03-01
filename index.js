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

const circle = document.getElementsByClassName = "circle";


let turn = 1;
// const player1 = gameState.players[0]
// const player2 = gameState.players[1]

const board = document.getElementById("board");
let response = document.querySelector(".response");

board.addEventListener("click", function (event) {
  //   console.log(event.target.id.split(","));
  if (turn === 1 ) {
    event.target.classList.toggle('circle')
    response.innerHTML = "Player 2 Turn";
    turn = 2;
  } else if (turn === 2)  {
    event.target.classList.toggle('x')
    response.innerHTML = "Player 1 Turn";
    turn = 1;
  }

  //   }
  //   response.innerHTML = "Player 2 Turn";

  //   if (event.target.matches("div.cell2")){
  //       gameState.players = [1];
  //   }
  //   response.innerHTML = "Player 1 Turn"
});

function gamePlay() {
  for (let i = 0; i < gameState.board.length; i++) {
    console.log(gameState.board[i], "loop")
  }
}
function renderGame() {
    gamePlay(); 
  board();
  
}
