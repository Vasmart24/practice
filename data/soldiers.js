import prompts from 'prompts';

const bloodCoins = 600;
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

class Unit {
  constructor(name, type, hp, maxHp, damage, armor, description, count = 1, cost = null) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.armor = armor;
    this.description = description;
    this.count = count;
    this.cost = cost;
  }
};

export default Unit;
