import Player from './Player.js';
import ScreenController from './ScreenController.js';

const GameController = (() => {
  let human;
  let computer;

  const shuffleBtn = document.querySelector('#shuffleBtn');

  const game = () => {
    //Setup game
    human = Player('Human');
    computer = Player('Computer');
        
    human.board.setupShipsRandom();
    computer.board.setupShipsRandom();
    console.log(computer.board.board)
    
    human.boardElement = document.querySelector('#board1');
    computer.boardElement = document.querySelector('#board2');
    
    ScreenController.renderBoard(human);
    ScreenController.renderBoard(computer);

    return {human, computer}
  };

  const updateMessage = (player, oponent, coordinates) => {
    if (oponent.board.board[coordinates[0]][coordinates[1]] === 'X') {
      ScreenController.displayMessage(`${player.name} missed`);
    } else if (oponent.board.board[coordinates[0]][coordinates[1]] === 'O') {
      ScreenController.displayMessage(`${player.name} hit!`);
    }
  }

  const checkWin = (player, opponent) => {
    if (opponent.board.allSunk()) {  
      setTimeout(() => {
        ScreenController.displayMessage(`${player.name} wins!`)
      }, "1000")
      return 
    }
  }

  const humanTurn = (coordinates) => {
    if (!human.board.allSunk() && !computer.board.allSunk()) {
      human.attack(computer, coordinates);
      ScreenController.renderBoard(computer);
      updateMessage(human, computer, coordinates)
      checkWin(human, computer);
    }
  }

  const computerTurn = () => {
    if (!human.board.allSunk() && !computer.board.allSunk()) {
      setTimeout(() => {
        computer.randomAttack(human);
        const randomCoordinates = computer.randomCoord;
        updateMessage(computer, human, randomCoordinates);
        ScreenController.renderBoard(human);
      }, "1000")
      checkWin(computer, human);
    }
  }

  const play = (coordinates) => {
      if (shuffleBtn.style.display != 'none') {
        shuffleBtn.style.display = 'none';
      }
      humanTurn(coordinates);
      computerTurn();
  }

  const shuffleHumanBoard = () => {
    human.board.setupShipsRandom();
    ScreenController.renderBoard(human);
  } 
  

  return {
    game,
    play,
    shuffleHumanBoard
  }
})();

export default GameController;