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

test('takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the "hit" function to the correct ship', () => {
    let myShip = Ship(2);
    Gameboard.placeShip(myShip, [4,5], 'right');
    let board = Gameboard.getBoard();

    Gameboard.receiveAttack([4,5]);
    expect(myShip.hits).toBe(1)
    expect(myShip.isSunk()).toBe(false)
    Gameboard.receiveAttack([4,6]);
    expect(myShip.hits).toBe(2)
    expect(myShip.isSunk()).toBe(true)
})

test('keep track of missed attacks', () => {
    let myShip = Ship(4);
    let board = Gameboard.createBoard();
    board = Gameboard.getBoard();
    Gameboard.placeShip(myShip, [8,5], 'right');
    Gameboard.receiveAttack([8,3]);

    expect(myShip.hits).toBe(0);
    expect(board[8][3]).toBe('X');
})