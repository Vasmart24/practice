import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';

const city = cities[player.getPlayerLocation()[0]];
const building = city.buildingsActions[player.getPlayerLocation()[1]];

const cityTitles = city.buildings.titles;
const cityValues = city.buildings.values; 
const cityDescriptions = city.buildings.descriptions;

const buildingsTitles = building.titles;
const buildingsDescriptions = building.descriptions;
const buildingsValues = building.values;
// следующее нужно будет переместить в новый файл, по типу 'Items'/'buyItems' и всё в таком духе

export let game = {
  isEnded: false,
  name: null
};

export const configs = {
    menu: () => {
      return new Prompt(
      '☰', ['Новая игра', 'Продолжить', 'Сохранить', 'Выйти'],
      ['startGame', 'savesList', 'saveGame', 'endGame'], [], (value) => {
        if (value === 'endGame') game.isEnded = true;
        return value;
      })
    },

  savesList: {
    getPrompt: async () => {
      const saves = await getSaves();
      return new Prompt('Выберите сохранение', saves, saves);
    },
    handleUserInput: async (saveName) => {
      game = await load(saveName);
      return 'startGame';
    },
  },
  saveGame: {
    getPrompt: () => {
      return {
        type: 'text',
        name: 'value',
        message: 'Как обзовем тебя, салага? (речь о сохранении)'
      }
    },
    handleUserInput: async (saveName) => {
      game.name = saveName;
      save(game, saveName);
      return 'menu';
    }
  },
  startGame: () => {
    console.log(`Вы зашли в город ${player.getPlayerLocation()}.`);
    return new Prompt('Выберите, куда хотите пойти: ', 
    cityTitles, cityValues, cityDescriptions, (val) => {
      player.addPlayerLocation
    });
  },

    townhallActions: () => {
      console.log('Вы зашли в городскую ратушу.\n');
      player.addPlayerLocation('Ратуша');
      return new Prompt('Выберите дальнейшее действие: ', 
      buildingsTitles, buildingsValues, buildingsDescriptions);
    },

  tavernActions: {
    getPrompt: () => {
      console.log('Вы зашли в таверну.\n');
      return new Prompt('Выберите дальнейшее действие: ', 
      buildingsTitles, buildingsValues, buildingsDescriptions);
    },
    handleUserInput: (value) => value
  },

  marketActions: {
    getPrompt: () => {
      console.log('Вы попали на рынок.\n');
      return new Prompt('Выберите дальнейшее действие: ', 
      buildingsTitles, buildingsValues, buildingsDescriptions);
    },
    handleUserInput: (value) => value
  },

  engineeringActions: {
    getPrompt: () => {
      console.log('Вы зашли в центр инженерии.\n');
      return new Prompt('Выберите дальнейшее действие: ', 
      buildingsTitles, buildingsValues, buildingsDescriptions);
    },
    handleUserInput: (value) => value
  },

  arenaActions: {
    getPrompt: () => {
      console.log('Вы пришли на арену.\n');
      return new Prompt('Выберите дальнейшее действие: ',
      buildingsTitles, buildingsValues, buildingsDescriptions);
    },
    handleUserInput: (value) => {
    }
  },

  blacksmithActions: {
    getPromptData: () => {
      console.log('Вы зашли в кузницу.\n');
      return new Prompt('Выберите дальнейшее действие: ',
      buildingsTitles, buildingsValues, buildingsDescriptions)
    },
    handleUserInput: (value) => value
  }
};
