import Troubadour from 'troubadour';
import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';
import equip from './equipment.js';
import Unit from './soldiers.js';

const troubadour = new Troubadour('sox');

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
  player
  /*
  player: {
    level: 1,
    coins: 100,
  },
  */
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
  new Unit(
    'пси-адепты', 10, 10, '25-30', '99.5%', 1, 1, 540, 5
  ),
  
  new Unit(
    'тяжелый пехотинец', 160, 160, '25-35', '70%', 1, 1, 135, 3
  ),
  
  new Unit(
    'пехотинец', 170, 170, '30-40', '30%', 1, 1, 75, 1
  ),
  
  new Unit(
    'плазма-воины', 110, 110, '45-50', '20%', 1, 1, 115, 4
  )
];

const isAvailable = (playerLevel, playerCoins, requiredLevel, requiredCoins) => {
  return (playerLevel >= requiredLevel) && (playerCoins >= requiredCoins);
};

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
        console.clear();
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
    titles.push('Назад');
    return new Prompt(
      'Выберите сохранение',
      titles,
      values,
      [],
      async (saveName) => {
        if (!saveName) return 'menu';
        game = await load(saveName);
        return 'startGame';
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

  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ЭКИПИРОВКИ ПРЕДМЕТОВ ----------

  equipment: () => new Prompt(
    'Выбери действие',
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
      'Выбери снаряжение',
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
      'Выбери снаряжени',
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

  engineeringActions: () => {
    console.log('Вы зашли в центр БИОинженерии.\n');
    return new Prompt(
      'Выберите дальнейшее действие: ',
      city.getSamsanBuilding('БИОинженерия', 'titles'),
      city.getSamsanBuilding('БИОинженерия', 'values'),
      city.getSamsanBuilding('БИОинженерия', 'descriptions'),
    );
  },

  samsanBattleActions: () => {
    console.log('Вы вышли в окраину города.\n');
    return new Prompt(
      'Выберите дальнейшее действие: ',
      city.getSamsanBuilding('окраина', 'titles'),
      city.getSamsanBuilding('окраина', 'values'),
      city.getSamsanBuilding('окраина', 'descriptions'),
      (val) => (val != 'back' ? val : game.prevPrompt.name),
    );
  },

  hireTroops: () => {
    const unitNames = soldiersArr.map((unit) => unit.name);
    const unitsAvailability = soldiersArr.map((unit) => !isAvailable(player.level, player.coins, unit.requiredLevel, unit.cost));
    const unitDescriptions = soldiersArr.map((unit) => `  Цена: ${unit.cost}
    Здоровье юнита:${unit.hp}
    Броня: ${unit.armor}
    приблизительный урон: ${unit.damage}`);
    const armySoldiers = soldiersArr.map((unit) => {
      return new Unit(unit.name, unit.hp, unit.maxHp, unit.damage, unit.armor, unit.speed, 1, unit.cost);
    });
    console.log(armySoldiers);
    return new Prompt(
      'Выберите отряд для найма: ',
      [...unitNames, 'Назад'],
      [...armySoldiers, 'Back'],
      unitDescriptions,
      (val) => {
        let nextPrompt = game.currentPrompt.name;
        if (val != 'Back') {
          Array.prototype.includes.call(player.army, val.name) ? player.army.push(val) : 
          player.army[indexOf(val)].count += 1;
          console.log(player.army);
          player.coins -= val.cost;
          console.log(player.coins);
        } else {
          nextPrompt = 'engineeringActions';
        }
        return nextPrompt;
      },
      unitsAvailability
    );
  },
};
