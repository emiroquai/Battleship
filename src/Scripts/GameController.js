const Player = require('./Player.js');
const Ship = require('./Ship.js');
const ScreenController = require('./ScreenController');

const GameController = (() => {
  let player1;
  let computer;
  const getPlayer1 = () => player1;
  const getComputer = () => computer;

  const game = () => {
    //Setup game
    player1 = Player('player');
    computer = Player('computer');
        
    player1.board.setupShips();
    computer.board.setupShips();

    const player1Board = document.querySelector('#board1');
    const computerBoard = document.querySelector('#board2');  
    
    ScreenController.renderBoard(player1, player1Board);
    ScreenController.renderBoard(computer, computerBoard);

    return {player1, computer}
  };


  return {
    game,
    getPlayer1,
    getComputer
  }
})();

module.exports = GameController;