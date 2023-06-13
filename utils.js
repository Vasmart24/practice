import prompts from 'prompts';

export const itemsFromRange = (str) => {
  const [min, max] = str.split('-');
  const difference = Number(max) - Number(min);
  const deviationFromMin = Math.round(Math.random() * difference);
  const item = Number(min) + deviationFromMin;
  return item;
};

export const giveMission = (npsType, missionIndex) => {
  [npsType].missions[missionIndex];
};
