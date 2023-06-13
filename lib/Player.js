export const player = {
  name: 'player',
  currentLocation: 'citi zero',
  changeLocation(place) {
    this.currentLocation = place;
    console.log(this);
  },
};

export default player;
player.changeLocation('zalupa');
