/**
 * @example
 * // return { a: 1, b: { c:10 } }
 * pairElement({ a: 1, b: { c:10 } })
 * function deepClone deeply copies
 * (nested values are affected too) passed object
 * @param {Object} inputObj, object passed for cloning
 * @return {Object} deep copy of an original object
 */
function deepClone(inputObj) {
  const clone = {};
  for (let key in inputObj) {
    if (typeof inputObj[key] === 'object') {
      clone[key] = deepClone(inputObj[key]);
    } else {
      clone[key] = inputObj[key];
    }
  }
  return clone;
}

export {deepClone};
