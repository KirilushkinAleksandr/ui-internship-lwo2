/**
 * @example
 * // return ‘c’
 * addedChar('aabbcc', 'aacccbbcc')
 * function addedChar takes two strings, the first being a random string
 * and the second being the same as the first,
 * but with three same characters added somewhere in the string,
 * and returns this character
 * @param {String} str1, string to compare
 * @param {String} str2, string with three added characters
 * @return {String} found character
 */
function addedChar(str1, str2) {
  const unchecked = str2.split('');
  for (let i = 0; i < str1.length; i++) {
    let index = str2.indexOf(str1[i]);
    unchecked.splice(index, 1);
  }
  return unchecked[0];
}

export {addedChar};
