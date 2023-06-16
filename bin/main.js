import prompts from 'prompts';
import configs from '../lib/configs.js';
import game from '../lib/game.js';

const makePrompt = async (config) => {
  console.log(game)
  if (game.isEnded) return;
  //console.clear();
  if (config.nextPrompt) {
    // Промпт с text
    const next = config.nextPrompt;
    const { value } = await prompts(config.prompt);
    config.action(value);
    makePrompt(configs[next]);
  } else {
    // Промпт с select
    if (config.action) config.action();
    const { next } = await prompts(config.prompt);
    makePrompt(configs[next]);
  }
};

makePrompt(configs.menu);