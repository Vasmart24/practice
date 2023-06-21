import prompts from 'prompts';
import configs from '../data/configs.js';
import game from '../data/game.js';

const makePrompt = async (config) => {
  if (game.isEnded) return;
  console.clear();
  if (config.action) config.action(...config.actionArgs);
  const { next } = await prompts(config.prompt);
  makePrompt(configs[next]);
};

makePrompt(configs.menu);
