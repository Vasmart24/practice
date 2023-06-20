export const player = {
  name: 'player',
  currentLocation: 'Самсан',


  getPlayerLocation: function() {
    return this.currentLocation;
  },

  setPlayerLocation: function(location) {
    this.currentLocation = location;
  },

  getPlayerName: function() {
    return this.name;
  }
};