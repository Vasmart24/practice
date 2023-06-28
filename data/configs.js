import Troubadour from 'troubadour';
import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';
import equip from './equipment.js';
import Unit from './soldiers.js';
import { аммуниция } from './ammunition.js';
import { titles } from './ammunition.js';

//import { creeps as enemy } from "./forest-creeps.js"
import initiateBattle from './battle.js';

const troubadour = new Troubadour('sox');


const helmetsCategory = ['penis','penis','penis'];
const shop = {helmets: {helmetsCategory, hui: false}}
// const troubadour = new Troubadour('sox');

// troubadour.on('start', () => {
//   console.log('Music is playing...');
// });

// troubadour.on('end', () => {
//   console.log('Music stopped...');
// });

const city = cities[player.getPlayerLocation()];

const cityTitles = city.buildings.titles;
const cityValues = city.buildings.values;
const cityDescriptions = city.buildings.descriptions;

// Хранилище данных конкретной игры
export let game = {
  isEnded: false,
  name: null,
  difficulty: 'normal',
  promptsStack: ['menu'],
  prevPrompt: null,
  currPrompt: 'menu',
  currBattle: null,
  player
};

export const updatePromptsStack = (prompt) => {
  if (prompt) game.promptsStack.push(prompt);
  else game.promptsStack.pop();
  updatePrevPrompt();
  updateСurrPrompt();
};

export const updatePrevPrompt = () => game.prevPrompt = game.promptsStack[game.promptsStack.length - 2];

export const updateСurrPrompt = () => game.currPrompt = game.promptsStack[game.promptsStack.length - 1];

const setDifficulty = (val) => {
  game.difficulty = val;
};

// difficulty
const difficultyMessage = 'Выберите сложность';
const difficultyTitles = ['👶 Легкий', '👦 Нормальный', '🗿 Сложный'];
const difficultyValues = ['easy', 'normal', 'hard'];
const difficultyDescriptions = ['Для слабых людей', 'Очереднярский уровень', 'Самый крутой что ли?'];

//                      КЛАСС СОЛДАТ
const soldiersArr = [
  new Unit('пси-адепты', 10, 10, '25-30', '99.5%', 1, 1, 540, 5),

  new Unit('тяжелый пехотинец', 160, 160, '25-35', '70%', 1, 1, 135, 4),

  new Unit('пехотинец', 170, 170, '30-40', '30%', 1, 1, 75, 1),

  new Unit('плазма-воины', 110, 110, '45-50', '20%', 1, 1, 115, 3),
];

const isAvailable = (playerLevel, playerCoins, requiredLevel, requiredCoins) => (playerLevel >= requiredLevel) && (playerCoins >= requiredCoins);

