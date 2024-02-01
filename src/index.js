import css from './style.css';
import GameController from './Scripts/GameController';
import ScreenController from './Scripts/ScreenController';
import Player from './Scripts/Player';


const player1 = Player();
const computer = Player();
GameController.game(player1, computer);
ScreenController(player1, computer);