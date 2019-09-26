/**
 * @example
 * // return hELLO wORLD
 * swapCases('Hello World')
 * function swapCases takes a string and converts upper case letters
 *  to lower case, and lower case letters to upper case
 * @param {String} input which has lower and upper case letters
 * @return {String} string with reversed case for each letter
 */
function swapCases(input) {
  const res = input.split('');
  return res.map((item) => {
    if (item === item.toUpperCase()) {
      return item.toLowerCase();
    }
    return item.toUpperCase();
  }
  ).join('');
}

export {swapCases};
