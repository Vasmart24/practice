import Prompt from "./Prompt.js";

class Ammunition {
  constructor(name, type, parameters, cost = 10) {
    this.name = name;
    this.type = type;
    this.parameters = [...parameters];
    this.cost = cost;
  }
}

export const аммуниция = {
head: [
  new Ammunition('Нейрофрейм', 'голова', [
    { atk: 2, armor: 4 },
    { description: 'Базовый шлем, вряд ли защитит от чего-то сильного, но от чье-го то удара черепушку убережёт.' },
  ]),
  new Ammunition('Хроматический Шлем', 'голова', [
    { atk: 3, armor: 6 },
    { description: 'Хроматический шлем. Вещь потяжелее, вероятнее всего спасёт тебя даже от удара кувалды, но не факт.' },
  ]),
  new Ammunition('Инфузор', 'голова', [
    { atk: 4, armor: 8 },
    { description: 'Более чем приличный шлем, защищать будет хорошо, головку убережёт.' },
  ]),
  new Ammunition('Биогарда', 'голова', [
    { atk: 6, armor: 12 },
    { description: 'Лучший шлем в своём классе, можешь не сомневаться в его прочности.' },
  ]),
],

weapon: {
  оружие: [
    new Ammunition('нано-сабля', 'оружие', [
      { atk: 8, armor: 0 },
      { description: 'Обычный меч, больше и сказать-то нечего.' },
    ]),
    new Ammunition('Саванная заря', 'оружие', [
      { atk: 12, armor: 0 },
      { description: 'Неплохая зубочистка, хотя и далеко не лучшая. Можешь ей поубивать тварей, хотя свою шкуру такому оружию доверять не советую.' },
    ]),
    new Ammunition('Мехрех', 'оружие', [
      { atk: 18, armor: 0 },
      { description: 'Малышка ещё лучше, не стыдно ходить и в походы с такой, хоть и не лучшая.' },
    ]),
    new Ammunition('Меч амоса', 'оружие', [
      { atk: 27, armor: 0 },
      { description: 'Решил играть по-серьёзному? Тогда тебе точно стоит брать его. Чего ещё можно желать для атаки.' },
    ]),
  ] 
},

chest: {
  нагрудники: [
    new Ammunition('Неофьюз', 'нагрудник', [
      { atk: 2, armor: 5 },
      { description: 'Базовый нагрудник, самый порстейший. Таким скорее чисто тело прикрыть.' },
    ]),
    new Ammunition('Пульсар', 'нагрудник', [
      { atk: 3, armor: 8 },
      { description: 'Уже лучше, но.. Всё равно я бы такой не доверился. Кожу может и спасёт, но тут больше надо за рёбра бояться.' },
    ]),
    new Ammunition('Мальзер', 'нагрудник', [
      { atk: 4, armor: 12 },
      { description: 'От волков тебя спасёт точно, можешь не сомневаться. Можешь бегать по пустыне и даже пойти в серьёзный бой с умными противниками.' },
    ]),
    new Ammunition('Битблэйд', 'нагрудник', [
      { atk: 7, armor: 17 },
      { description: 'Да, ради этого точно стоило пройти такой путь, уж поверь. Лучше ты вряд ли сыщешь на этой планете.' },
    ]),
  ]
},

leggings: {
  поножи: [
    new Ammunition('Нанокожа', 'поножи', [
      { atk: 1, armor: 3 },
      { description: 'Не лучше самых обычных штанов, надейся, что тебе в этом в ноги не атакуют.' },
    ]),
    new Ammunition('Генбрюки', 'поножи', [
      { atk: 1, armor: 4 },
      { description: 'Вещь эта потяжелее, спасёт от укуса,хотя мутировавшие волки с четыремя челюстями будут рады такой красавицей полакомиться.' },
    ]),
    new Ammunition('Импульс', 'поножи', [
      { atk: 3, armor: 6 },
      { description: 'Малышки получше, уже можно на что-то надеяться в бою.' },
    ]),
    new Ammunition('Ногавицы', 'поножи', [
      { atk: 4, armor: 10 },
      { description: 'Да, несомненно лучшие.' },
    ]),
  ]
},

boots: {
  носки: [
    new Ammunition('Синтетические штиблеты', 'ботинки', [
      { atk: 1, armor: 2 },
      { description: 'Это чуть лучше тапок, но все же с чего-то начинают, разве не так?' },
    ]),
    new Ammunition('Экзоподошва', 'ботинки', [
      { atk: 2, armor: 3 },
      { description: 'От жара пустыни, может, и защищат, хотя и защиты маловато' },
    ]),
    new Ammunition('Нейрокиксы', 'ботинки', [
      { atk: 3, armor: 6 },
      { description: 'Вещица из неплохих, в таких могу рекомендовать идти в дальние походы.' },
    ]),
    new Ammunition('Экзосабожки', 'ботинки', [
      { atk: 5, armor: 10 },
      { description: 'Если ты правда надеешься идти в бой, то только в этих.' },
    ]),
  ]
},


 ring: {
  кольца: [
    new Ammunition('Нейроритм', 'кольцо', [
      { atk: 2, armor: 2 },
      { description: 'Обычное на вид кольцо, мало чего умеет.' },
    ]),
    new Ammunition('Сиропыль', 'кольцо', [
      { atk: 3, armor: 3 },
      { description: 'Редкая диковина, хотя.. Ладно, можешь бежать в бой.' },
    ]),
    new Ammunition('Генкодерь', 'кольцо', [
      { atk: 4, armor: 4 },
      { description: 'Это неплохое дополнение к общему комплекту оружия. Кто отказывается от бонусов?' },
    ]),
    new Ammunition('Нейроциклон', 'кольцо', [
      { atk: 5, armor: 5 },
      { description: 'Это уже большая редкость, можешь не сомневаться при её покупке.' },
    ]),
  ]
},
};

function convertToArray(data) {
  return Object.keys(data).map(key => ({ [key]: data[key] }));
}

const ammunitionArray = convertToArray(аммуниция);
// Создание списка типов снаряжения
let ammunitionTypes = '';
ammunitionArray.forEach((equipment) => {
  const equipmentType = Object.keys(equipment)[0];
  ammunitionTypes += `${equipmentType}\n`;
});

export const titles = ammunitionArray.map((ammunition)=> Object.keys(ammunition)).flat();
