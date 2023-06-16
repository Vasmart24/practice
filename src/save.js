import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url); //eslint-disable-line
const __dirname = dirname(__filename); //eslint-disable-line
const path = `${__dirname}/../saves`;
const fsp = fs.promises;

// getSaves - асинхронная функция, возвращающая содержимое папки saves
// в виде массива с названиями файлов.
export const getSaves = async () => {
  try {
    return await fsp.readdir(path);
  } catch (e) {
    throw new Error(e);
  }
};

// save - асинхронная функция, записывающая объект game в папку saves в файл с именем [name].json.
// В случае если name не указан, файл будет иметь имя save[maxIndex + 1].json
// Побочные эффекты:
// 1) Добавление нового файла в папку saves.
// 2) Вывод сообщения 'Игра успешно сохранена.' в консоль.
export const save = async (game, name) => {
  try {
    let filename = `/${name}.json`;
    if (!name) {
      const saves = await getSaves().then((item) => item.filter((i) => /^save\d.json$/.test(i)));
      const indexes = saves.map((i) => parseInt(i[4]));
      filename = `/save${indexes.length > 0 ? indexes[indexes.length - 1] + 1 : 0}.json`;
    }
    await fsp.writeFile(path + filename, JSON.stringify(game, null, 2));
    console.log('Игра успешно сохранена.');
  } catch (e) {
    throw new Error(e);
  }
};

export const load = async (saveName) => {
  const filename = `/${saveName}.json`;
  console.log(path + filename)
  try {
    const rawdata = await fsp.readFile(path + filename);
    const data = JSON.parse(rawdata);
    console.log('Игра успешно загружена.');
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

save({
  player: {
    name: 'Jopa'
  }
});