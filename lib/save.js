import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fsp = fs.promises;

export const save = async (gameData) => {
  try {
    await fsp.writeFile(__dirname + '/../saves/save0.json', JSON.stringify(gameData, null, 2));
  } catch(e) {
    throw new Error(e);
  }
  console.log('Игра успешно сохранена.');
};

export const getSave = async () => {
  try {
    const rawdata = await fsp.readFile(__dirname + '/../saves/save0.json');
    const data = JSON.parse(rawdata);
    console.log('Игра успешно загружена.');
    return data;
  } catch(e) {
    throw new Error(e);
  }
};