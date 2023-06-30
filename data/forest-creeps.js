class creep {
  constructor(name, hp, maxHp, damage, armor, description = '', count = 1, maxCount = 1, difficulty = '') {
    this.name = name;
    this.hp = hp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.armor = armor;
    this.description = description;
    this.count = count;
    this.maxCount = maxCount;
    this.difficulty = difficulty
  }
};

export const creeps = {
  firstCityCreeps: [
    new creep(
      'кровавый Волк', 100, 100,
      '23-37', '5%',
      'Огромное волкоподобное существо, в генах которой присутствуют ДНК\n древней акулы,  гигантских снежных львов, а также мифической виверны',
      3, 3, 'easy',
    ),

    new creep(
      'Острагаар',
      55,
      55,
      '15-18',
      '55%',
      '',
      8,
      8, 'easy'
    ),

    new creep(
      'Коралиозверь',
      110, 110, '20-30', '8%',
      '',
      4,
      4, 'easy',
    ),
  ],
  boss: new creep(
    'Гидралиск', 1450, 1450, '75-100', '15%',
    '',
    1,
    1, 'medium',
  ),
};
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
      { title: 'advanced shard', description: 'Используется для повышения ранга войск.', value: '' },
      { title: 'biomass', description: 'Можно использовать для лечения войск в лазарете и улучшения генов войск.\nМожно обменять на биомассу.\nМожно продать.', value: '' },
      { title: 'bones', description: 'Можно продать.', value: '' },
      { title: 'claw', description: 'Можно использовать для увеличения урона войск, можно продать.', value: '' },
    ],
  },

  neuroid: {
    name: 'Neuroid',
    hp: 80,
    damage: '25-35',
    armor: '20%',
    count: 0,
    loot: [
      { title: 'advanced shard', description: 'Используется для повышения ранга войск.', value: '' },
      { title: 'biomass', description: 'Можно использовать для лечения войск в лазарете и улучшения генов войск.\nМожно обменять на биомассу.\nМожно продать.', value: '' },
      { title: 'neuroplasm', description: 'Может быть переработан в большое количество биомассы.', value: '' },
    ],
  },

  chimera: {
    name: 'Chimera',
    hp: 100,
    damage: '25-30',
    armor: '30%',
    count: 0,
    loot: [
      { title: 'advanced shard', description: 'Используется для повышения ранга войск.', value: '' },
      { title: 'biomass', description: 'Можно использовать для лечения войск в лазарете и улучшения генов войск.\nМожно обменять на биомассу.\nМожно продать.', value: '' },
      { title: 'wing', description: 'Можно продать и переработать в биомассу, можно продать.', value: '' },
      { title: 'meat', description: 'Может быть переработан в большое количество биомассы, может быть продан.', value: '' },
    ],
  },

  skeletronPrime: {
    name: 'Skeletron Prime',
    hp: 150,
    damage: '20-25',
    armor: '40%',
    count: 0,
    loot: [
      { title: 'intermediate shard', description: 'Используется для повышения ранга войск.', value: '' },
      { title: 'biomass', description: 'Можно использовать для лечения войск в лазарете и улучшения генов войск.\nМожно обменять на биомассу.\nМожно продать.', value: '' },
      { title: 'bones', description: 'Можно продать.', value: '' },
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
