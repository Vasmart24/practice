const game = {
  data: {
    isEnded: false,
    player: {
      name: '',
    },
    playerCurrentLocation: '',
  },
  endGame(game) {
    game.data.isEnded = true;
  },
};

export default game;
