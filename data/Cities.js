const cities = {
  Самсана: {
    buildings: {
      titles: ['Ратуша', 'Таверна', 'Рынок', 'Центр Инженерии', 'Госпиталь'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'купить аммуницию', 'найм и улучшение войск', 'лечение войск'],
      values: ['townhallActions', 'tavernActions', 'marketActions', 'engineeringActions', 'hospitalActions']
    },
    buildingsActions: {
      townhall: {
        titles: ['поговорить с мэром', 'сдать задание', 'вернуться'],
        descriptions: ['узнать о городе и получить задаия', 'выполнить задание', 'Выход в город'],
        values: ['getMainMission', 'completeMainMission', 'backwards']
      },
      tavern: {
        titles: ['купить', 'продать', 'отдых', 'вернуться'],
        descriptions: ['купить провиант', 'продать провиант', 'восстановить выносливость и сохраниться', 'Выход в город'],
        values: ['buy', 'sellItems', 'rest', 'backwards']
      },
      market: {
        titles: ['создать', 'продать', 'вернуться'],
        descriptions: ['изготовить снаряжение', 'продать снаряжение', 'Выход в город'],
        values: ['craft', 'sellAmmunition', 'backwards']
      },
      engineering: {
        titles: ['найм', 'улучшить', 'разобрать','вернуться'],
        descriptions: ['создать войска', 'улучшить уровень создаваемых войск', 'переработать войска в биомассу', 'Выход в город'],
        values: ['hireTroops', 'upgradeTroops', 'recycleTroops','backwards']
      },
      hospital: {
        titles: ['лечить', 'вернуться'],
        descriptions: ['лечение войск', 'Выход в город'],
        values: ['heal', 'backwards']
      }
    },
  },

  Дирра: {
    buildings: [
      { title: 'Ратуша', description: 'главное здание города', value: 'townhallActions'},
      { title: 'Отель', description: 'отдохнуть и прикупить вещей для похода', value: 'tavernActions' },
      { title: 'Казармы', description: 'найм и улучшение войск', value: 'engineerActions' },
      { title: 'Больница', description: 'лечение войск', value: 'hospitalActions' },
      { title: 'Арена', description: 'выйти на поединок', value: 'battleActions'},
      { title: 'Кузница', description: 'улучшить аммуницию', value: 'ammunitionActions'}//dodelat'
    ]
  },

  'Прима Хара': {
    buildings: [
      { title: 'Ратуша', description: 'главное здание города', value: 'townhallActions'},
      { title: 'Кузница', description: 'улучшить аммуницию', value: 'ammunitionActions'},//dodelat' ammunation
      { title: 'Рынок', description: 'купить аммуницию', value: 'marketActions'},
      { title: 'Казармы', description: 'найм и улучшение войск', value: 'engineerActions'},
      { title: 'Госпиталь', description: 'лечение войск', value: 'hospitalActions'}
    ]
  },
};

export default cities;
