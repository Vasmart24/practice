class Unit {
  constructor(name, hp, maxHp, damage, armor, speed, count = 1, cost = 0, requiredLevel = 1) {
    this.name = name;
    this.hp = hp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.armor = armor;
    this.speed = speed;
    this.count = count;
    this.cost = cost;
    this.requiredLevel = requiredLevel;
  }
}
export default Unit;
