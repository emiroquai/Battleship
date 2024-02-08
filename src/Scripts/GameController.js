import Player from './Player.js';
import ScreenController from './ScreenController.js';

const GameController = (() => {
  let human;
  let computer;

  const game = () => {
    //Setup game
    human = Player('human');
    computer = Player('computer');
        
    human.board.setupShips();
    computer.board.setupShips();
    
    human.boardElement = document.querySelector('#board1');
    computer.boardElement = document.querySelector('#board2');
    
    ScreenController.renderBoard(human);
    ScreenController.renderBoard(computer);

    return {human, computer}
  };

  const playTurn = (coordinates) => {
    human.attack(computer, coordinates);
    ScreenController.renderBoard(computer);
    if (computer.board.board[coordinates[0]][coordinates[1]] === 'X') {
      ScreenController.displayMessage('You missed');
    } else if (computer.board.board[coordinates[0]][coordinates[1]] === 'O') {
      ScreenController.displayMessage("It's a hit!");
    }
    setTimeout(() => {
      computer.randomAttack(human);
      const randomCoordinates = computer.randomCoord;
      if (human.board.board[randomCoordinates[0]][randomCoordinates[1]] === 'X') {
        ScreenController.displayMessage('Computer missed');
      } else if (human.board.board[randomCoordinates[0]][randomCoordinates[1]] === 'O') {
        ScreenController.displayMessage("Computer hit!");
      }
      ScreenController.renderBoard(human)
    }, "1500")
  }

  return {
    game,
    playTurn
  }
})();

export default GameController;