const ScreenController = (player1, player2) => {
  const player1Board = document.querySelector('#board1');
  const player2Board = document.querySelector('#board2');
  console.log(player1Board);

  //Renders and displays boards and ships
  const renderBoard = (player, board) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.className =  "cell";
        // cell.dataset.coordinates = [i,j];
        if (player.board.board[i][j] instanceof Object) {
          cell.classList.add("ship")
        } else if(player.board.board[i][j] === 'O'){
          cell.classList.add("hit")
        } else if(player.board.board[i][j] === 'X'){
          cell.classList.add("miss")
        } 
        board.appendChild(cell);
        // Event listener for computer board
      }
    }
  }

  renderBoard(player1, player1Board);
  renderBoard(player2, player2Board);
}

module.exports = ScreenController;