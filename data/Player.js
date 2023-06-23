export const player = {
  name: 'Ell',
  currentLocation: 'Самсана',
  army: {},
  inventory: [

    { name: '' },
  ],
  ammunition: [
    {
      name: 'щит', type: 'оружие', parameters: { atk: 0, armor: 10 }, equiped: '',
    },
    {
      name: 'меч', type: 'оружие', parameters: { atk: 10, armor: 0 }, equiped: '',
    },
  ],
  atk: 0,
  armor: 0,
  lvl: 1,

  getPlayerAmmunition() {
    const inventory = this.ammunition.map((item) => `${item.name} -\n атака: ${item.parameters.atk}⚔️\n броня: ${item.parameters.armor}🛡️`);
    return inventory.join('\n');
  },

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

console.log(player.getPlayerAmmunition());
