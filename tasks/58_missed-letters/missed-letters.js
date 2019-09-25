/**
 * @example
 * // return "d"
 * findLetter("abce")
 * function findLetter finds the missing letter
 * in the passed letter range and returns it
 * @param {String} str, string with probably missed letter
 * @return {String} missing letter
 * @return {undefined} return undefined, if letter is not missing
 */
function findLetter(str) {
  const letters = str.split('');
  const startCode = letters[0].charCodeAt(0);
  for (let i = 1; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) !== startCode + i) {
      return String.fromCharCode(startCode + i);
    }
  }
}

export {findLetter};
