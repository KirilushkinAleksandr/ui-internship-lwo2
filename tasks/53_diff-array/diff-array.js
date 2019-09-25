/**
 * @example
 * // return [4]
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
 * function diffArray returns a new array
 * with any items only found in one of the two given arrays
 * @param {*} arr1 of any types
 * @param {*} arr2 of any types
 * @return {Array} returns the symmetric difference of two passed arrays
 */
function diffArray(arr1, arr2) {
  const res = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      res.push(item);
    }
  });
  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      res.push(item);
    }
  });
  return res;
}

export {diffArray};
