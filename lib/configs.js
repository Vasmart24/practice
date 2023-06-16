import { save, load } from './save.js';
import game from './game.js';
import functions from './functions.js';

const configs = {
  menu: {
    action: null,
    prompt: {
      type: 'select',
      name: 'next',
      message: 'Меню',
      choices: [
        { title: 'Новая игра', value: 'createPlayer' },
        { title: 'Продолжить', value: 'saves' },
        { title: 'Сохранить', value: 'save' },
        { title: 'Выйти', value: 'endGame' },
      ],
    }
  },
  endGame: {
    action: functions.endGame,
  },
  createPlayer: {
    action: functions.createPlayer,
    nextPrompt: 'startGame',
    prompt: {
      type: 'text',
      name: 'value',
      message: 'Введите имя игрока',
    }
  },
  startGame: {
    action: functions.showMessage,
    prompt: {
      type: 'select',
      name: 'next',
      message: 'Выберите направление',
      choices: [
        { title: 'Пойти направо', value: '' },
        { title: 'Пойти налево', value: '' }
      ],
    }
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
    }
  }
};

export default configs;
