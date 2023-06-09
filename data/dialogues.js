import { player } from "./Player.js";

const mayorDialogues = [
  [
    'Первая миссия',
    `В нашем городе вас ждут опасности и тьма, вам необходимо обзавестись снаряжением.
    Его стоимость будет вычтена из бюджета города.
    C помощью этих средств, вам нужно приобрести достойное оружие, способное противостоять беспощадным монстрам с окраины.
    Судьба города и всех его граждан будет зависеть только от вас.
    Будущее нашего народа зависит от вашей решимости и остроты вашего меча.
    Удачи, герой!`,
      (itemName, player) => {
      const isExist = player.ammunition.find((item) => (item.name === itemName) && item.equiped);
      if (isExist) return true;
      return false;
    },
    220,
  ],
  [
    'Кровавая бойня',
    'Мэр: [Имя главного героя], в биопанковском хаосе, отряд кровавых волков нарушает наше спокойствие. Наши граждане живут в страхе и угрозе.\nЯ даю вам задание - уничтожить этот отряд и вернуть безопасность наших улиц.\nЗа вашу отвагу и успешное выполнение задания - 1000 кредитов и благодарность всего города. Ваше новое орудие убийства станет силой, которое проложит путь к светлому будущему.\nИдите, герой, и сделайте этот город свободным от кровавых волков!',
    (itemName, player) => {
      const isExist = player.inventory.items.find((item) => (item.name === itemName));
      if (isExist) return true;
      return false;
    },
    300,
  ],
  {missionsDialogues: [
        'Мэр: [Имя главного героя], твои био-процессы великолепны, ты сокрушил отряд кровавых волков. Однако, раны наших бойцов требуют лечения.\nЗадание: отправься в таверну, где технобармен Макс продаёт специальный провиант, способный ускорить их заживление.\nЗа успех - 500 кредитов и вечную признательность раненых воинов. Возьми на себя эту миссию, они нуждаются в тебе, герой биопанка.',
    'Мэр: [Имя главного героя], наши дни в тени гидралиска просто нестерпимы. Он растёт в силе и угрожает нашему городу. Ты - последняя надежда нашей цивилизации.\nЗадание: отправляйся в центр биоинженерии и создай новый отряд био-воинов, способных противостоять гидралиску.\nЗа успешное выполнение задания - 1000 кредитов и восхищение всего города. Используй свои кибернетические способности и невероятные навыки, чтобы спасти нас от этой биологической угрозы, герой биопанка!',
    'Мэр: [Имя главного героя], ты вернулся, и я вижу жало гидралиска в твоих руках - свидетельство его смерти. Твоя отвага и смелость удивительны.\nГород восхищается тобой. С глубоким уважением я объявляю, что заданий больше нет. Ты выполнил все свои обязанности с блеском.\nВозьми эту награду - 2000 кредитов и благодарность нашего города. Ты можешь отправиться в следующий город, герой, там тебя ждут новые испытания и приключения. Удачи в пути, и пусть сопутствует тебе био-сила!',
  ]},
]

export default mayorDialogues;
