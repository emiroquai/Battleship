const Player = require('./Player.js');
const Ship = require('./Ship.js');

const GameController = (() => {
  
  const game = (player1, player2) => {
    player1.board.setupShips();
    player2.board.setupShips();
  };

  return {
    game
  }
})();

module.exports = GameController;