import prompts from 'prompts';
import Troubadour from 'troubadour';
import { configs, game, updatePromptsStack } from '../data/configs.js';

const troubadour = new Troubadour('sox');

const makePrompt = async (prompt) => {
  //console.clear();
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
  
  if (typeof nextPrompt === 'string') nextPrompt = configs[nextPrompt];
  makePrompt(nextPrompt);
};

makePrompt(configs.menu);
/*
в конфигах, где completeMainMission и getMainMission за параметр isDisabled отвечает 2 индекс в dialogues.js (он возвращает тру или фолс)
его нужно перезаписывать в правильный момент, чтобы корректно работало отключение сдачи и приёма задания 
в общем полазь в файлах dialogues.js (изучи функции под вторыми индексами), Player.js и в конфигах они взаимосвязаны для дизейбла
*/
