/* eslint-disable consistent-return */
const _ = require('lodash');

const deepMerge = (source, update) => {
  _.mergeWith(source, update, (sourceValue, updateValue) => {
    if (_.isArray(sourceValue)) return sourceValue.concat(updateValue);
  });
};

module.exports = {
  deepMerge,
};
