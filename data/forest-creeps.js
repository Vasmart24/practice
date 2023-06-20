const firstCityCreeps = {
  bloodWolf: {
    name: 'Blood wolf',
    hp: 100,
    dmg: '25-35',
    armor: '5%',
    loot: [
      { title: 'basic shard', description: 'Used to increase the rank of troops.', value: '' },
      { title: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
      { title: 'fang', description: 'Can be sold.', value: '' },
      { title: 'meat', description: 'Can be processed into large amounts of biomass, can be sold.', value: '' },
    ],
  },
  hydralisk: {
    name: 'Hydralisk',
    hp: 75,
    dmg: '30-35',
    armor: '10%',
    loot: [
      { title: 'advanced shard', description: 'Used to increase the rank of troops.', value: '' },
      { title: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
      { title: 'wing', description: 'Can be sold and recycled into biomass, can be sold.', value: '' },
      { title: 'claw', description: 'Can be used to increase troop damage, can be sold.', value: '' },
    ],
  },

  // B value будет хранится фукция которая при победе над противником отдает игроку лут в инвентарь

  skeletron: {
    name: 'Skeletron',
    hp: 55,
    dmg: '10-15',
    armor: '25%',
    loot: [
      { title: 'basic shard', description: 'Used to increase the rank of troops.', value: '' },
      { title: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
      { title: 'bones', description: 'Can be sold.', value: '' },
    ],
  },

};

//   'Есть четыре типа кристаллов: базовые, продвинутые, промежуточные и королевские.\n';
// 'Эти кристаллы можно использовать для улучшения своих войск, их можно обменять на биомассу, а также продать по хорошей цене.'
// для нерусов
// 'There are four types of crystals: basic, advanced, intermediate and royal.\n';
// 'These crystals can be used to upgrade your troops, they can be exchanged for biomass, and they can also be sold for a good price.';

const secondCityCreeps = {
  bioSpire: {
    name: 'Bio spire',
    hp: 60,
    damage: '30-40',
    armor: '60%',
    loot: [
      { title: 'advanced shard', description: 'Used to increase the rank of troops.', value: '' },
      { title: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
      { title: 'bones', description: 'Can be sold.', value: '' },
      { title: 'claw', description: 'Can be used to increase troop damage, can be sold.', value: '' },
    ],
  },

  neuroid: {
    name: 'Neuroid',
    hp: 80,
    damage: '25-35',
    armor: '20%',
    loot: [
      { title: 'advanced shard', description: 'Used to increase the rank of troops.', value: '' },
      { title: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
      { title: 'neuroplasm', description: 'Can be processed into large amound of biomass', value: '' },
    ],
  },

  chimera: {
    name: 'Chimera',
    hp: 100,
    damage: '25-30',
    armor: '30%',
    loot: [
      { title: 'advanced shard', description: 'Used to increase the rank of troops.', value: '' },
      { title: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
      { title: 'wing', description: 'Can be sold and recycled into biomass, can be sold.', value: '' },
      { title: 'meat', description: 'Can be processed into large amounts of biomass, can be sold.', value: '' },
    ],
  },

  skeletronPrime: {
    name: 'Skeletron Prime',
    hp: 150,
    damage: '20-25',
    armor: '40%',
    loot: [
      { title: 'intermediate shard', description: 'Used to increase the rank of troops.', value: '' },
      { title: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
      { title: 'bones', description: 'Can be sold.', value: '' },
    ],
  },
};

const thirdCityCreeps = {
  creep1: {
    name: '',
    hp: 0,
    damage: '',
    armor: '',
    loot: [
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
    ],
  },
  creep2: {
    name: '',
    hp: 0,
    damage: '',
    armor: '',
    loot: [
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
    ],
  },
  creep3: {
    name: '',
    hp: 0,
    damage: '',
    armor: '',
    loot: [
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
    ],
  },
  creep4: {
    name: '',
    hp: 0,
    damage: '',
    armor: '',
    loot: [
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
    ],
  },
};
