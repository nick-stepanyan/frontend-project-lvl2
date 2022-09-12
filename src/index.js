import { readFileSync } from 'fs';
import path from 'path';
import parseData from './parsers.js';
import buildDiff from './diffGenerator.js';
import formatOutput from './formatters/index.js';

const readFileData = (filepath) => readFileSync(path.resolve(process.cwd(), filepath));
const getPathExtension = path.extname;
const getExtension = (filepath) => getPathExtension(filepath);
const getData = (filepath) => {
  const expansion = getExtension(filepath).slice(1);
  return parseData(readFileData(filepath), expansion);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const diff = buildDiff(getData(filepath1), getData(filepath2));
  return formatOutput(diff, format);
};
export default genDiff;
