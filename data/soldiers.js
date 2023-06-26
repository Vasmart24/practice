import prompts from 'prompts';

class Unit {
  constructor(name, type, hp, maxHp, damage, armor, description, speed, count = 1, cost = null) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.armor = armor;
    this.description = description;
    this.speed = speed;
    this.count = count;
    this.cost = cost;
  }
}

export default Unit;
