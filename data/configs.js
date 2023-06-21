import { save, load, getSaves } from '../src/save.js';
import actions from '../src/actions.js';
import { player } from './Player.js';
import cities from './Cities.js';


const [buildings] = [cities[player.getPlayerLocation()].buildings];


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
  }
};

export default configs;
