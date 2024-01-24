const Gameboard = require('../Scripts/Gameboard')
const Ship = require('../Scripts/Ship')

test('Creates a 10x10 gameboard', () => {
    let myBoard = Gameboard.createBoard();
    expect(myBoard.length).toBe(10);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          expect(myBoard[i][j]).toBe('');
        }
    }
})

test('Places ship at specific coordinates', () => {
    let myShip = Ship(3);
    Gameboard.placeShip(myShip, [2,3], 'right');
    let board = Gameboard.getBoard()
    expect(board[2][3]).toBe(myShip)    
    expect(board[2][4]).toBe(myShip)    
    expect(board[2][5]).toBe(myShip)
    
    Gameboard.placeShip(myShip, [2,3], 'down');
    expect(board[2][3]).toBe(myShip)    
    expect(board[3][3]).toBe(myShip)    
    expect(board[4][3]).toBe(myShip)    
})
