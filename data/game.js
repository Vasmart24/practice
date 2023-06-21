import { load } from '../src/save.js';

let game = {
  isEnded: false,
  property1: 'value1',
  property2: {
    propert3: 'value3',
  },
};

export const gameInit = (saveName) => {
  game = load(saveName);
};
