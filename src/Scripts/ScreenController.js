import GameController from "./GameController";

const ScreenController = (() => {

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
        if (player.name === 'human' && player.board.board[i][j] instanceof Object) {
        cell.classList.add("ship")
        }
        // Event listener for computer board
        if (player.name === 'computer') {
          cell.addEventListener('click', function() {        
            GameController.playTurn([i,j]);    
            })
          }
        boardElement.appendChild(cell);
      }
    }
  }

  const displayMessage = (message) => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = message;
  }

  return {
    renderBoard,
    displayMessage
  }
})();

export default ScreenController;