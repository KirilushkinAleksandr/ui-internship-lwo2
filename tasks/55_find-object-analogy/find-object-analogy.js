/**
 * @example
 * // return [{ "a": 1, "b": 2, "c": 2 }]
 * whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
 *  { "a": 1, "c": 2 })
 * function whatIsInAName looks through first argument and returns an array
 * of all objects that have
 * matching property and value pairs with second argument
 * @param {Object} arr, array of objects
 * @param {Object} searchValue, value pairs
 * @return {Array} array of objects
 */
function whatIsInAName(arr, searchValue) {
  const res = [];
  const controlSum = Object.keys(searchValue).length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let key in searchValue) {
      if (searchValue.hasOwnProperty(key)) {
        if (arr[i].hasOwnProperty(key) && (searchValue[key] === arr[i][key])) {
          count++;
        }
      }
    }
    if (count === controlSum) {
      res.push(arr[i]);
    }
  }
  return res;
}

export {whatIsInAName};
