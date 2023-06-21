const actions = {
  endGame() {
    game.isEnded = true;
  },
  showText(text, text2) {
    console.log(text);
    console.log(text2);
  },
};

export default actions;
