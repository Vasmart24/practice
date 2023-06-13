export const cities = {
  city1: {
    name: 'newFolk',
    buildings: {
      taver: ['market', 'hotel', 'dealer', 'hotelManager'],
      infirmary: ['healStation', 'doctor'],
      barracks: ['recruitingTroops', 'animalDealer', 'mercenary'],
      townHall: {
        location: 'town hall',
        description: 'Place where you can get a job from the mayor',
        npc: {
          name: 'mayor',
        }
        },
    },
    pointsOfInterst: {
      ivents: [
        'cityDescription',
        'callFromTheGeneral',
        'meetingWithCheckpointSecurity',
        'meetingWithMaor',
        'meetingWithDealer',
        'meetingWithDoctor',
        'meetingWithHotelManager',
        'meetingWithMercenary',
        'meetingWithAnimalDealer',
      ],
      
      majorNpc: ['mayor', 'checkpointSecurity', 'general'],
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
