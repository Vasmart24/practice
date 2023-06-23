import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';

const city = cities[player.getPlayerLocation()];

const cityTitles = city.buildings.titles;
const cityValues = city.buildings.values; 
const cityDescriptions = city.buildings.descriptions;

const townhallTitles = city.buildingsActions.townhall.titles;
const townhallDescriptions = city.buildingsActions.townhall.descriptions;
const townhallValues = city.buildingsActions.townhall.values;

const tavernTitles = city.buildingsActions.tavern.titles;
const tavernDescriptions = city.buildingsActions.tavern.descriptions;
const tavernValues = city.buildingsActions.tavern.values;

const marketTitles = city.buildingsActions.market.titles;
const marketDescriptions = city.buildingsActions.market.descriptions;
const marketValues = city.buildingsActions.market.values;

const engineeringTitles = city.buildingsActions.engineering.titles;
const engineeringDescriptions = city.buildingsActions.engineering.descriptions;
const engineeringValues = city.buildingsActions.engineering.values;

// const arenaTitles = city.buildingsActions.arena.titles;
// const arenaDescriptions = city.buildingsActions.arena.descriptions;
// const arenaValues = city.buildingsActions.arena.values;

// const blacksmithTitles = city.buildingsActions.blacksmith.titles;
// const blacksmithDescriptions = city.buildingsActions.blacksmith.descriptions;
// const blacksmithValues = city.buildingsActions.blacksmith.values;
// следующее нужно будет переместить в новый файл, по типу 'Items'/'buyItems' и всё в таком духе

// Хранилище данных конкретной игры
export let game = {
  isEnded: false,
  name: null
};

export const configs = {
  
  menu: () => {
    return new Prompt(
    '☰', ['🎮 Новая игра', '▶ Продолжить', '💾 Сохранить', '🪟  Выйти'],
    ['startGame', 'savesList', 'saveGame', 'endGame'], [],
    (val) => {
      console.log(`val в формате ${val}`);
      if (val === 'endGame') game.isEnded = true;
      return val;
    })
  },
  

  /*
  menu: {
    getPrompt: () => {
      return new Prompt(
      '☰', ['🎮 Новая игра', '▶ Продолжить', '💾 Сохранить', '🪟  Выйти'],
      ['startGame', 'savesList', 'saveGame', 'endGame'], [],
      (val) => {
        if (val === 'endGame') game.isEnded = true;
        return val;
      })
    },
  },
  */
 
  savesList: async () => {
    const saves = await getSaves();
    return new Prompt('Выберите сохранение', saves, saves, [],
    async (saveName) => {
      game = await load(saveName);
      return 'startGame';
    });
  },

  /*
  savesList: {
    getPrompt: async () => {
      const saves = await getSaves();
      return new Prompt('Выберите сохранение', saves, saves, [],
      async (saveName) => {
        game = await load(saveName);
        return 'startGame';
      });
    },
  },
  */

  saveGame: {
    getPrompt: () => {
      return {
        type: 'text',
        name: 'value',
        message: 'Как обзовем тебя, салага? (речь о сохранении)',
        format: async (saveName) => {
          game.name = saveName;
          save(game, saveName);
          console.log('❗ Сохранение заползло под шконку в saves, начальник');
          return 'menu';
        }
      }
    },
  },
  startGame: {
    getPrompt: () => {
      console.log(`Вы зашли в город ${player.getPlayerLocation()}.`);
      return new Prompt('Выберите, куда хотите пойти: ', 
      cityTitles, cityValues, cityDescriptions);
    }
  },
  townhallActions: {
    getPromptData: () => {
      console.log('Вы зашли в городскую ратушу.\n');
      return [ 'Выберите дальнейшее действие: ', 
      townhallTitles, townhallValues, townhallDescriptions
    ]},
  },

  tavernActions: {
    getPromptData: () => {
      console.log('Вы зашли в таверну.\n');
      return [ 'Выберите дальнейшее действие: ', 
      tavernTitles, tavernValues, tavernDescriptions
    ]},
  },

  marketActions: {
    getPromptData: () => {
      console.log('Вы попали на рынок.\n');
      return [ 'Выберите дальнейшее действие: ', 
      marketTitles, marketValues, marketDescriptions
    ]},
  },

  engineeringActions: {
    getPromptData: () => {
      console.log('Вы зашли в центр инженерии.\n');
      return [ 'Выберите дальнейшее действие: ', 
      engineeringTitles, engineeringValues, engineeringDescriptions
    ]},
  },

  arenaActions: {
    getPromptData: () => {
      console.log('Вы пришли на арену.\n');
      return [ 'Выберите дальнейшее действие: ',
      arenaTitles, arenaValues, arenaDescriptions
    ]},
  },

  blacksmithActions: {
    getPromptData: () => {
      console.log('Вы зашли в кузницу.\n');
      return [ 'Выберите дальнейшее действие: ',
      blacksmithTitles, blacksmithValues, blacksmithDescriptions
    ]},
  }
};
