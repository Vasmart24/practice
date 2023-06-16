import prompts from "prompts"
import { cities } from "./lib/Cities.js"
import player from "./lib/Player.js"

const playerLocation = player.currentLocation;
const playerName = player.name;

const makeCityPrompt = async (playerLocation) => {
  console.log(`${playerName}, you are in ${playerLocation}.`);
  const chooseBuilding = await prompts({
    type: 'select',
    name: 'value',
    message: 'choose building where you would go:',
    choices: cities[playerLocation].buildings,
    initial: 0,
  });
  console.log(chooseBuilding);
};

makeCityPrompt(playerLocation);
