const Ship = require('./Ship.js');

const Gameboard = () => {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = '';
      }
    }
    return board;
  }

  const board = createBoard()

  const resetBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = '';
      }
    }
  }

  const placeShip = (ship, coordinates, direction) => {
    for (let i = 0; i < ship.length; i++) {
      if (direction === 'right') {
        board[coordinates[0]][coordinates[1] + i] = ship
      } else if (direction === 'down') {
        board[coordinates[0] + i][coordinates[1]] = ship
      }
    }
  }

  const receiveAttack = (coordinates) => {
    if (board[coordinates[0]][coordinates[1]] instanceof Object) {
      board[coordinates[0]][coordinates[1]].hit();
      board[coordinates[0]][coordinates[1]] = 'O';
    } else {
      board[coordinates[0]][coordinates[1]] = 'X';
    }
  }

  const allSunk = () => {
    let allSunk = true
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof board[i][j] === 'object' && board[i][j].isSunk() === false) {
        allSunk = false;
        }
      }
    }
    return allSunk
  }

  //Populate each gameboard with predetermined coordinates
  const setupShips = () => {
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);
    
    resetBoard();
    placeShip(destroyer, [1,2], 'right');
    placeShip(submarine, [3,1], 'down');
    placeShip(cruiser, [5,4], 'right');
    placeShip(battleship, [7,6], 'right');
    placeShip(carrier, [0,8], 'down');
  }

  return {
    board,
    resetBoard,
    placeShip,
    receiveAttack,
    allSunk,
    setupShips
  }
};

module.exports = Gameboard;