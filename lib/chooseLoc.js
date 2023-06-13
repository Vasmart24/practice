import prompts from 'prompts';
import { cities } from './Citys.js';
import player from './Player.js';

const v = (async () => {
  const chooseLoc = await prompts({
    type: 'select',
    name: 'value',
    message: 'Where would you want to go?',
    choices: [
      {
        title: `${cities.city1.buildings.townHall.location}`,
        description: `${cities.city1.buildings.townHall.description}`,
        value: player.changeLocation(cities.city1.buildings.townHall.location),
      },
    //   {
    //     title: 'tavern', description: `cost: ${marineCost}`, value: 'generating', disabled: !isEnoughCoinsForMarine,
    //   },
    //   {
    //     title: 'hospital', description: `cost: ${penetratorsCost}`, value: 'good choise', disabled: !isEnoughCoinsForPenetrators,
    //   },
    //   {
    //     title: 'engineeringCorps', description: `cost: ${psionicsCost}`, value: '', disabled: !isEnoughCoinsForPsionics,
    //   },
    //   {
    //     title: 'townHall', description: `cost: ${psionicsCost}`, value: '', disabled: !isEnoughCoinsForPsionics,
    //   },
    ],
    initial: 0,
  });
});
v();
console.log(player.location);
