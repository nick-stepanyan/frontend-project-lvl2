import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('check genDiff', () => {
    const plainData = readFile(`plain.txt`);
    const expected = plainData.trim();
    const actual = genDiff(getFixturePath('file1.json'), getFixturePath(`file2.json`));
    expect(actual).toEqual(expected);
});