export const configs = {

  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ----------

  menu: () =>
    // troubadour.play('sounds/menu.mp3');
    new Prompt(
      '☰',
      ['🎮 Новая игра', '🔃 Загрузить', '💾 Сохранить', '🪛  Настройки', '🪟  Выйти'],
      ['initGame', 'savesList', 'saveGame', 'settings', 'endGame'],
      [],
      (val) => {
        // troubadour.stop();
        if (val === 'endGame') game.isEnded = true;
        return val;
      },
    ),

  initGame: () => new Prompt(
    difficultyMessage,
    difficultyTitles,
    difficultyValues,
    difficultyDescriptions,
    (val) => {
      setDifficulty(val);
      return 'samsanCity';
    },
  ),

  savesList: async () => {
    const saves = await getSaves();
    const titles = [...saves];
    const values = [...saves];
    return new Prompt(
      'Выберите сохранение',
      [...titles, 'Назад'],
      [...values, 'back'],
      [],
      async (val) => {
        if (val != 'back') game = await load(saveName);
        return 'back';
      },
    );
  },

  saveGame: () => {
    troubadour.play('sounds/save.mp3');
    return {
      type: 'text',
      name: 'value',
      message: 'Как обзовем тебя, салага? (речь о сохранении)',
      format: async (saveName) => {
        save(game, saveName);
        console.log('❗ Сохранение заползло под шконку в saves, начальник');
        return game.prevPrompt.name;
      },
    };
  },

  settings: () => new Prompt(
    '',
    ['Уровень сложности', 'Назад'],
    ['difficulty', 'back'],
  ),

  difficulty: () => new Prompt(
    'Выберите сложность',
    [...difficultyTitles, 'Назад'],
    [...difficultyValues, 'back'],
    difficultyDescriptions,
    (nextPrompt) => {
      if (nextPrompt != 'back') {
        setDifficulty(val);
        nextPrompt = game.currPrompt;
      }
      return nextPrompt;
    },
  ),

  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ЭКИПИРОВКИ ПРЕДМЕТОВ ----------

  equipment: () => new Prompt(
    'Выберите действие',
    ['Надеть снаряжения', 'Снять снаряжение', 'Вернутся'],
    ['equip', 'unequip', 'backwards'],
    ['Выбрать снаряжение из инвентаря', 'Снять надетое снаряжение', 'Вернутся в город'],
  ),

  equip: () => {
    const titles = equip.getAmmunitionName(player);
    const values = equip.getAmmunitionType(player);
    const description = equip.getAmmunitionDescription(player);

    console.log(titles);
    console.log(values);
    console.log(description);
    return new Prompt(
      'Выберите снаряжение',
      [...titles.flat()],
      [...values.flat()],
      [...description.flat()],
    );
  },

  unequip: () => {
    const titles = equip.getEquipAmunitionName(player);
    const values = equip.getEquipAmmunitionType(player);
    const description = equip.getEquipAmmunitionDescription(player);
    return new Prompt(
      'Выберите снаряжение',
      [...titles.flat()],
      [...values.flat()],
      [...description.flat()],
    );
  },

  // ---------- ПРОМПТЫ ДЛЯ ДЕЙСТВИЙ В ГОРОДЕ ----------

  samsanCity: () => {
    troubadour.play('sounds/birds.wav');
    console.log(`Вы зашли в город ${player.getPlayerLocation()}.`);
    return new Prompt(
      'Выберите, куда хотите пойти: ',
      cityTitles,
      cityValues,
      cityDescriptions,
    );
  },

  townhallActions: () => {
    console.log('Вы зашли в городскую ратушу.\n');
    return new Prompt(
      'Выберите дальнейшее действие: ',
      city.getSamsanBuilding('Ратуша', 'titles'),
      city.getSamsanBuilding('Ратуша', 'values'),
      city.getSamsanBuilding('Ратуша', 'descriptions'),
    );
  },

  tavernActions: () => {
    console.log('Вы зашли в таверну.\n');
    return new Prompt(
      'Выберите дальнейшее действие: ',
      city.getSamsanBuilding('Таверна', 'titles'),
      city.getSamsanBuilding('Таверна', 'values'),
      city.getSamsanBuilding('Таверна', 'descriptions'),
    );
  },

  marketActions: () => {
    console.log('Вы попали на рынок.\n');
    return new Prompt(
      'Выберите дальнейшее действие: ',
      city.getSamsanBuilding('Рынок', 'titles'),
      city.getSamsanBuilding('Рынок', 'values'),
      city.getSamsanBuilding('Рынок', 'descriptions'),
    );
  },

  // ['Категория 1',
  //   ['Предмет типа снаряжения 1', 'Еще один предмет типа снаряжения 1'],
  //   ['value1', 'value2']
  // ]
  // ['Категория 2',
  // ['Предмет типа снаряжения 2', 'Еще один предмет типа снаряжения 2'],
  //   ['value1', 'value2']
  // ]
  craft: () => {

    return new Prompt(
      'Выберите тип снаряжения',
      ['Тип снаряжения 1', 'Тип снаряжения 2', 'назад'],
      [['Категория 1',
      ['Предмет типа снаряжения 1', 'Еще один предмет типа снаряжения 1', 'Назад'],
      ['value1', 'value2', 'back']
    ], ['Категория 2',
    ['Предмет типа снаряжения 2', 'Еще один предмет типа снаряжения 2', 'Назад'],
      ['value1', 'value2', 'back']
    ], 'back'],[],
      (category)=> {
        let nextPrompt = () => { return new Prompt(...category)};
        if (category === 'back') nextPrompt = category;
        return nextPrompt;
      }
    )
  },

  engineeringActions: () => {
    console.log('Вы зашли в центр Биоинженерии.\n');
    return new Prompt(
      'Выберите дальнейшее действие: ',
      city.getSamsanBuilding('БИОинженерия', 'titles'),
      city.getSamsanBuilding('БИОинженерия', 'values'),
      city.getSamsanBuilding('БИОинженерия', 'descriptions'),
    );
  },

  samsanBattleActions: () => {
    console.log('Вы вышли в окраину города.\n');

    const enemies = initiateBattle(game);
    console.log(game.currBattle);

    return new Prompt(
      'Выберите дальнейшее действие: ',
      city.getSamsanBuilding('окраина', 'titles'),
      city.getSamsanBuilding('окраина', 'values'),
      city.getSamsanBuilding('окраина', 'descriptions'),
      (val) => {
        if (val === 'battle') game.currBattle = enemies;
        return val;
      }
    );
  },

  battle: () => {
    const enemiesNames = game.currBattle.map((enemy) => enemy.name);
    const enemiesDesriptions = game.currBattle.map((enemy) => `${enemy.hp}/${enemy.maxHp}, кол-во ${enemy.count}`);

    return new Prompt(
      'Your turn: ',
      enemiesNames,
      game.currBattle,
      enemiesDesriptions,
      (enemy) => {
        enemy.hp -= game.player.atk;

        if (enemy.hp <= 0) {
          troubadour.play('sounds/onKill.mp3');
          game.currBattle = game.currBattle.filter((enemy) => enemy.hp > 0); // update currBattle
          if (game.currBattle.length === 0) {
            console.log('Ты победил!!!!!!');
            return 'back';
          }
        }
      }
    );
  },

  hireTroops: () => {
    const unitNames = soldiersArr.map((unit) => unit.name);
    const unitDescriptions = soldiersArr.map((unit) => `  Цена: ${unit.cost}, броня: ${unit.armor}\n  Здоровье: ${unit.hp}, урон: ${unit.damage}, `);
    const unitsAvailability = soldiersArr.map((unit) => !isAvailable(player.level, player.coins, unit.requiredLevel, unit.cost));
    console.log(`у вас ${player.coins} биомассы`);
    return new Prompt(
      'Выберите отряд для найма: ',
      [...unitNames, 'Назад'],
      [...soldiersArr, 'back'],
      unitDescriptions,
      (val) => {
        if (val != 'back') {
          const unit = player.army.find((unit) => unit.name === val.name);
          if (unit) {
            // Если отряд уже существует, увеличиваем количество на 1
            unit.count += 1;
          } else {
            player.army.push({
              name: val.name,
              hp: val.hp,
              maxHp: val.maxHp,
              damage: val.damage,
              armor: val.armor,
              speed: val.speed,
              count: val.count,
            });
          }
          player.coins -= val.cost;
          console.log(`Отряды игрока: ${player.army.map((unit) => ` ${unit.name} (${unit.count})`)}`);
          console.log(`Остаток монет: ${player.coins}`);
          return undefined;
        }
        return val;
      },
      unitsAvailability,
    );
  },
};
