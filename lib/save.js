import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url); //eslint-disable-line
const __dirname = dirname(__filename); //eslint-disable-line
const fsp = fs.promises;

export const save = async ({ data }) => {
  try {
    await fsp.writeFile(`${__dirname}/../saves/save0.json`, JSON.stringify(data, null, 2));
  } catch (e) {
    throw new Error(e);
  }
  console.log('Игра успешно сохранена.');
};

export const load = async () => {
  const xui = `${__dirname}/../saves/`;
  const files = await fsp.readdir(__dirname).catch(console.log);
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
