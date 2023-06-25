import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';
import Troubadour from 'troubadour';
import e from './equipment.js';

const troubadour = new Troubadour('sox');

//const troubadour = new Troubadour('sox');

const city = cities[player.getPlayerLocation()[0]];console.log(city);
const building = city.buildingsActions[player.getPlayerLocation()[player.getPlayerLocation().length - 1]]; console.log(building);

const cityTitles = city.buildings.titles;
const cityValues = city.buildings.values;
const cityDescriptions = city.buildings.descriptions;

// const buildingsTitles = building.titles;
// const buildingsDescriptions = building.descriptions;
// const buildingsValues = building.values;
// следующее нужно будет переместить в новый файл, по типу 'Items'/'buyItems' и всё в таком духе

// Хранилище данных конкретной игры
export let game = {
  isEnded: false,
  name: null,
  difficulty: 'normal',
  player: {
    coins: 100,
  },
};

export const configs = {

  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ----------
  menu: () => {
    //troubadour.play('sounds/menu.mp3');
    return new Prompt(
      '☰',
      ['🎮 Новая игра', '🔃 Загрузить', '💾 Сохранить', '🪛  Настройки', '🪟  Выйти'],
      ['samsanCity', 'savesList', 'saveGame', 'settings', 'endGame'],
      [],
      (val) => {
        //troubadour.stop();
        if (val === 'endGame') game.isEnded = true;
        return val;
      },
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
      ['Легкий', 'Нормальный', 'Сложный', 'Назад'],
      ['easy', 'normal', 'hard', 'settings'],
      ['Для слабых людей', 'Очереднярский уровень', 'Самый крутой что ли?'],
      (val) => {
        console.log(val);
        if (val !== 'settings') game.difficulty = val;
        return 'settings';
      }
    );
  },
  // ---------- ПРОМПТЫ ДЛЯ МЕНЮ ----------

  // menu -> Новая игра -> samsanCity
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
      [...description.flat()]
    
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
  }
};
//   startGame: {
//     getPrompt: () => {
//       console.log(`Вы зашли в город ${player.getPlayerLocation()}.`);
//       return new Prompt('Выберите, куда хотите пойти: ',
//       cityTitles, cityValues, cityDescriptions);
//     }
//   },

    townhallActions: () => {
      console.log('Вы зашли в городскую ратушу.\n');
      player.addPlayerLocation('Ратуша');
      return new Prompt('Выберите дальнейшее действие: ', 
      buildingsTitles, buildingsValues, buildingsDescriptions);
    }

//   tavernActions: {
//     getPrompt: () => {
//       console.log('Вы зашли в таверну.\n');
//       return new Prompt('Выберите дальнейшее действие: ', 
//       buildingsTitles, buildingsValues, buildingsDescriptions);
//     },
//     handleUserInput: (value) => value
//   },

//   marketActions: {
//     getPrompt: () => {
//       console.log('Вы попали на рынок.\n');
//       return new Prompt('Выберите дальнейшее действие: ', 
//       buildingsTitles, buildingsValues, buildingsDescriptions);
//     },
//     handleUserInput: (value) => value
//   },

//   engineeringActions: {
//     getPrompt: () => {
//       console.log('Вы зашли в центр инженерии.\n');
//       return new Prompt('Выберите дальнейшее действие: ', 
//       buildingsTitles, buildingsValues, buildingsDescriptions);
//     },
//     handleUserInput: (value) => value
//   },

//   arenaActions: {
//     getPrompt: () => {
//       console.log('Вы пришли на арену.\n');
//       return new Prompt('Выберите дальнейшее действие: ',
//       buildingsTitles, buildingsValues, buildingsDescriptions);
//     },
//     handleUserInput: (value) => {
//     }
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
