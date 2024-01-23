const Gameboard = require('../Scripts/Gameboard')

test('Creates a 10x10 gameboard', () => {
    let myBoard = Gameboard.createBoard();
    expect(myBoard.length).toBe(10);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          expect(myBoard[i][j]).toBe('');
        }
    }
})
