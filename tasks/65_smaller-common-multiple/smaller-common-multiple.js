/**
 * @example
 * // return 60
 * smallestCommons([1, 5])
 * function smallestCommons finds the smallest common multiple
 *  of the provided parameters that can be evenly divided by both,
 * as well as by all sequential numbers in the range between these parameters
 * @param {Array} arr, array of two numbers, lower and upper bounds of range
 * @return {Number} number that can be evenly divided by both elements of array
 */
function smallestCommons(arr) {
  let start = Math.min(arr[0], arr[1]);
  const finish = Math.max(arr[0], arr[1]);
  for (let i = start; i <= finish; i++) {
    let tempIndex = i;
    let tempRes = start;
    while (tempRes && tempIndex) {
        tempRes > tempIndex ? tempRes %= tempIndex : tempIndex %= tempRes;
    }
    start = (start * i) / (tempRes + tempIndex);
  }
  return start;
}

export {smallestCommons};

