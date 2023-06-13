import prompts from 'prompts';
import game from '../lib/game.js';
import configs from '../lib/configs.js';



const makePrompt = async () => {
  console.clear();
  if (game.data.isEnded) return;
  const { func } = await prompts(configs.menu);
  func(game);
  makePrompt();
};

makePrompt();