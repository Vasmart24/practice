import { player } from "./Player.js";

const firstMission = {
  name: 'первая миссия',
  reward: [
    {name: 'базовый кристалл', count: 1, description: ''}, 
    {name: 'кибер-пластина', count: 15, description: ''},
  ],
  requirements: player.ammunition[0].equiped,
};

const secondMission = {
  name: 'вторая миссия', 
  reward: [
    {name: 'базовый кристалл', count:'' , description: ''},
    {name: 'кибер-пластина', count:'' , description: ''},
  ],
  requirements: player.inventory.items.map((item) => {
    result = [];
    const { name, count } = item;
    result.push(name === 'шкура волка' && count >= 10);
    return result.includes(true);
  })
}
