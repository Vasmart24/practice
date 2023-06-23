export const player = {
  name: 'Ell',
  currentLocation: ['Самсана'],
  army: {},
  inventory: [
    { name: ''}
  ],
  ammunition: [
    { name: '', type: 'оружие', parameters: { atk: 0, armor: 0 }, equiped: 0},
    { name: '', type: 'голова', parameters: { atk: 0, armor: 0 }, equiped: 0},
    { name: '', type: 'нагрудник', parameters: { atk: 0, armor: 0 }, equiped: 0},
    { name: '', type: 'поножи', parameters: { atk: 0, armor: 0 }, equiped: 0},
    { name: '', type: 'ботинки', parameters: { atk: 0, armor: 0 }, equiped: 0},
    { name: '', type: 'кольцо', parameters: { atk: 0, armor: 0 }, equiped: 0},
  ],
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

