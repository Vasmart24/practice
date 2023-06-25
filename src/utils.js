// Функция для вычисления случайного значения в заданном диапазоне
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для вычисления урона, наносимого войском
function calculateDamage(unit) {
  // Разбиваем строку мин-макс на отдельные значения
  const [minDamage, maxDamage] = unit.dmg.split('-');

  // Получаем случайное значение урона в заданном диапазоне
  const damage = getRandomValue(Number(minDamage), Number(maxDamage));

  // Вычисляем урон, учитывая количество воинов
  const totalDamage = damage * unit.count;

  // Возвращаем вычисленный урон
  return totalDamage;
}

// Функция для вычисления нанесённого урона с учётом брони
function calculateEffectiveDamage(damage, armor) {
  const effectiveDamage = damage * (100 - armor) / 100;
  return Math.round(effectiveDamage);
}

// Объект с характеристиками союзного войска
const alliedUnit = {
  name: 'Тяжёлый пехотинец',
  dmg: '26-30',
  armor: 70,
  count: 5,
  hp: 160,
};

// Объект с характеристиками вражеского отряда
const enemyUnit = {
  name: 'Биофенрикс',
  hp: 100,
  armor: 5,
};

// Вычисляем урон, наносимый союзным войском
const damageDealt = calculateDamage(alliedUnit);

// Применяем урон к вражескому отряду, учитывая броню
const effectiveDamage = calculateEffectiveDamage(damageDealt, enemyUnit.armor);
enemyUnit.hp -= effectiveDamage;

// Проверяем, если урон превышает оставшееся здоровье врага, уменьшаем количество воинов
if (effectiveDamage >= enemyUnit.hp) {
  const unitsKilled = Math.floor(enemyUnit.hp / effectiveDamage);
  alliedUnit.count -= unitsKilled;
}

// Выводим результат
console.log(`Войско ${alliedUnit.name} наносит урон ${damageDealt}`);
console.log(`Вражеский отряд ${enemyUnit.name} получает урон ${effectiveDamage}`);
console.log(`Остаток здоровья вражеского отряда: ${enemyUnit.hp}`);
console.log(`Остаток воинов в союзном отряде: ${alliedUnit.count}`);
