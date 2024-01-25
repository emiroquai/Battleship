const Player = require('../Scripts/Player')

test('Players can take turns playing the game by attacking the enemy Gameboard', () => {
  const player1 = Player();
  const player2 = Player();

  player1.turn = true;
  player1.attack(player2, [1, 1]);
  expect(player2.board.board[1][1]).toBe('X');
  expect(player1.turn).toBe(false);
  expect(player2.turn).toBe(true);

})