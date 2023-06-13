import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname as path } from 'path';

const filename = fileURLToPath(import.meta.url);
const path = dirname(filename);
const fsp = fs.promises;

export const save = async (gameData) => {
  try {
    await fsp.writeFile(`${path}/../saves/save0.json`, JSON.stringify(gameData, null, 2));
  } catch (e) {
    throw new Error(e);
  }
  console.log('Игра успешно сохранена.');
};

export const getSave = async () => {
  try {
    const rawdata = await fsp.readFile(`${path}/../saves/save0.json`);
    const data = JSON.parse(rawdata);
    console.log('Игра успешно загружена.');
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
