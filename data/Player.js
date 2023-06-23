export const player = {
  name: 'Ell',
  currentLocation: ['Самсана'],
  army: {},
  inventory: [
    { name: ''}
  ],
  ammunition: {
   weapon: { name: '', parameters: { atk: 0, armor: 0 }, equiped: false},
   head: { name: '', parameters: { atk: 0, armor: 0 }, equiped: false},
   chest: { name: '', parameters: { atk: 0, armor: 0 }, equiped: false},
   leggings: { name: '', parameters: { atk: 0, armor: 0 }, equiped: false},
   boots: { name: '', parameters: { atk: 0, armor: 0 }, equiped: false},
   ring: { name: '', parameters: { atk: 0, armor: 0 }, equiped: false},
  },
  atk: 0,
  armor: 0,
  lvl: 1,

  getPlayerAmmunition() {
    const inventory = this.ammunition.map((item) => {
      return `${item.name} -\n атака: ${item.parameters.atk}⚔️\n броня: ${item.parameters.armor}🛡️`
    });
    return inventory.join('\n');
  },

  getPlayerLocation() {
    return this.currentLocation[this.currentLocation.length - 1];
  },

  addPlayerLocation(location) {
    this.currentLocation.push(location);
  },

  backwards() {
    this.currentLocation.pop();
  },

  getPlayerName() {
    return this.name;
  },
};

