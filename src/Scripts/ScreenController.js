const ScreenController = (player1, player2) => {
  const player1Board = document.querySelector('#board1');
  const player2Board = document.querySelector('#board2');

  //Renders and displays boards and ships
  const renderBoard = (player, boardElement) => {
    boardElement.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.className =  "cell";
        if(player.board.board[i][j] === 'O'){
          cell.classList.add("hit")
        } else if(player.board.board[i][j] === 'X'){
          cell.classList.add("miss")
        }
        // Render player's ships
        if (player === player1 && player.board.board[i][j] instanceof Object) {
        cell.classList.add("ship")
        }
        // Event listener for computer board
        if (player === player2) {
          cell.addEventListener('click', function() {
            if (player.board.board[i][j] === 'O' || player.board.board[i][j] === 'X') {
              return
            } else if(player.board.board[i][j] === '') {
              displayMessage('You missed')
            } else if(player.board.board[i][j] instanceof Object) {
              displayMessage("Impact!")
            }
            player1.attack(player2, [i,j])
            ScreenController(player1, player2);
          })
          }
        boardElement.appendChild(cell);
      }
    }
  }

  renderBoard(player1, player1Board);
  renderBoard(player2, player2Board);

  const displayMessage = (message) => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = message;
  }
}

module.exports = ScreenController;