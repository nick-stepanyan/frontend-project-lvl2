import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const sortedKeys = _.orderBy(Object.keys({ ...data1, ...data2 }));
  const result = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { name: key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { name: key, type: 'deleted', value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        name: key,
        type: 'nested',
        value: buildDiff(data1[key], data2[key]),
      };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { name: key, type: 'unchanged', value: data1[key] };
    }
    return {
      name: key,
      type: 'changed',
      value1: data1[key],
      value2: data2[key],
    };
  });
  return result;
};
export default buildDiff;
