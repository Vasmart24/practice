import prompts from 'prompts';
import configs from '../data/configs.js';
import Prompt from '../data/Prompt.js';
/*
const makePrompt = async (config) => {
  //if (game.isEnded) return;
  //console.clear();

  let prompt = config.prompt ? config.prompt : null;
  if (config.action) {
    if (config.action.returnValue === 'Prompt') {
      const params = config.action.params();
      prompt = await config.action.func();
      console.log(prompt);
    } else {
      config.action.func(...config.actionArgs);
    }
  }
  const { next } = await prompts(prompt);
  makePrompt(configs[next]);
};
*/

const makePrompt = async (config) => {
  const prompt = new Prompt(...await config.getPromptData());


  const { value } = await prompts(prompt);
  console.log(value);
  makePrompt(configs[value]);
};

makePrompt(configs.menu);
