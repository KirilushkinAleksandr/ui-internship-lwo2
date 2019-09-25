/**
 * @example
 * // return [1, 2, 3, 5]
 * uniteUnique([1, 2, 3], [5, 2, 1])
 * function uniteUnique takes two or more arrays and
 * returns a new array of unique values
 * in the order of the original provided arrays
 * @param  {Array} arr, arrays of numbers
 * @return {Array} a new array of unique values
 */
function uniteUnique(...arr) {
  const res = [];
  arr.forEach((innerArr) => {
    innerArr.forEach((item) => {
      if (!res.includes(item)) {
        res.push(item);
      }
    });
  });
  return res;
}

export {uniteUnique};
