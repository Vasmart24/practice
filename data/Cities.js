const cities = {
  Самсана: {
    getSamsanBuilding(building, prop) { return this.buildingsActions[building][prop]; },
    buildings: {
      titles: ['Ратуша', 'Таверна', 'Рынок', 'Центр Инженерии', 'Окраина'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'купить аммуницию', 'найм и улучшение войск', 'выйти за город'],
      values: ['townhallActions', 'tavernActions', 'marketActions', 'engineeringActions', 'samsanBattleActions'],
    },
    buildingsActions: {
      Ратуша: {
        titles: ['поговорить с мэром', 'сдать задание', 'вернуться'],
        descriptions: ['узнать о городе и получить задаия', 'выполнить задание', 'Выход в город'],
        values: ['getMainMission', 'completeMainMission', 'back'],
      },
      Таверна: {
        titles: ['Настройки снаряжения', 'Отдых', 'Изменить сложность', 'вернуться'],
        descriptions: ['Надеть/снять снаряжение', 'восстановить выносливость и сохраниться', 'Я пахну слабостью', 'Выход в город'],
        values: ['equipment', 'saveGame', 'difficulty', 'back'],
      },
      Рынок: {
        titles: ['создать', 'продать', 'вернуться'],
        descriptions: ['изготовить снаряжение', 'продать снаряжение', 'Выход в город'],
        values: ['craft', 'sellAmmunition', 'back'],
      },
      БИОинженерия: {
        titles: ['найм', 'вернуться'],
        descriptions: ['создать войска', 'Выход в город'],
        values: ['hireTroops', 'back'],
      },
      окраина: {
        titles: ['Сразиться', 'Сбежать'],
        descriptions: ['Начать бой', 'выйти из боя (выносливось будет потрачена)'],
        values: ['battle', 'back'],
      },
    },
  },

  Дирра: {
    buildings: {
      titles: ['Ратуша', 'Отель', 'Казармы', 'Арена', 'Кузница'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'найм и улучшение войск', 'выйти на поединок', 'улучшить аммуницию'],
      values: ['townhallActions', 'tavernActions', 'engineerActions', 'battleActions', 'blacksmithActions'],
    },
    buildingsActions: {
      Ратуша: {
        titles: ['поговорить с мэром', 'сдать задание', 'вернуться'],
        descriptions: ['узнать о городе и получить задаия', 'выполнить задание', 'Выход в город'],
        values: ['getMainMission', 'completeMainMission', 'backwards'],
      },
      Отель: {
        titles: ['купить', 'продать', 'отдых', 'вернуться'],
        descriptions: ['купить провиант', 'продать провиант', 'восстановить выносливость и сохраниться', 'Выход в город'],
        values: ['buy', 'sellItems', 'rest', 'backwards'],
      },
      Казармы: {
        titles: ['найм', 'улучшить', 'разобрать', 'вернуться'],
        descriptions: ['создать войска', 'улучшить уровень создаваемых войск', 'переработать войска в биомассу', 'Выход в город'],
        values: ['hireTroops', 'upgradeTroops', 'recycleTroops', 'backwards'],
      },
      Арена: {
        titles: ['сразиться', 'вернуться'],
        descriptions: ['выйти на поединок', 'Выход в город'],
        values: ['beginBattle', 'backwards'],
      },
      Кузница: {
        titles: ['создать', 'продать', 'вернуться'],
        descriptions: ['создать аммуницию', 'продать аммуницию', 'выход в город'],
        values: ['craft', 'sellAmmunition', 'backwards'],
      },
    },
  },

  'Прима Хара': {
    buildings: {
      titles: ['Ратуша', 'Рынок', 'Казармы', 'Арена'],
      descriptions: ['главное здание города', 'место отдыха и закупки провизией', 'найм и улучшение войск', 'выйти на поединок'],
      values: ['townhallActions', 'marketActions', 'engineerActions', 'battleActions'],
    },
    buildingsActions: {
      townhall: {
        titles: ['поговорить с мэром', 'сдать задание', 'вернуться'],
        descriptions: ['узнать о городе и получить задаия', 'выполнить задание', 'Выход в город'],
        values: ['getMainMission', 'completeMainMission', 'backwards'],
      },
      market: {
        titles: ['создать', 'продать', 'вернуться'],
        descriptions: ['изготовить снаряжение', 'продать снаряжение', 'Выход в город'],
        values: ['craft', 'sellAmmunition', 'backwards'],
      },
      engineering: {
        titles: ['найм', 'улучшить', 'разобрать', 'вернуться'],
        descriptions: ['создать войска', 'улучшить уровень создаваемых войск', 'переработать войска в биомассу', 'Выход в город'],
        values: ['hireTroops', 'upgradeTroops', 'recycleTroops', 'backwards'],
      },
      arena: {
        titles: ['сразиться', 'вернуться'],
        descriptions: ['выйти на поединок', 'Выход в город'],
        values: ['beginBattle', 'backwards'],
      },
    },
  },
};

export default cities;
