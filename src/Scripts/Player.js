import Gameboard from "./Gameboard"

export function randomNumber() { return Math.floor(Math.random() * 10)};

const Player = (name) => {
  return {
    name: name,
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
      function randomCoord() {
        let randomCoord = [];
        function genRandomCoord() { 
          randomCoord = [randomNumber(), randomNumber()];
          if (player.board.board[randomCoord[0]][randomCoord[1]] === 'X' 
          || player.board.board[randomCoord[0]][randomCoord[1]] === 'O') {
            return genRandomCoord();
          }
        }
        genRandomCoord();
        return randomCoord
      }
      const coordinates = randomCoord();
      this.randomCoord = coordinates;
      this.attack(player, coordinates);
    },
    randomCoord: null,
  }
}

export default Player;

  
  

