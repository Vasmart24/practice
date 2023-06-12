import game from '../bin/game.js';
import configs from '../bin/configs.js';
import prompts from 'prompts';

const makePrompt = async () => {
  if (game.isEnded) return;
  const { value } = await prompts(configs.menu);
  value(game);
  makePrompt();
};

makePrompt();