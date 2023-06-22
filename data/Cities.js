const cities = {
  Самсана: {
    buildings: {
      titles: ['Ратуша', 'Таверна', 'Рынок', 'Центр Инженерии', 'Госпиталь'],
      values: ['townhallActions', 'tavernActions', 'marketActions', 'engineerActions', 'hospitalActions'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'купить аммуницию', 'найм и улучшение войск', 'лечение войск']
    }
  },

  Дирра: {
    buildings: [
      { title: 'Ратуша', description: 'главное здание города', value: 'townhallActions'},
      { title: 'Отель', description: 'отдохнуть и прикупить вещей для похода', value: 'tavernActions' },
      { title: 'Казармы', description: 'найм и улучшение войск', value: 'engineerActions' },
      { title: 'Больница', description: 'лечение войск', value: 'hospitalActions' },
      { title: 'Арена', description: 'выйти на поединок', value: 'battleActions'},
      { title: 'Кузница', description: 'улучшить аммуницию', value: 'ammunationActions'}//dodelat'
    ]
  },

  'Прима Хара': {
    buildings: [
      { title: 'Ратуша', description: 'главное здание города', value: 'townhallActions'},
      { title: 'Кузница', description: 'улучшить аммуницию', value: 'ammunationActions'},//dodelat' ammunation
      { title: 'Рынок', description: 'купить аммуницию', value: 'marketActions'},
      { title: 'Казармы', description: 'найм и улучшение войск', value: 'engineerActions'},
      { title: 'Госпиталь', description: 'лечение войск', value: 'hospitalActions'}
    ]
  },
};

export default cities;
