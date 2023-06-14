// import prompts from 'prompts';

// export const itemsFromRange = (str) => {
//   const [min, max] = str.split('-');
//   const difference = Number(max) - Number(min);
//   const deviationFromMin = Math.round(Math.random() * difference);
//   const item = Number(min) + deviationFromMin;
//   return item;
// };

// export const giveMission = (npsType, missionIndex) => {
//   [npsType].missions[missionIndex];
// };

class Creeps {
  constructor(name, hp, dmg, armor, loot) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.armor = armor;
    this.loot = loot;
  }
}

const bloodWolf = new Creep('blood wolf', 100, '25-35', '5%', ['basic shard', 'biomass', 'fang', 'meat']);
console.log(bloodWolf);

bloodcoins = '1-5';
generateLoot = (...params) => {
  
}

