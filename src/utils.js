import { playerAtk } from '../data/Player.js';
// Функция для вычисления случайного значения в заданном диапазоне
const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для вычисления урона, наносимого войском
export const calculateDamage = (unit) => {
  // Разбиваем строку мин-макс на отдельные значения
  const [minDamage, maxDamage] = unit.damage.split('-');
  // это необходимо для более рандомного значения урона
  const min = minDamage * unit.count;
  const max = maxDamage * unit.count;
  // Получаем случайное значение урона в заданном диапазоне
  const dmg = getRandomValue(Number(min), Number(max));
  const result = playerAtk <= 0 ? dmg : dmg * (playerAtk * 0.1 + 1);
  return Math.round(result);
};

// Функция для вычисления нанесённого урона с учётом брони
export const calculateEffectiveDamage = (damage, enemy, defence = 0) => {
  // из параметра брони убираем процент и преобразуем строку в число
  const armor = Number(enemy.armor.slice(0, -1));
  const effectiveDamage = (damage * (100 - armor) / 100) * ((100 - defence) / 100);
  return Math.round(effectiveDamage);
};

export const killUnit = (unit, damage) => {
  console.log(`Хп противника до вычета: ${unit.hp}`);
  if (!unit.count) console.log(`отряд ${unit.name} повержен!`);
  if (unit.hp <= damage) {
    console.log(`урон: ${damage}`);
    damage -= unit.hp;
    console.log(`Урон после вычета hp: ${damage}`);
    unit.hp = unit.maxHp;
    unit.count -= 1;
    console.log(`Хп противника: ${unit.hp}`);
    killUnit(unit, damage);
  } else {
    unit.hp -= damage;
  }
};

// Проверяем, если урон превышает оставшееся здоровье врага,
// уменьшаем количество воинов и выводим оставшееся здоровье

/*
if (effectiveDamage >= enemyUnit.hp) {
  killUnit(enemyUnit, effectiveDamage);
  console.log(enemyUnit);
} else {
  enemyUnit.hp -= effectiveDamage;
}

const enemyHp = enemyUnit.hp;

console.log(`Союзные войска ${alliedUnit.name} наносят прямой урон ${damageDealt}!`);
console.log(`Из-за брони вражеский отряд ${enemyUnit.name} получает ${effectiveDamage} урона!`);
console.log(`Остаток воинов у ${enemyUnit.name} в отряде: ${enemyUnit.count}`);
console.log(`Остаток здоровья вражеского отряда: ${enemyHp}`);
*/
