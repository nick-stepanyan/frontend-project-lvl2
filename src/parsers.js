import { load } from 'js-yaml';

const parseData = (data, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(data);
    case 'yml' || 'yaml':
      return load(data);
    default:
      throw new Error(`${formatName} - invalid type of parser!`);
  }
};
export default parseData;
