const Gameboard = require('../Scripts/Gameboard')

const Player = () => {
  return {
    turn: false,
    board: Gameboard(),
    getTurn() {return this.turn},
    setTurn() {this.turn = !this.turn},
    attack(player, coordinates) {
      player.board.receiveAttack(coordinates);
      this.setTurn();
      player.setTurn();
    },
    randomAttack(player) {
      function randomNumber() { return Math.floor(Math.random() * 10)};
      const randomCoord = [randomNumber(), randomNumber()];
      this.attack(player, randomCoord);
    }
  }
}

module.exports = Player;

  
  

