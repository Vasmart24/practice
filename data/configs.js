import { save, load, getSaves } from '../src/save.js';
import actions from '../src/actions.js';
import { player } from './Player.js';
import cities from './Cities.js';


const [buildings] = [cities[player.getPlayerLocation()].buildings];


// следующее нужно будет переместить в новый файл, по типу 'Items'/'buyItems' и всё в таком духе
const tavernItems = [
  { title: 'томатный секс', description: 'бери, чего думать-то? Цена - 10 денег', value: 'buy' },
  { title: 'виноградный секс', description: 'как томатный только слаще... Цена - 20 денег', value: 'buy' },
  { title: 'обычный секс', description: 'повыщает моральный дух войска(ебут-то тебя). Цена - (-60) денег', value: 'buy' }
];


const configs = {
  menu: {
    getPromptData: () => [
      'Меню', ['Новая игра', 'Продолжить', 'Сохранить', 'Выйти'],
      ['startGame', 'savesList', 'save', 'endGame']
    ],
  },
  savesList: {
    getPromptData: async () => {
      const saves = await getSaves();
      return [
        'Выберите сохранение', saves,
        ['startGame', 'startGame', 'startGame', 'startGame']
      ];
    },
  savesList: {
    getPromptData: async () => {
      const saves = await getSaves();
      return [
        'Выберите сохранение', saves,
        ['startGame', 'startGame', 'startGame', 'startGame']
      ];
    },
  },
  endGame: {
    action: actions.endGame,
    actionArgs: [null],
  },
  startGame: {
    action: null,
    actionArgs: ['Какой-то Текст, используемый как аргумент функции, определенной выше', 'Еще один текст'],
    prompt: {
      type: 'select',
      name: 'next',
      message: `Вы находитесь в городе ${player.getPlayerLocation()}, выберите дальнейшее действие: `,
      choices: buildings,
    },
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
  tavernActions: {
    action: null,
    prompt: {
      type: 'select',
      name: 'next',
      message: 'выберите следующее действие:',
      choices: [
        { title: 'купить', description: 'список доступных ресурсов', value: 'buyTavernItems' },
        { title: 'продать', description: 'список ресурсов для продажи', value: 'sell' },
        { title: 'койка-место', description: 'восстановить выносливость и сохранить прогресс', value: 'save' },
        { title: 'Вернутся в город', description: 'возвращение в город Самсана', value: 'returnToCity' },
      ],
    },
  },
  marketActions: {
    prompt: {
      type: 'select',
      name: 'next',
      message: 'выберите следующее действие:',
      choices: [
        { title: 'купить', description: 'купить снаряжение для героя', value: 'buyMarketItems' },
        { title: 'продать', description: 'продать снаряжение героя', value: 'sellItems', }
      ],
    },
  },
  buyTavernItems: {
    prompt: {
      type: 'select',
      name: 'next',
      message: 'выберите следующее действие:',
      choices: tavernItems,
    },
  },
};

export default configs;
