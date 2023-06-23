import prompts from 'prompts';
import { configs, game } from '../data/configs.js';
import Troubadour from 'troubadour';

const troubadour = new Troubadour('sox');

const makePrompt = async (prompt) => {
  console.clear();
  if (game.isEnded) return;
  const { value } = await prompts(await prompt());
  troubadour.play('sounds/click.wav');
  makePrompt(configs[value]);
};

makePrompt(configs.equipment);
