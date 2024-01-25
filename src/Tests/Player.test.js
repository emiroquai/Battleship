const Player = require('../Scripts/Player')

function searchStringInArray(searchString, twoDArray) {
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      if (twoDArray[i][j] === searchString) {
        return true; // String found in the 2D array
      }
    }
  }
  return false; // String not found in the 2D array
}  

test('Players can take turns playing the game by attacking the enemy Gameboard', () => {
  const player1 = Player();
  const player2 = Player();

  player1.turn = true;
  player1.attack(player2, [1, 1]);
  expect(player2.board.board[1][1]).toBe('X');
  expect(player1.turn).toBe(false);
  expect(player2.turn).toBe(true);
})

test('Computer can make random plays', () => {
  const player1 = Player();
  const player2 = Player();

  player1.randomAttack(player2);

  expect(searchStringInArray('X', player2.board.board)).toBe(true);
})

test('Computer does not attack the same coordinate twice', () => {
  const player1 = Player();
  const player2 = Player();

  for (let i = 0; i < 100; i++) {
   player1.randomAttack(player2);
  }
  expect(searchStringInArray('', player2.board.board)).toBe(false);

})