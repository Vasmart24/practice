export const player = {
  name: 'player',
  currentLocation: 'Самсана',

  getPlayerLocation() {
    return this.currentLocation;
  },

  setPlayerLocation(location) {
    this.currentLocation = location;
  },

  getPlayerName() {
    return this.name;
  },
};
