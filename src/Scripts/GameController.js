import Player from './Player.js';
import ScreenController from './ScreenController.js';

const GameController = (() => {
  let human;
  let computer;
  let humanBoard;
  let computerBoard;
  const getHuman = () => human;
  const getComputer = () => computer;
  const getHumanBoard = () => humanBoard;
  const getComputerBoard = () => computerBoard;

  const game = () => {
    //Setup game
    human = Player('human');
    computer = Player('computer');
        
    human.board.setupShips();
    computer.board.setupShips();

    humanBoard = document.querySelector('#board1');
    human.boardElement = document.querySelector('#board1');
    computerBoard = document.querySelector('#board2');  
    
    ScreenController.renderBoard(human, humanBoard);
    ScreenController.renderBoard(computer, computerBoard);

    return {human, computer, computerBoard, humanBoard}
  };

  const playTurn = (coordinates) => {
    // human = GameController.getHuman();
    // const humanBoard = GameController.getHumanBoard();
      human.attack(computer, coordinates);
      computer.randomAttack(human);
    ScreenController.renderBoard(computer, computerBoard);
    ScreenController.renderBoard(human, humanBoard)
  }


  return {
    game,
    getHuman,
    getComputer,
    getHumanBoard,
    getComputerBoard,
    playTurn
  }
})();

export default GameController;