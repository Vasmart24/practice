import prompts from 'prompts';
import configs from '../data/configs.js';
import Prompt from '../data/Prompt.js';

const makePrompt = async (config) => {
  const prompt = new Prompt(...await config.getPromptData());

  const { value } = await prompts(prompt);
  // console.log(value);
  makePrompt(configs[value]);
};

makePrompt(configs.menu);
