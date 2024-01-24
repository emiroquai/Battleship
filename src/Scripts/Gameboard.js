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
            board
            
        }
    }

    const receiveAttack = (coordinates) => {
        let loc = board[coordinates[0]][coordinates[1]]
        if (loc != '') {
            loc.hit()
        } else {
            return
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