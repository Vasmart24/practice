import game from './game.js';

const functions = {
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

export default functions;