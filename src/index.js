import { readFileSync } from 'fs';
import path from 'path';
import parseData from './parsers.js';
import buildDiff from './diffGenerator.js';
import format from './formatters/index.js';

const readFileData = (filepath) => readFileSync(path.resolve(process.cwd(), filepath));
const getExtension = (filepath) => path.extname(filepath);
const getData = (filepath) => {
  const expansion = getExtension(filepath).slice(1);
  return parseData(readFileData(filepath), expansion);
};

const genDiff = (filepath1, filepath2, option = 'stylish') => {
  const diff = buildDiff(getData(filepath1), getData(filepath2));
  return format(diff, option);
};
export default genDiff;
