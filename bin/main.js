import { save, getSave } from './../save.js';
import game from '../game.js';
import configs from '../configs.js';
import prompts from 'prompts';

const makePrompt = async () => {
  if (game.isEnded) return;
  const { value } = await prompts(configs.menu);
  console.log(value);
  value(game);
  makePrompt();
};

makePrompt();