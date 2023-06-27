import { creeps as enemy } from "./forest-creeps.js"

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const generateEnemies = (difficulty) => {
  let multiplier = 1;

  if (difficulty === 'easy') {
    multiplier = 0.5;
  } else if (difficulty === 'hard') {
    multiplier = 2;
  }

  const enemyList = enemy.firstCityCreeps.map((creep) => ({
    name: creep.name,
    hp: creep.hp,
    maxHp: creep.maxHp,
    damage: creep.damage,
    armor: creep.armor,
    speed: creep.speed,
    count: getRandomNumber(creep.count, creep.count * 2) * multiplier,
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
