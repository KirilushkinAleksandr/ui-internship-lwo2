/**
 * @example
 * // return 7
 * findMissing([1, 3, 5, 9, 11])
 * function findMissing searches missed value in passed
 * arithmetic progression array and returns it
 * @param {Array} input, array with a missing value
 * @return {Number} missing value
 */
function findMissing(input) {
  let step = (input[input.length - 1] - input[0])/(input.length);
  for (let i = 1; i < input.length; i++) {
    if (input[i-1] + step !== input[i]) {
      return input[i-1] + step;
    }
  }
}

export {findMissing};
