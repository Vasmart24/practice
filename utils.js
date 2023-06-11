export const itemsFromRange = (str) => {
  const [min, max] = str.split('-');
  const difference = max - min;
  const deviationFromMin = Math.floor(Math.random() * difference) + 1;
  const item = min + deviationFromMin;
  return item;
}

