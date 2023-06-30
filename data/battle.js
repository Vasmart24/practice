import { creeps as enemy } from './forest-creeps.js';
import { game } from './configs.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateEnemies = (difficulty) => {

  let multiplier = 1;
  let enemyList = [];

  if (difficulty === 'easy') {
    multiplier = 0.65;
  } else if (difficulty === 'hard') {
    multiplier = 2;
  }

  // if (game.player.currentMission.name === 'Кровавая бойня') {
  //   wolves = enemy.firstCityCreeps[0];

  //   wolves.count = Math.floor(getRandomNumber(2, 4) * multiplier);
  //   return ([wolves]);
  // };
  const easyCount = Math.floor(getRandomNumber(2, 4) * multiplier);
  const mediumCount = Math.floor(getRandomNumber(4, 8) * multiplier);
  if (game.player.currentMission.name === 'Кровавая бойня') {
    enemyList.push(enemy.firstCityCreeps[0]);
    const count = easyCount;
    return enemyList.map((wolf) => ({
      name: wolf.name,
      hp: wolf.hp,
      maxHp: wolf.maxHp,
      damage: wolf.damage,
      armor: wolf.armor,
      count: count,
      maxCount: count,
      difficulty: wolf.difficulty
    }))
  }
  enemyList = enemy.firstCityCreeps.map((creep) => ({
    name: creep.name,
    hp: creep.hp,
    maxHp: creep.maxHp,
    damage: creep.damage,
    armor: creep.armor,
    count: creep.difficulty === 'easy' ? easyCount : mediumCount,
    maxCount: creep.maxCount,
    difficulty: creep.difficulty,
  }));
  return enemyList;
};

const initiateBattle = (game) => {
  console.log('--- БОЙ ---');
  console.log('Противники:');

  const enemies = generateEnemies(game.difficulty); // Генерация врагов, можно передать 'easy', 'medium' или 'hard'

  for (let i = 0; i < enemies.length; i++) {
    console.log(`${enemies[i].name} (${enemies[i].count})`);
  }

  return enemies;
};

// Пример использования функции
//initiateBattle();

export default initiateBattle;
