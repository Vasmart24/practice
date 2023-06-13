/*
import { save, load } from './save.js';
import game from './game.js';
*/

const configs = {
  menu: {
    type: 'select',
    name: 'next',
    message: 'Меню',
    choices: [
      { title: 'Новая игра', value: 'nameprompt' },
      { title: 'Продолжить', value: '' },
      { title: 'Сохранить', value: save },
      { title: 'Выйти', value: game.endGame },
    ],
  },
  location: {
    type: 'select',
    name: 'next',
    message: '',
    choices: [
      { title: 'Новая игра', value: 'nameprompt' },
      { title: 'Продолжить', value: '' },
      { title: 'Сохранить', value: save },
      { title: 'Выйти', value: game.endGame },
    ],
  }
};

export default configs;
