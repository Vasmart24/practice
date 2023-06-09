// import prompts from "prompts";

const prompts = require('prompts');

const bloodCoins = 135;

const heavyMarine = {
  type: 'heavy marine',
  hp: 75,
  dmg: 15,
  armor: 10,
  cost: 135,
};

const marine = {
  cost: 75,
};

const penetrators = {
  cost: 115,
};

const z = (async () => {
  const heavyMarineCost = heavyMarine.cost;
  const marineCost = marine.cost;
  const penetratorsCost = penetrators.cost;

  const isEnoughCoinsForHeavy = (bloodCoins >= heavyMarineCost);
  const isEnoughCoinsForMarine = (bloodCoins >= marineCost);
  const isEnoughCoinsForPenetrators = (bloodCoins >= penetratorsCost);
  console.log(`your founds: ${bloodCoins}`);
  const buyTroops = await prompts({
    type: 'select',
    name: 'value',
    message: 'take a choise troop type',
    choices: [
      {
        title: `${Object.entries(heavyMarine).map(([key, value]) => ` ${key}: ${value}`)}`.trim(),
        description: 'healthy troop with good armor, but low damage',
        value: 'generating',
        disabled: !isEnoughCoinsForHeavy,
      },
      {
        title: 'marine', description: `cost: ${marineCost}`, value: 'generating', disabled: !isEnoughCoinsForMarine,
      },
      {
        title: 'penetrators', description: `cost: ${penetratorsCost}`, value: 'good choise', disabled: !isEnoughCoinsForPenetrators,
      },
    ],
    initial: 0,
  });
  console.log(buyTroops);
});
z();
