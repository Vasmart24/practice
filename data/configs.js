import { save, load, getSaves } from '../src/save.js';
import actions from '../src/actions.js';
import { player } from './Player.js';
import cities from './Cities.js';

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

const arenaTitles = city.buildingsActions.arena.titles;
const arenaDescriptions = city.buildingsActions.arena.descriptions;
const arenaValues = city.buildingsActions.arena.values;

const blacksmithTitles = city.buildingsActions.blacksmith.titles;
const blacksmithDescriptions = city.buildingsActions.blacksmith.descriptions;
const blacksmithValues = city.buildingsActions.blacksmith.values;
// следующее нужно будет переместить в новый файл, по типу 'Items'/'buyItems' и всё в таком духе


const configs = {
  menu: {
    getPromptData: () => [
      'Меню', ['Новая игра', 'Продолжить', 'Сохранить', 'Выйти'],
      ['startGame', 'savesList', 'save', 'endGame'],
    ],
  },
  savesList: {
    getPromptData: async () => {
      const saves = await getSaves();
      return [
        'Выберите сохранение', saves,
        ['startGame', 'startGame', 'startGame', 'startGame'],
      ];
    },
  },
  endGame: {
    action: actions.endGame,
    actionArgs: [null],
  },
  startGame: {
    getPromptData: () => {
      console.log('Описание Мира: \n');
      console.log(`Вы зашли в город ${player.getPlayerLocation()}.`);
      return [ 'Выберите, куда хотите пойти: ', 
      cityTitles, cityValues, cityDescriptions
    ]},
  },

  saves: {
    action: 'showSaves',
    prompt: {
      type: 'select',
      name: 'next',
      message: 'Выберите сохранение:',
      choices: [
        { title: 'Новая игра', value: 'startGame' },
        { title: 'Продолжить', value: 'saves' },
        { title: 'Сохранить', value: 'save' },
        { title: 'Выйти', value: 'endGame' },
      ],
    },
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

export default configs;
