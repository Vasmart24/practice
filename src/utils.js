import { playerAtk } from "../data/Player.js";
// Функция для вычисления случайного значения в заданном диапазоне
const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для вычисления урона, наносимого войском
const calculateDamage = (unit) => {
  // Разбиваем строку мин-макс на отдельные значения
  const [minDamage, maxDamage] = unit.dmg.split('-');
  // это необходимо для более рандомного значения урона
  const min = minDamage * unit.count;
  const max = maxDamage * unit.count;
  // Получаем случайное значение урона в заданном диапазоне
  const damage = getRandomValue(Number(min), Number(max));
  const result = playerAtk <= 0 ? damage : damage * (playerAtk * 0.1 + 1);
  return Math.round(result);
};

// Функция для вычисления нанесённого урона с учётом брони
const calculateEffectiveDamage = (damage, enemy) => {
  // из параметра брони убираем процент и преобразуем строку в число 
  const armor = Number(enemy.armor.slice(0, -1));
  const effectiveDamage = damage * (100 - armor) / 100;
  return Math.round(effectiveDamage);
};

// Объект с характеристиками союзного войска
const alliedUnit = {
  name: 'Тяжёлый пехотинец',
  hp: 160,
  dmg: '25-35',
  armor: '70%',
  count: 5,
};

// Объект с характеристиками вражеского отряда
const enemyUnit = {
  name: 'Биофенрикс',
  hp: 60,
  maxHp: 100,
  dmg: '25-35', 
  armor: '5%',
  count: 5,
};

// Вычисляем урон, наносимый союзным войском
const damageDealt = calculateDamage(alliedUnit);

// Применяем урон к вражескому отряду, учитывая броню
const effectiveDamage = calculateEffectiveDamage(damageDealt, enemyUnit);
// return [hp, count];
const killUnit = (unit, damage) => {
  const hp = unit.hp;
  console.log(`Хп противника до вычета: ${unit.hp}`);
  if (!unit.count) console.log(`отряд ${unit.name} повержен!`);
  if (hp <= damage) {
    console.log(`урон: ${damage}`);
    damage -= hp;
    console.log(`Урон после вычета hp: ${damage}`)
    unit.hp = unit.maxHp;
    unit.count -= 1;
    console.log(`Хп противника: ${unit.hp}`);
    killUnit(unit, damage);
  } else {
    unit.hp -= damage;
  }
};

// Проверяем, если урон превышает оставшееся здоровье врага, уменьшаем количество воинов и выводим оставшееся здоровье
if (effectiveDamage >= enemyUnit.hp) {
  killUnit(enemyUnit, effectiveDamage);
  console.log(enemyUnit);
} else {
  enemyUnit.hp -= effectiveDamage ;
}

let enemyHp = enemyUnit.hp;
const maxEnemyHp = enemyUnit.maxHp;
// Выводим результат
// console.log(`${alliedUnit.name} наносит урон ${damageDealt}`);
console.log(`Вражеский отряд ${enemyUnit.name} получает урон ${effectiveDamage}`);
console.log(`Остаток воинов у ${enemyUnit.name} в отряде: ${enemyUnit.count}`);
console.log(`Остаток здоровья вражеского отряда: ${enemyHp}`);
