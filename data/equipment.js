const equipmentFunction = {
  equip: (player, type, item) => {
  const ammunition = player.ammunition;
  if (ammunition[type].equiped === false) {
    ammunition[type].assign(item);
  }
},

unequip: (player, type) => {
  const emptySlot = {name: '', parameters: { atk: 0, armor: 0 }}
  player.ammunition[type].assign(emptySlot);
},

getAmmunitionName: (player) => {
  const ammunition = player.inventory.ammunition; 
  return ammunition.map((item)=> item.name);
},

getAmmunitionType: (player) => {
  const ammunition = player.inventory.ammunition; 
  return ammunition.map((item)=> item.type);
},

getAmmunitionDescription: (player) => {
  const ammunition = player.inventory.ammunition; 
  return ammunition.map((item)=> item.description);
},

getEquipAmunitionName: (player) => { 
  const ammunition = player.ammunition.filter((item)=> item.equiped === true);
  return ammunition.map((item)=> item.name);
},

getEquipAmmunitionType: (player) => {
  const ammunition = player.ammunition.filter((item)=> item.equiped === true);
  return ammunition.map((item)=> item.type);
},

getEquipAmmunitionDescription: (player) => {
  const ammunition = player.ammunition.filter((item)=> item.equiped === true);
  return ammunition.map((item)=> item.description);
},
}

export default equipmentFunction;
