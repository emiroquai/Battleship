const Player = require('./Player.js');
const Ship = require('./Ship.js');

const GameController = () => {
  //Create players
  const player = Player();
  const computer = Player();

  //Populate each gameboard with predetermined coordinates
  const setupShips = (player) => {
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);

    player.board.placeShip(ship1, [1,2], 'right');
    player.board.placeShip(ship2, [3,4], 'down');
    player.board.placeShip(ship3, [5,5], 'right');
    player.board.placeShip(ship4, [7,6], 'right');
    player.board.placeShip(ship5, [4,8], 'down');
  }
  
  const game = () => {
    setupShips(player);
    setupShips(computer);
  }

  return {
    game
  }
};

module.exports = GameController;