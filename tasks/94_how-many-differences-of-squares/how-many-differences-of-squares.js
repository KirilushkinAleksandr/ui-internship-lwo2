/**
 * @example
 * // return 3
 * squares(4)
 * function squares takes a positive integer n and returns
 *  the amount of numbers between 1 and n (inclusive) that
 *  can be represented as the difference of two perfect squares
 * @param {Number} input, passed positive integer
 * @return {Number} amount of numbers that can represented
 * as the difference of two perfect squares
 */
function squares(input) {
  let count = 0;
  for (let i = 1; i <= input; i++) {
    if (i % 4 === 0 || i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

export {squares};
