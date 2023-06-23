import Troubadour from 'troubadour';
import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';

const troubadour = new Troubadour('sox');

/*
troubadour.on('start', () => {
  console.log('Music is playing...');
});

troubadour.on('end', () => {
  console.log('Music stopped...');
});
*/

const city = cities[player.getPlayerLocation()];

const cityTitles = city.buildings.titles;
const cityValues = city.buildings.values;
const cityDescriptions = city.buildings.descriptions;

const buildingsTitles = building.titles;
const buildingsDescriptions = building.descriptions;
const buildingsValues = building.values;
// следующее нужно будет переместить в новый файл, по типу 'Items'/'buyItems' и всё в таком духе

// Хранилище данных конкретной игры
export let game = {
  isEnded: false,
  name: null,
  player: {
    coins: 100,
  },
};

export const configs = {

  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ----------
  menu: () => {
    troubadour.play('../Music/Nils Frahm - You.mp3');
    return new Prompt(
      '☰',
      ['🎮 Новая игра', '🔃 Загрузить', '💾 Сохранить', '🪟  Выйти'],
      ['startGame', 'savesList', 'saveGame', 'endGame'],
      [],
      (val) => {
        troubadour.stop();
        if (val === 'endGame') game.isEnded = true;
        return val;
      },
    );
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

  /*
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
  */

  saveGame: () => {
    troubadour.play('../Music/Recording 1.mp3');
    return {
      type: 'text',
      name: 'value',
      message: 'Как обзовем тебя, салага? (речь о сохранении)',
      format: async (saveName) => {
        game.name = saveName;
        save(game, saveName);
        console.log('❗ Сохранение заползло под шконку в saves, начальник');
        return 'menu';
      },
    };
  },
  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ----------

  /*
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
  */

  startGame: () => {
    troubadour.stop();
    console.log(`Вы зашли в город ${player.getPlayerLocation()}.`);
    return new Prompt(
      'Выберите, куда хотите пойти: ',
      cityTitles,
      cityValues,
      cityDescriptions,
    );
  },

  /*
  startGame: {
    getPrompt: () => {
      console.log(`Вы зашли в город ${player.getPlayerLocation()}.`);
      return new Prompt('Выберите, куда хотите пойти: ',
      cityTitles, cityValues, cityDescriptions);
    }
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
