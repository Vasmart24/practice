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
  if (!unit.count) {console.log(`отряд ${unit.name} повержен!`)};
  if (damage >= unit.hp) {
    damage -= unit.hp;
    unit.hp = unit.maxHp;
    unit.count -= 1;
    killUnit(unit, damage);
  } else {
    unit.hp -= damage;
  }
};
