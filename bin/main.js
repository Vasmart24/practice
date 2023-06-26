import prompts from 'prompts';
import { configs, game, setPrevPrompt } from '../data/configs.js';
import Troubadour from 'troubadour';

const troubadour = new Troubadour('sox');

const makePrompt = async (prompt) => {
  console.clear();
  if (game.isEnded) return;
  let { value } = await prompts(await prompt());
  setPrevPrompt(prompt);
  troubadour.play('sounds/click.wav');
  makePrompt(value ? configs[value] : prompt);
};

makePrompt(configs.menu);
