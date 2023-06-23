export const player = {
  name: 'Ell',
  currentLocation: ['Самсана'],
  army: {},
  inventory: {
    ammunition: [
      { name: 'Нейрофрейм', type: 'head', parameters: { atk: 2, armor: 4}, description: 'Атака: 2  Защита: 4'}
     
    ],
},
  ammunition: [
   { name: '1', type: 'weapon', parameters: { atk: 0, armor: 0 }, equiped: false},
   { name: '2', type: 'head', parameters: { atk: 0, armor: 0 }, equiped: false},
   { name: '3', type: 'chest', parameters: { atk: 0, armor: 0 }, equiped: false},
   { name: '4', type: 'leggings', parameters: { atk: 0, armor: 0 }, equiped: true},
   { name: '5', type: 'boots', parameters: { atk: 0, armor: 0 }, equiped: false},
   { name: '6', type: 'ring', parameters: { atk: 0, armor: 0 }, equiped: false},
  ],
  atk: 0,
  armor: 0,
  lvl: 1,

  getPlayerAmmunition() {
    const inventory = this.ammunition.map((item) => `${item.name} -\n атака: ${item.parameters.atk}⚔️\n броня: ${item.parameters.armor}🛡️`);
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

