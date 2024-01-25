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
    }
  }
}

module.exports = Player;

  
  

