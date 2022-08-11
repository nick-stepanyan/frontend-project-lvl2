import stylish from './stylish.js';
import plain from './plain.js';


const formatOutput = (diff, type = 'stylish') => {
    switch (type) {
        case 'plain':
            return plain(diff);
        case 'json':
            return JSON.stringify(diff, null, 2);
        case 'stylish':
            return stylish(diff);
        default:
            throw new Error(`${type} - invalid type of format!`);
    }
};
export default formatOutput;