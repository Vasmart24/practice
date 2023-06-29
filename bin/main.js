import prompts from 'prompts';
import Troubadour from 'troubadour';
import { configs, game, updatePromptsStack } from '../data/configs.js';

const troubadour = new Troubadour('sox');

const makePrompt = async (prompt) => {
  console.clear();
  if (game.isEnded) return;
  let { nextPrompt } = await prompts(await prompt());
  
  if (!nextPrompt) {
    nextPrompt = game.currPrompt;
  } else if (nextPrompt != 'back') {
    updatePromptsStack(nextPrompt);
  } else {
    nextPrompt = game.prevPrompt;
    updatePromptsStack();
  }

  troubadour.play('sounds/click.wav');
  console.log(typeof nextPrompt)
  if (typeof nextPrompt === 'string') nextPrompt = configs[nextPrompt];
  makePrompt(nextPrompt);
};

makePrompt(configs.menu);
