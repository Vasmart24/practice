import { save, load } from './../lib/save.js';
import game from './game.js';

const configs = {
  menu: {
    type: 'select',
    name: 'func',
    message: 'Меню',
    choices: [
      { title: 'Продолжить', value: load },
      { title: 'Сохранить', value: save },
      { title: 'Выйти', value: game.endGame }
    ]
  }
};

export default configs;
