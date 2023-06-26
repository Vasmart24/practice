class ammunition {
  constructor(name, type, parameters) {
    this.name = name;
    this.type = type;
    this.parameters = [...parameters];
  }
};

const firstHelmet = new ammunition('Нейрофрейм', 'голова', [
  {atk: 2, armor: 4},
  {description: 'Базовый шлем, вряд ли защитит от чего-то сильного, но от чье-го то удара черепушку убережёт.'}
]);
console.log(firstHelmet);
const secondHelmet = new ammunition('Хроматический Шлем', 'голова', [
  {atk: 3, armor: 6},
  {description: 'Хроматический шлем. Вещь потяжелее, вероятнее всего спасёт тебя даже от удара кувалды, но не факт.'}
]);

const thirdHelmet = new ammunition('Инфузор', 'голова', [
  {atk: 4, armor: 8},
  {description: 'Более чем приличный шлем, защищать будет хорошо, головку убережёт.'}
]);

const fourthHelmet = new ammunition('Биогарда', 'голова', [
  {atk: 6, armor: 12},
  {description: 'Лучший шлем в своём классе, можешь не сомневаться в его прочности.'}
]);





const firstWeapon = new ammunition('Стальное жало', 'оружие', [
  {atk: 8, armor: 0},
  {description: 'Обычный меч, больше и сказать-то нечего.'}
]);

const secondWeapon = new ammunition('Саванная заря', 'оружие', [
  {atk: 12, armor: 0},
  {description: 'Неплохая зубочистка, хотя и далеко не лучшая. Можешь ей поубивать тварей, хотя свою шкуру такому оружию доверять не советую.'}
]);

const thirdWeapon = new ammunition('Мехрех', 'оружие', [
  {atk: 18, armor: 0},
  {description: 'Малышка ещё лучше, не стыдно ходить и в походы с такой, хоть и не лучшая.'}
]);

const fourthWeapon = new ammunition('Меч амоса', 'оружие', [
  {atk: 27, armor: 0},
  {description: 'Решил играть по-серьёзному? Тогда тебе точно стоит брать его. Чего ещё можно желать для атаки.'}
]);





const firstChestPlaid = new ammunition('Неофьюз', 'нагрудник', [
  {atk: 2, armor: 5},
  {description: 'Базовый нагрудник, самый порстейший. Таким скорее чисто тело прикрыть.'}
]);

const secondChestPlaid = new ammunition('Пульсар', 'нагрудник', [
  {atk: 3, armor: 8},
  {description: 'Уже лучше, но.. Всё равно я бы такой не доверился. Кожу может и спасёт, но тут больше надо за рёбра бояться.'}
]);

const thirdChestPlaid = new ammunition('Мальзер', 'нагрудник', [
  {atk: 4, armor: 12},
  {description: 'От волков тебя спасёт точно, можешь не сомневаться. Можешь бегать по пустыне и даже пойти в серьёзный бой с умными противниками.'}
]);

const fourthChestPlaid = new ammunition('Битблэйд', 'нагрудник', [
  {atk: 7, armor: 17},
  {description: 'Да, ради этого точно стоило пройти такой путь, уж поверь. Лучше ты вряд ли сыщешь на этой планете.'}
]);





const firstLeggings = new ammunition('Нанокожа', 'поножи', [
  {atk: 1, armor: 3},
  {description: 'Не лучше самых обычных штанов, надейся, что тебе в этом в ноги не атакуют.'}
]);

const secondLeggings = new ammunition('Генбрюки', 'поножи', [
  {atk: 1, armor: 4},
  {description: 'Вещь эта потяжелее, спасёт от укуса,хотя мутировавшие волки с четыремя челюстями будут рады такой красавицей полакомиться.'}
]);

const thirdLeggings = new ammunition('Импульс', 'поножи', [
  {atk: 3, armor: 6},
  {description: 'Малышки получше, уже можно на что-то надеяться в бою.'}
]);

const fourthLeggings = new ammunition('Ногавицы', 'поножи', [
  {atk: 4, armor: 10},
  {description: 'Да, несомненно лучшие.'}
]);






const firstBoots = new ammunition('Синтетические штиблеты', 'ботинки', [
  {atk: 1, armor: 2},
  {description: 'Это чуть лучше тапок, но все же с чего-то начинают, разве не так?'}
]);

const secondBoots = new ammunition('Экзоподошва', 'ботинки', [
  {atk: 2, armor: 3},
  {description: 'От жара пустыни, может, и защищат, хотя и защиты маловато'}
]);

const thirdBoots = new ammunition('Нейрокиксы', 'ботинки', [
  {atk: 3, armor: 6},
  {description: 'Вещица из неплохих, в таких могу рекомендовать идти в дальние походы.'}
]);

const fourthBoots = new ammunition('Экзосабожки', 'ботинки', [
  {atk: 5, armor: 10},
  {description: 'Если ты правда надеешься идти в бой, то только в этих.'}
]);





const firstRing = new ammunition('Нейроритм', 'кольцо', [
  {atk: 2, armor: 2},
  {description: 'Обычное на вид кольцо, мало чего умеет.'}
])

const secondRing = new ammunition('Сиропыль', 'кольцо', [
  {atk: 3, armor: 3},
  {description: 'Редкая диковина, хотя.. Ладно, можешь бежать в бой.'}
]);

const thirdRing = new ammunition('Генкодерь', 'кольцо', [
  {atk: 4, armor: 4},
  {description: 'Это неплохое дополнение к общему комплекту оружия. Кто отказывается от бонусов?'}
]);

const fourthRing = new ammunition('Нейроциклон', 'кольцо', [
  {atk: 5, armor: 5},
  {description: 'Это уже большая редкость, можешь не сомневаться при её покупке.'}
]);
