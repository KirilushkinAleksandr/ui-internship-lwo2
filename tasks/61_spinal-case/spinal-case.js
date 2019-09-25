/**
 * @example
 * // return "this-is-spinal-tap"
 * spinalCase('This Is Spinal Tap')
 * function spinalCase converts a string to spinal case
 * @param {String} str in some non-spinal case
 * @return {String} string in spinal case
 */
function spinalCase(str) {
  const separators = [' ', '_'];
  const arr = str.split('');
  arr.map((_item, i) => {
    if (arr[0] === arr[0].toUpperCase()) {
      arr[0] = arr[0].toLowerCase();
    }
    if (separators.includes(arr[i])) {
      arr[i] = '-';
    } else if (arr[i] === arr[i].toUpperCase() && arr[i] !== '-') {
      arr[i] = arr[i].toLowerCase();
      if (arr[i-1] !== '-') {
        arr.splice(i, 0, '-');
        i++;
      }
    }
  });
  return arr.join('');
}

export {spinalCase};
