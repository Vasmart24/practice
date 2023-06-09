// import prompts from "prompts";

const prompts = require('prompts');

const bloodCoins = 135;

const heavyMarine = {
  class: 'heavy marine',
  type: 'armor',
  hp: 160,
  dmg: 25,
  armor: `70%`,
  cost: 135,
};

const LightMarine = {
  class: 'light marine',
  type: 'light',
  hp: 170,
  dmg: 30,
  armor: `30%`,
  cost: 75,
};

const penetrators = {
  class: 'penetrators',
  type: 'piercing',
  hp: 110,
  dmg: 45,
  armor: `20%`,
  cost: 115,
};

const psionics = {
  class: 'psionics',
  type: 'psi',
  hp: 10,
  dmg: 19,
  armor: `0%`,
  cost: 240,
}

const z = (async () => {
  const heavyMarineCost = heavyMarine.cost;
  const marineCost = LightMarine.cost;
  const penetratorsCost = penetrators.cost;
  const psionicsCost = psionics.cost;

  const isEnoughCoinsForHeavy = (bloodCoins >= heavyMarineCost);
  const isEnoughCoinsForMarine = (bloodCoins >= marineCost);
  const isEnoughCoinsForPenetrators = (bloodCoins >= penetratorsCost);
  const isEnoughCoinsForPsionics = (bloodCoins >= psionicsCost);

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
        title: 'light marine', description: `cost: ${marineCost}`, value: 'generating', disabled: !isEnoughCoinsForMarine,
      },
      {
        title: 'penetrators', description: `cost: ${penetratorsCost}`, value: 'good choise', disabled: !isEnoughCoinsForPenetrators,
      },
      {
        title: 'psionics', description: `cost: ${psionicsCost}`, value: '', disabled: !isEnoughCoinsForPsionics,
      },
    ],
    initial: 0,
  });
  console.log(buyTroops);
});
z();
