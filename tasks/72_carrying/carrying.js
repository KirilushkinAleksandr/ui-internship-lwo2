/**
 * @example
 * // return 5
 * addTogether(2, 3)
 * function addTogether sums two arguments together
 * @param  {...any} input array of passed numbers
 * @return {undefined} if any of passed data is not a number
 * @return {Number} sum of numbers
 * @return {Function} if single value is passed
 */
function addTogether(...input) {
  if (typeof(input[0]) !== 'number') {
    return;
  }
  let sum = input[0];
  if (!input[1]) {
    return (input) => {
      if (typeof(input) !== 'number') {
        return;
      }
      return sum + input;
    };
  }
  if (typeof(input[1]) !== 'number') {
    return;
  }
  return sum + input[1];
}

export {addTogether};
