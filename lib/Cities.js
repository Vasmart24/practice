const cities = {
  city1: {
    name: 'new Folk',
    pointsOfInterst: {
      buildings: {
        taver: ['market', 'hotel', 'dealer', 'hotelManager'],
        infirmary: ['healStation', 'doctor'],
        barracks: ['recruitingTroops', 'animalDealer', 'mercenary'],
        townHall: {
          title: 'town hall',
          description: 'place where is mayor that may give you a mission',
          value: makePrompt(townHallNpc),
        },
      },
      townHallNpc: {
        missions: [],
        completedMissions: [],
      },
      minorNpc: [
        'dweller1', 'dealer', 'doctor', 'hotelManager', 'mercenary', 'animalDealer',
        'homeless',
      ],
    },
  },
  city2: {
    pointsOfInterst: {
      ivents: [],
      buildings: {
        taver: ['market', 'hotel'],
        infirmary: ['healStation'],
        barracks: ['recruitingTroops'],
        reconstructionBuilding: ['reconstructingTroops'],
      },
      npc: [],
    },
  },
  city3: {
    pointsOfInterst: {
      ivents: [],
      buildings: {
        taver: ['market', 'hotel'],
        infirmary: ['healStation'],
        barracks: ['recruitingTroops'],
        reconstructionBuilding: ['reconstructTroops'],
      },
      npc: [],
    },
  },
};
