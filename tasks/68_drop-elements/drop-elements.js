/**
 * @example
 * // return [3, 4]
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
 * function dropElements drops the elements of an array,
 * starting from the front, until the predicate returns true
 * @param {Array} arr, passed array of numbers
 * @param {Function} inputFunc, passed function
 * for testing passed array elements
 * @return {Array} returns the rest of the array,
 * otherwise returns an empty array
 */
function dropElements(arr, inputFunc) {
  const res = arr.slice();
  for (let i = 0; i < res.length; i++) {
    if (inputFunc(res[i])) {
      return res;
    }
    res.shift();
    i--;
  }
  return res;
}

export {dropElements};
