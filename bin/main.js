import game from '../lib/game.js';
import configs from '../lib/configs.js';
import prompts from 'prompts';

const makePrompt = async () => {
  if (game.isEnded) return;
  const { value } = await prompts(configs.menu);
  value(game);
  makePrompt();
};
