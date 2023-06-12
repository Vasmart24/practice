import { save, getSave } from './../lib/save.js';

const endGame = (game) => game.isEnded = true;

// Объект configs - храненит настройки
// для отдельных промптов
// Почему так?
// 1) В объектах можно задавать имена переменным (наверное, код становится читаемее)
// 2) Не знаю, я даун
const configs = {
  menu: {
    type: 'select',
    name: 'value',
    message: '',
    choices: [
      { title: 'Продолжить', value: getSave },
      { title: 'Сохранить', value: save },
      { title: 'Выйти', value: endGame }
    ]
  },
  location0: {
    name: 'Город Скуфов',
    config: {
      type: 'select',
      name: 'value',
      message: `Вы в локации ${location0.name}`,
      choices: [
        { title: 'Продолжить', value: getSave },
        { title: 'Сохранить', value: save },
        { title: 'Выйти', value: endGame }
      ]
    } 
  }
};

export default configs;