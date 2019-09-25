/**
 * @example
 * // return "His name is John"
 * myReplace("His name is Tom", "Tom", "john")
 * function myReplace performs a search and replace on the sentence
 * using the arguments provided and returns the new sentence
 * @param {String} str, the sentence to perform the search and replace on
 * @param {String} before, the word that will be replaced
 * @param {String} after, word to replace previous input, 'before'
 * @return {String} returns a new sentence
 */
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    const origCase = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, origCase);
  }
  return str.replace(before, after);
}

export {myReplace};
