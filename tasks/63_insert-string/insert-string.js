/**
 * @example
 * // return ‘We are doing some JavaScript exercises.’
 * insert('We are doing some exercises.','JavaScript ',18)
 * function insert inserts a string within a string at a particular position
 * @param {String} input, base string
 * @param {String} str, string to be inserted
 * @param {Number} pos, position to start insert from
 * @return {String} result string
 */
function insert(input, str = '', pos = 0) {
  const res = input.split('');
  res.splice(pos, 0, ...str.split(''));
  return res.join('');
}

export {insert};
