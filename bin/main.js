import prompts from 'prompts';
import Troubadour from 'troubadour';
import { configs, game, setPrevPrompt } from '../data/configs.js';

const troubadour = new Troubadour('sox');

const makePrompt = async (prompt) => {
  console.clear();
  if (game.isEnded) return;
  const { value } = await prompts(await prompt());
  setPrevPrompt(prompt);
  troubadour.play('sounds/click.wav');
  makePrompt(value ? configs[value] : prompt);
};

makePrompt(configs.menu);
