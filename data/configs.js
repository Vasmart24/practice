import { save, load } from '../src/save.js';
import game from './game.js';
import actions from '../src/actions.js';

const configs = {
  menu: {
    action: null,
    prompt: {
      type: 'select',
      name: 'next',
      message: 'Меню',
      choices: [
        { title: 'Новая игра', value: 'startGame' },
        { title: 'Продолжить', value: 'saves' },
        { title: 'Сохранить', value: 'save' },
        { title: 'Выйти', value: 'endGame' },
      ],
    }
  },
  endGame: {
    action: actions.endGame,
  },
  startGame: {
    action: actions.showMessage,
    prompt: {
      type: 'select',
      name: 'next',
      message: `Выберите направление ${game.player.name}`,
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
