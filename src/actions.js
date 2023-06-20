const actions = {
  createPlayer(name) {
    game.player.name = name;
  },
  endGame() {
    game.isEnded = true;
  },
  showMessage() {
    console.log('Описание мира:\n');
  },
};

export default actions;
