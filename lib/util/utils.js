/* eslint-disable consistent-return */
const _ = require('lodash');

const deepMerge = (source, update) => {
  _.mergeWith(source, update, (sourceValue, updateValue) => {
    if (_.isArray(sourceValue)) return sourceValue.concat(updateValue);
  });
};

/**
 * Returns an object containing the passed object properties
 * @param {Object} object
 * @param {String[]} keys
 * @returns {Object}
 */
const pick = (object, keys) =>
  keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key];
    }
    return obj;
  }, {});

module.exports = {
  deepMerge,
  pick,
};
