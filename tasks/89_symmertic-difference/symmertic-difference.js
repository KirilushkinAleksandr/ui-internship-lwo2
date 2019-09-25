/**
 * @example
 * // return [3, 4, 5]
 * sym([1, 2, 3], [5, 2, 1, 4])
 * function sym takes two or more arrays and returns an array
 * with the symmetric difference of provided arrays
 * @param  {Array} arrs, unknown number of arrays
 * @return {Array}, symmetric difference of passed arrays
 */
function sym(...arrs) {
  let res = [];
  for (let i = 0; i < arrs.length; i++) {
    res = symmDiff(res, arrs[i]);
  }
  return res.sort((a, b) => a - b);
}
/**
 * @example
 * // return [ 3, 4, 5 ]
 * symmDiff([1, 2, 3], [5, 2, 4, 1])
 * @param {Array} inputArr1, some array from arrs
 * @param {Array} inputArr2, some array from arrs
 * @return {Array} symmetric difference of passed arrays
 */
function symmDiff(inputArr1, inputArr2) {
  const arr1 = Array.from(new Set(inputArr1));
  const arr2 = Array.from(new Set(inputArr2));
  const res = [];
  return res.concat(
      arr1.filter((item) => !arr2.includes(item)),
      arr2.filter((item) => !arr1.includes(item))
  );
}

export {sym};
