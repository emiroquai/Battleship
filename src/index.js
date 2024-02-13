import GameController from './Scripts/GameController.js';
import css from './style.css';

GameController.game();

const shuffleBtn = document.querySelector('#shuffleBtn');
shuffleBtn.onclick = GameController.shuffleHumanBoard;

