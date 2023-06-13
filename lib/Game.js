import Player from './Player.js';

class Game {
  constructor({ isOver = false }) {
    this.isOver = isOver;
  }

  createPlayer() {
    const inputData = {};
    this.player = new Player(inputData);
  }

  getInput() {
    // Получаем ввод от пользователя для того,
    // чтобы в будущем использовать его в updateGame
    const inputData = {};

    this.updateGame(inputData);
  }

  updateGame(data) {
    if (this.isOver === true) {
      this.endGame();
    } else {

    }
  }

  endGame() {}

  saveGame() {}
}

//
// const game = new Game();
// game.createPlayer();
//
// game.getInput();
