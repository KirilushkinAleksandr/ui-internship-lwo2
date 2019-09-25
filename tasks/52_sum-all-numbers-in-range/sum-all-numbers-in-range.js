/**
 * @example
 * // return 10
 * sumAll([1, 4])
 * sumAll function returns the sum of all numbers including two inserted
 * @param {Array} arr of two numbers, min and max bounds of range
 * @return {Number} sum of all numbers in range
 */
function sumAll(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let res = 0;
  for (let i = min; i <= max; i++) {
    res += i;
  }
  return res;
}

export {sumAll};
