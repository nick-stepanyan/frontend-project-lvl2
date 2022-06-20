import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);

  return keys.reduce((acc, key) => {
    if (_.has(data1, key) && _.has(data2, key) && data1[key] === data2[key]) {
      acc[`  ${key}`] = data1[key];
    } else if (!_.has(data2, key)) {
      acc[`- ${key}`] = data1[key];
    } else if (_.has(data1, key) && _.has(data2, key) && data1[key] !== data2[key]) {
      acc[`- ${key}`] = data1[key];
      acc[`+ ${key}`] = data2[key];
    } else {
      acc[`+ ${key}`] = data2[key];
    }
    return acc;
  }, {});
};

export default (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf-8');
  const data2 = readFileSync(filepath2, 'utf-8');

  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);
  return genDiff(dataParse1, dataParse2);
};

// const getDataFormat = (filePath) => path.extname(filePath).substr(1);
// const getFormattedContent = (filePath) => {
//     const fileData = readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
//     const dataFormat = getDataFormat(filePath);
//     const parseData = parse(fileData, dataFormat);
//     return parseData;
// }

// const generateDiff = (filePath1, filePath2, formatName = 'stylish') => {
//     const parseData1 = getFormattedContent(filePath1);
//     const parseData2 = getFormattedContent(filePath2);
//     const astDifference = buildDifference(parsedData1, parseData2);
//     return format(astDifference, formatName);
// };

// export default generateDiff;
