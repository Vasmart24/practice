const game = {
  data: {
    isEnded: false,
    player: {
      name: '',
    },
    playerCurrentLocation: '',
  },
  endGame: function(game) {
    game.data.isEnded = true;
  }
}

export default game;