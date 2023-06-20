import prompts from 'prompts';
import configs from '../data/configs.js';

const makePrompt = async (config) => {
  if (config.actions) config.actions();
  const { next } = await prompts(config.prompt);
  makePrompt(configs[next]);
};

makePrompt(configs.menu);
