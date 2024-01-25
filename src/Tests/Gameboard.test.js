const Gameboard = require('../Scripts/Gameboard')
const Ship = require('../Scripts/Ship')

test('Creates a 10x10 gameboard', () => {
    const myBoard = Gameboard();
    expect(myBoard.board.length).toBe(10);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          expect(myBoard.board[i][j]).toBe('');
        }
    }
});

test('Places ship at specific coordinates', () => {
    const myBoard = Gameboard();
    let myShip = Ship(3);
    myBoard.placeShip(myShip, [2,3], 'right');
    expect(myBoard.board[2][3]).toBe(myShip)    
    expect(myBoard.board[2][4]).toBe(myShip)    
    expect(myBoard.board[2][5]).toBe(myShip)
    
    myBoard.placeShip(myShip, [2,3], 'down');
    expect(myBoard.board[2][3]).toBe(myShip)    
    expect(myBoard.board[3][3]).toBe(myShip)    
    expect(myBoard.board[4][3]).toBe(myShip)    
});

test('takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the "hit" function to the correct ship', () => {
    const myBoard = Gameboard();
    let myShip = Ship(2);
    myBoard.placeShip(myShip, [4,5], 'right');

    myBoard.receiveAttack([4,5]);
    expect(myShip.hits).toBe(1)
    expect(myShip.isSunk()).toBe(false)
    myBoard.receiveAttack([4,6]);
    expect(myShip.hits).toBe(2)
    expect(myShip.isSunk()).toBe(true)
});

test('keep track of missed attacks', () => {
    const myBoard = Gameboard();
    let myShip = Ship(4);
    
    myBoard.placeShip(myShip, [8,5], 'right');
    myBoard.receiveAttack([8,3]);

    expect(myShip.hits).toBe(0);
    expect(myBoard.board[8][3]).toBe('X');
});

describe('report whether or not all of their ships have been sunk', () => {
    test('no ships sunk', () => {
        const myBoard = Gameboard();
        const ship1 = Ship(2);
        const ship2 = Ship(3);
        myBoard.placeShip(ship1, [3,4], 'right');
        myBoard.placeShip(ship2, [5,6], 'down');
        expect(myBoard.allSunk()).toBe(false);
    })
    test('a ship sunk', () => {
        const myBoard = Gameboard();
        const ship1 = Ship(2);
        const ship2 = Ship(3);
        myBoard.placeShip(ship1, [3,4], 'right');
        myBoard.placeShip(ship2, [5,6], 'down');
        ship1.hits = 2;
        expect(ship1.isSunk()).toBe(true);
        expect(myBoard.allSunk()).toBe(false);
    })
    test('all ships sunk', () => {
        const myBoard = Gameboard();
        const ship1 = Ship(2);
        const ship2 = Ship(3);
        myBoard.placeShip(ship1, [3,4], 'right');
        myBoard.placeShip(ship2, [5,6], 'down');
        ship1.hits = 2;
        ship2.hits = 3;
        expect(myBoard.allSunk()).toBe(true);
    })

})