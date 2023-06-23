import prompts from 'prompts';
import { configs, game } from '../data/configs.js';

const makePrompt = async (prompt) => {
  console.log(prompt)
  if (game.isEnded) return;
  const { value } = await prompts(await prompt());
  console.log(value)
  makePrompt(configs[value]);
};

makePrompt(configs.equipment);
