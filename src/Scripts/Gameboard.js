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

    const placeShip = (ship, coordinates, direction) => {
        for (let i = 0; i < ship.length; i++) {
            if (direction === 'right') {
                board[coordinates[0]][coordinates[1] + i] = ship
            } else if(direction === 'down'){
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

    return {
        createBoard,
        getBoard,
        placeShip,
        receiveAttack
    }
})();

module.exports = Gameboard;