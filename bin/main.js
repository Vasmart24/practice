import prompts from 'prompts';
import { configs, game } from '../data/configs.js';

const makePrompt = async (config) => {
  if (game.isEnded) return;
  const prompt = await config.getPrompt();

  const { value } = await prompts(prompt);
  const promptLink = await config.handleUserInput(value);
  makePrompt(configs[promptLink]);
};

makePrompt(configs.menu);
