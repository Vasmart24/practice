const cities = {
  Самсана: {
    buildings: {
      titles: ['Ратуша', 'Таверна', 'Рынок', 'Центр Инженерии'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'купить аммуницию', 'найм и улучшение войск'],
      values: ['townhallActions', 'tavernActions', 'marketActions', 'engineeringActions']
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
      }
    },
  },

  Дирра: {
    buildings: {
      titles: ['Ратуша', 'Отель', 'Казармы', 'Арена', 'Кузница'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'найм и улучшение войск', 'выйти на поединок', 'улучшить аммуницию'],
      values: ['townhallActions', 'tavernActions', 'engineerActions', 'battleActions', 'ammunitionActions']
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
      engineering: {
        titles: ['найм', 'улучшить', 'разобрать','вернуться'],
        descriptions: ['создать войска', 'улучшить уровень создаваемых войск', 'переработать войска в биомассу', 'Выход в город'],
        values: ['hireTroops', 'upgradeTroops', 'recycleTroops','backwards']
      },
      arena: {
        titles: ['сразиться', 'вернуться'],
        descriptions: ['выйти на поединок', 'Выход в город'],
        values: []                                                 //dodelat''''''
      },
      blacksmith: {
        titles: ['создать', 'продать', 'вернуться'],
        descriptions: ['создать аммуницию', 'продать аммуницию', 'выход в город'],
        values: [' ', ' ', 'backwards']                                                 //dodelat''''''
      }
    },
  },

  'Прима Хара': {
    buildings: {
      titles: ['Ратуша', 'Рынок', 'Казармы', 'Арена'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'найм и улучшение войск', 'выйти на поединок'],
      values: ['townhallActions', 'marketActions', 'engineerActions', 'battleActions']
    },
    buildingsActions: {
      townhall: {
        titles: ['поговорить с мэром', 'сдать задание', 'вернуться'],
        descriptions: ['узнать о городе и получить задаия', 'выполнить задание', 'Выход в город'],
        values: ['getMainMission', 'completeMainMission', 'backwards']
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
      arena: {
        titles: ['сразиться', 'вернуться'],
        descriptions: ['выйти на поединок', 'Выход в город'],
        values: []                                                          //dodelat''''''
      },
    },
  },
};

export default cities;

