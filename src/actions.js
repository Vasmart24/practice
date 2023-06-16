import game from '../data/game.js';

const actions = {
  createPlayer: function(name) {
    game.player.name = name;
  },
  endGame: function() {
    game.isEnded = true;
  },
  showMessage: function() {
    console.log('Описание мира:');
  }
};

export default actions;