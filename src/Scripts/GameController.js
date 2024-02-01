const Player = require('./Player.js');
const Ship = require('./Ship.js');

const GameController = (() => {
  
  // //Populate each gameboard with predetermined coordinates
  // const setupShips = (player) => {
  //   const destroyer = Ship(2);
  //   const submarine = Ship(3);
  //   const cruiser = Ship(3);
  //   const battleship = Ship(4);
  //   const carrier = Ship(5);
    
  //   player.board.placeShip(destroyer, [1,2], 'right');
  //   player.board.placeShip(submarine, [3,1], 'down');
  //   player.board.placeShip(cruiser, [5,4], 'right');
  //   player.board.placeShip(battleship, [7,6], 'right');
  //   player.board.placeShip(carrier, [0,8], 'down');
  // }
  
  const game = (player1, player2) => {
    player1.board.setupShips();
    player2.board.setupShips();
  };

  return {
    game
  }
})();

module.exports = GameController;