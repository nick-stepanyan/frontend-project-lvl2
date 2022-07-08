import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';

const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2);

    const result = keys.sort().map((key) => {
        if (_.has(data1, key) && _.has(data2, key) && data1[key] === data2[key]) {
            return `  ${key}: ${data1[key]}\n`;
        }
        if (!_.has(data2, key)) {
            return `- ${key}: ${data1[key]}\n`;
        }
        if (_.has(data1, key) && _.has(data2, key) && data1[key] !== data2[key]) {
            return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}\n`;
        }
        return `+ ${key}: ${data2[key]}`;
    });
    return `{\n${result.join('')}\n}`;
};
export default (filepath1, filepath2) => {
    const dataParse1 = JSON.parse(readFileSync(path.resolve(process.cwd(), filepath1)));
    const dataParse2 = JSON.parse(readFileSync(path.resolve(process.cwd(), filepath2)));
    return genDiff(dataParse1, dataParse2);
};