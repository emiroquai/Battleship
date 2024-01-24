const Gameboard = (() => {
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

  let board = createBoard()

  const getBoard = () => {
    return board
  }

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

  return {
    createBoard,
    resetBoard,
    getBoard,
    placeShip,
    receiveAttack,
    allSunk
  }
})();

module.exports = Gameboard;