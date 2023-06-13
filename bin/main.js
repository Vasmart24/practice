import prompts from 'prompts';
import configs from '../lib/configs.js';

const makePrompt = async (config = configs.menu) => {
  console.clear();
  const res = await prompts(config);
  console.log(res);
  makePrompt();
};

makePrompt();
