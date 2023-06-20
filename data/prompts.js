import prompts from 'prompts';
import cities from './Cities.js';
import { player } from './Player.js';

// const tavernPrompt = async() => {
//   console.log('hui');
//   const userInput = await prompts({
//     type: 'select',
//     name: 'value',
//     message: `choose action in taverna`,
//     choices: [
//       {
//         title: 'zalupa', value: 'go fuck yourself',
//       },
//       {
//         title: 'ne zalupa', value: 'chto-to',
//       }
//     ],
//     inital: 0,
//   })
// }
const tavernBuyItems = [
  {
    title: 'водка', description: 'обычная водка, чё ещё думать-то?', value: () => { player.inventory[title] ? player.inventory[title] += 1 : 1; },
  },
  {
    title: 'чипсеки', description: 'самое то под пиво, стоит 10 деняк', value: { title: 'чипсеки', description: 'восстанавливает 10 единиц здоровья выбранному отряду' },
  },
];

const buy = async (tavernItems) => {
  console.clear();
  const choices = tavernItems;
  const message = `Салам молекулам, ${player.getPlayerName()}, ты находишься в таверне, чё бушь покупать?`;
  const { boughtItem } = await prompts({
    type: 'select',
    name: 'item',
    message,
    choices,
  });
  buyItem(boughtItem);
};

buy(tavernBuyItems);
