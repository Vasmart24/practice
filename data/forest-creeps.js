class creep {
  constructor(name, hp, maxHp, damage, armor, description = '', speed = 1, count = 1, loot = []) {
    this.name = name;
    this.hp = hp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.armor = armor;
    this.description = description;
    this.speed = speed;
    this.count = count;
    this.loot = loot;
  }
};
export const creeps = {
  firstCityCreeps: [
    new creep (
      'Биофенрикс', 100, 100,
      '23-37', '5%',
      'Огромное волкоподобное существо, в генах которой присутствуют ДНК\n древней акулы,  гигантских снежных львов, а также мифической виверны',
      1, 1
    ),

    new creep (
      'Гидралиск', 1150, 1150, '43-53', '15%',
      '',
      1, 1, [
        { name: 'advanced shard', description: 'Used to increase the rank of troops.', value: '' },
        { name: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
        { name: 'wing', description: 'Can be sold and recycled into biomass, can be sold.', value: '' },
        { name: 'claw', description: 'Can be used to increase troop damage, can be sold.', value: '' },
      ],
    ),

    new creep (
      'Острагаар',
      55, 55, '15-18', '33%',
      '',
      1, 1, [
        { name: 'basic shard', description: 'Used to increase the rank of troops.', value: '' },
        { name: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
        { name: 'bones', description: 'Can be sold.', value: '' },
      ],
    ),

    new creep (
      'Коралиозверь', 
      110, 110, '20-30', '8%',
      '',
      1, 1, [
        { name: 'basic shard', description: 'Used to increase the rank of troops.', value: '' },
        { name: 'biomass', description: 'Can be used to heal troops in the infirmary and improve troop genes.\nCan be exchanged for biomass.\nCan be sold.', value: '' },
        { name: 'bones', description: 'Can be sold.', value: '' },
      ],
    )
  ]
}
// B value будет хранится фукция которая при победе над противником отдает игроку лут в инвентарь

//   'Есть четыре типа кристаллов: базовые, продвинутые, промежуточные и королевские.\n';
// 'Эти кристаллы можно использовать для улучшения своих войск, их можно обменять на биомассу, а также продать по хорошей цене.'
const secondCityCreeps = {
  bioSpire: {
    name: 'Bio spire',
    hp: 60,
    damage: '30-40',
    armor: '60%',
    count: 0,
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
    count: 0,
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
    count: 0,
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
    count: 0,
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
    count: 0,
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
    count: 0,
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
    count: 0,
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
    count: 0,
    loot: [
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
      { title: 'BLANK', description: 'BLANK', value: '' },
    ],
  },
};
