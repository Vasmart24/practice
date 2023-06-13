import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname as path } from 'path';

const filename = fileURLToPath(import.meta.url);
const path = dirname(filename);
const fsp = fs.promises;

export const save = async ({ data }) => {
  try {
    await fsp.writeFile(__dirname + '/../saves/save0.json', JSON.stringify(data, null, 2));
  } catch(e) {
    throw new Error(e);
  }
  console.log('Игра успешно сохранена.');
};

export const load = async () => {
  const path = __dirname + '/../saves/';
  const files = await fsp.readdir(path).catch(console.log);
  console.log(files);
  /*
  try {
    const saves =
    const rawdata = await fsp.readFile(__dirname + savesFolder);
    const data = JSON.parse(rawdata);
    console.log('Игра успешно загружена.');
    return data;
  } catch (e) {
    throw new Error(e);
  }
  */
};

load();