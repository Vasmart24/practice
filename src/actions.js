import game from '../data/gameData.js';

const actions = {
  createPlayer(name) {
    game.player.name = name;
  },
  endGame() {
    game.isEnded = true;
  },
  showText(text, text2) {
    console.log(text);
    console.log(text2);
  },
};

export default actions;
