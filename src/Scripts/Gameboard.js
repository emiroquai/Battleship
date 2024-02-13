import Ship from "./Ship";
import { randomNumber } from "./Player";

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

  const shuffleCoordinates = (coordinates) => {
    coordinates[0] = randomNumber();
    coordinates[1] = randomNumber();
  };

  const canPlaceShip = (coordinates, length, direction) => {
    if (direction === 'right') {
      if (coordinates[1] + length > 9) {
        return false
      }
      for (let i = 0; i < length; i++) {
        if (board[coordinates[0]][coordinates[1] + i] instanceof Object) {
          return false
        }
      }
      return true
    } else if (direction === 'down') {
      if (coordinates[0] + length > 9) {
        return false
      }
      for (let i = 0; i < length; i++) {
        if (board[coordinates[0] + i][coordinates[1]] instanceof Object) {
          return false
        }
      }
      return true
    }
  }

  function genRandomShipCoord(length, direction) { 
    let coordinates = [];
    shuffleCoordinates(coordinates);
    if (!canPlaceShip(coordinates, length, direction)) {
      return genRandomShipCoord(length, direction);
    }
    return coordinates;
  } 

  const randomDirection = () => {
    const directions = ['right', 'down'];
    const randomIndex = Math.floor(Math.random() * 2);

    return directions[randomIndex];
  }

  const createShips = () => {
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);

    return [destroyer, submarine, cruiser, battleship, carrier];
  }

  const setupShipsRandom = () => {
    const ships = createShips();
    resetBoard();
    ships.forEach((ship) => {
      const direction = randomDirection();
      const coordinates = genRandomShipCoord(ship.length, direction);
      placeShip(ship, coordinates, direction);
    })
  }

  return {
    board,
    resetBoard,
    placeShip,
    receiveAttack,
    allSunk,
    setupShips,
    setupShipsRandom
  }
};

export default Gameboard;