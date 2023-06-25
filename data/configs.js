import { save, load, getSaves } from '../src/save.js';
import { player } from './Player.js';
import cities from './Cities.js';
import Prompt from './Prompt.js';
import Troubadour from 'troubadour';
import equip from './equipment.js';

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
        console.clear();
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

