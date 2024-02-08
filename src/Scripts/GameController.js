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
    computer.randomAttack(human);
    ScreenController.renderBoard(computer);
    ScreenController.renderBoard(human)
  }

  return {
    game,
    playTurn
  }
})();

export default GameController;