import prompts from 'prompts';
import Troubadour from 'troubadour';
import { configs, game, updatePromptsStack } from '../data/configs.js';

const troubadour = new Troubadour('sox');

const makePrompt = async (prompt) => {
  //console.clear();
  if (game.isEnded) return;
  let { nextPrompt } = await prompts(await prompt());
  
  if (!nextPrompt) {
    nextPrompt = game.currPrompt;
  } else if (nextPrompt === 'back') {
    nextPrompt = game.prevPrompt;
    updatePromptsStack();
  } else {
    updatePromptsStack(nextPrompt);
  }

  troubadour.play('sounds/click.wav');
  makePrompt(configs[nextPrompt]);
};

makePrompt(configs.menu);
