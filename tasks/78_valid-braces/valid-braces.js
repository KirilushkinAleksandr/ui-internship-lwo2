/**
 * @example
 * // return true
 * validBraces("(){}[]")
 * function validBraces takes a string of braces and determines
 * if the order of the braces is valid or not
 * @param {String} input, passed string of braces
 * @return {Boolean} boolean value showing
 * if passed braces string is valid or not
 */
function validBraces(input) {
  const res = input.split('');
  const matches = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (Object.keys(matches).includes(res[j])) {
        break;
      }
      if (Object.values(matches).includes(res[j])) {
        if (res[j] === matches[res[i]]) {
          res.splice(i, 1, '');
          res.splice(j, 1, '');
          i -= 2;
          break;
        }
        return false;
      }
    }
  }
  return !res.join('');
}

export {validBraces};
