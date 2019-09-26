/**
 * @example
 * // return 11
 * pairwise([1, 4, 2, 3, 0, 5], 7)
 * function pairwise finds element pairs whose sum is equal to
 * the second argument arg and returns the sum of their indexes
 * @param {Array} inputArr, passed array of integers
 * @param {Number} arg, second argument, required sum of elements
 * @return {Number} the sum of indexes on which elements sum is equal to arg
 */
function pairwise(inputArr, arg) {
  const sumsIndexes = [];
  const arr = inputArr.slice();
  for (let i = 0; i < arr.length; i++) {
    const tempIndex = arr.indexOf(arg - arr[i], i + 1);
    if (tempIndex > 0) {
      sumsIndexes.push(i + tempIndex);
      arr.splice(tempIndex, 1, NaN);
    }
  }
  return sumsIndexes.reduce((sum, item) => sum + item, 0);
}

export {pairwise};
