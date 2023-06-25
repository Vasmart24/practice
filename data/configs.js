import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';
import Troubadour from 'troubadour';
import e from './equipment.js';

const troubadour = new Troubadour('sox');

//const troubadour = new Troubadour('sox');

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
  player: {
    coins: 100,
  },
};

const setDifficulty = (val) => {
  game.difficulty = val;
};

// difficulty
const difficultyMessage = 'Выберите сложность';
const difficultyTitles = ['👶 Легкий', '👦 Нормальный', '🗿 Сложный'];
const difficultyValues = ['easy', 'normal', 'hard'];
const difficultyDescriptions = ['Для слабых людей', 'Очереднярский уровень', 'Самый крутой что ли?'];

export const configs = {

  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ----------

  menu: () => {
    //troubadour.play('sounds/menu.mp3');
    return new Prompt(
      '☰',
      ['🎮 Новая игра', '🔃 Загрузить', '💾 Сохранить', '🪛  Настройки', '🪟  Выйти'],
      ['initGame', 'savesList', 'saveGame', 'settings', 'endGame'],
      [],
      (val) => {
        //troubadour.stop();
        if (val === 'endGame') game.isEnded = true;
        return val;
      },
    );
  },

  initGame: () => {
    return new Prompt(
      difficultyMessage,
      difficultyTitles,
      difficultyValues,
      difficultyDescriptions,
      (val) => {
        setDifficulty(val);
        return 'samsanCity';
      }
    );
  },

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
        return 'menu';
      },
    };
  },

  settings: () => {
    return new Prompt(
      '',
      ['Уровень сложности', 'Назад'],
      ['difficulty', 'menu'],
    );
  },

  difficulty: () => {
    return new Prompt(
      'Выберите сложность',
      [...difficultyTitles, 'Назад'],
      [...difficultyValues, 'settings'],
      difficultyDescriptions,
      (val) => {
        if (val !== 'settings') setDifficulty(val);
        return 'settings';
      }
    );
  },

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

  equipment: () => {
    return new Prompt(
      'Выбери действие',
      ['Надеть снаряжения', 'Снять снаряжение', 'Вернутся'],
      ['equip', 'unequip','backwards'],
      ['Выбрать снаряжение из инвентаря','Снять надетое снаряжение','Вернутся в город'],
    );
  },

  equip: () => {
    const titles = e.getAmmunitionName(player);
    const values = e.getAmmunitionType(player);
    const description = e.getAmmunitionDescription(player);

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
      const titles = e.getEquipAmunitionName(player);
      const values = e.getEquipAmmunitionType(player);
      const description = e.getEquipAmmunitionDescription(player);
    return new Prompt(
      'Выбери снаряжени',
      [...titles.flat()],
      [...values.flat()],
      [...description.flat()]
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
    return new Prompt('Выберите дальнейшее действие: ', 
    city.getSamsanBuilding('Ратуша', 'titles'),
    city.getSamsanBuilding('Ратуша', 'values'),
    city.getSamsanBuilding('Ратуша', 'descriptions'));
  },

  tavernActions: () => {
    console.log('Вы зашли в таверну.\n');
    return new Prompt('Выберите дальнейшее действие: ', 
    city.getSamsanBuilding('Таверна', 'titles'),
    city.getSamsanBuilding('Таверна', 'values'),
    city.getSamsanBuilding('Таверна', 'descriptions'));
  },

  marketActions: () => {
    console.log('Вы попали на рынок.\n');
    return new Prompt('Выберите дальнейшее действие: ', 
    city.getSamsanBuilding('Рынок', 'titles'),
    city.getSamsanBuilding('Рынок', 'values'),
    city.getSamsanBuilding('Рынок', 'descriptions'));
  },

  engineeringActions: () => {
      console.log('Вы зашли в центр БИОинженерии.\n');
      return new Prompt('Выберите дальнейшее действие: ', 
      city.getSamsanBuilding('БИОинженерия', 'titles'),
      city.getSamsanBuilding('БИОинженерия', 'values'),
      city.getSamsanBuilding('БИОинженерия', 'descriptions'));
  },

  samsanBattleActions: () => {
    console.log('Вы вышли в окраину города.\n');
    return new Prompt('Выберите дальнейшее действие: ',
    city.getSamsanBuilding('окраина', 'titles'),
    city.getSamsanBuilding('окраина', 'values'),
    city.getSamsanBuilding('окраина', 'descriptions'));
  },
};

//   arenaActions: () => {
//       console.log('Вы пришли на арену.\n');
//       return new Prompt('Выберите дальнейшее действие: ',
//       buildingsTitles, buildingsValues, buildingsDescriptions);
//     },
//   },

//   blacksmithActions: {
//     getPromptData: () => {
//       console.log('Вы зашли в кузницу.\n');
//       return new Prompt('Выберите дальнейшее действие: ',
//       buildingsTitles, buildingsValues, buildingsDescriptions)
//     },
//     handleUserInput: (value) => value
//   }
// };
