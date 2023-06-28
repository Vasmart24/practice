export const player = {
  name: 'Ell',
  level: 1,
  coins: 225,
  currentLocation: 'Самсана',
  army: [],
  inventory: {
    ammunition: [
      {
        name: 'Нейрофрейм', type: 'head', parameters: { atk: 2, armor: 4 }, description: 'Атака: 2  Защита: 4',
      },

    ],
    items: [],
  },
  ammunition: [
    {
      name: 'Био-меч', type: 'weapon', parameters: { atk: 0, armor: 0 }, equiped: true
    },
    {
      name: '2', type: 'head', parameters: { atk: 0, armor: 0 }, equiped: false,
    },
    {
      name: '3', type: 'chest', parameters: { atk: 0, armor: 0 }, equiped: false,
    },
    {
      name: '4', type: 'leggings', parameters: { atk: 0, armor: 0 }, equiped: true,
    },
    {
      name: '5', type: 'boots', parameters: { atk: 0, armor: 0 }, equiped: false,
    },
    {
      name: '6', type: 'ring', parameters: { atk: 0, armor: 0 }, equiped: false,
    },
  ],
  atk: 1000,
  armor: 2,
  lvl: 1,
  currentMission: {
    name: '',
    isMissionCompleted: false, // player.currentMission.requirements,
  },
  completedMissions: [],

  getPlayerAmmunition() {
    const inventory = this.ammunition.map((item) => `${item.name} -\n атака: ${item.parameters.atk}⚔️\n броня: ${item.parameters.armor}🛡️`);
    return inventory.join('\n');
  },

  getPlayerLocation() {
    return this.currentLocation;
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

export const playerAtk = player.atk;
export const playerArmor = player.armor;
