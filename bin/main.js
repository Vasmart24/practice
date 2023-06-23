import prompts from 'prompts';
import { configs, game } from '../data/configs.js';

const makePrompt = async (prompt) => {
  if (game.isEnded) return;
  const { value } = await prompts(await prompt());
  makePrompt(configs[value]);
};

makePrompt(configs.menu);
