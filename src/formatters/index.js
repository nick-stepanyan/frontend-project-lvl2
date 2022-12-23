import stylish from './stylish.js';
import plain from './plain.js';

const formatOutput = (diff, type) => {
    switch (type) {
        case 'plain':
            return plain(diff);
        case 'json':
            return JSON.stringify(diff);
        case 'stylish':
            return stylish(diff);
        default:
            throw new Error(`${type} - invalid type of format!`);
    }
};
export default formatOutput;