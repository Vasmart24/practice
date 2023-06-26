import prompts from 'prompts';

class Unit {
<<<<<<< HEAD
  constructor(name, type, hp, maxHp, damage, armor, description, speed, count = 1, cost = null) {
=======
  constructor(name, type, hp, maxHp, damage, armor, speed, count = 1, cost = 0, requiredLevel = 1) {
>>>>>>> refs/remotes/origin/main
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.armor = armor;
<<<<<<< HEAD
    this.description = description;
=======
>>>>>>> refs/remotes/origin/main
    this.speed = speed;
    this.count = count;
    this.cost = cost;
    this.requiredLevel = requiredLevel;
  }
}

export default Unit;
