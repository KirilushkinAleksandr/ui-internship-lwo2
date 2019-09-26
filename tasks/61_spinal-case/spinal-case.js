/**
 * @example
 * // return "this-is-spinal-tap"
 * spinalCase('This Is Spinal Tap')
 * function spinalCase converts a string to spinal case
 * @param {String} input in some non-spinal case
 * @return {String} string in spinal case
 */
function spinalCase(input) {
  let str = input;
  const regExp = new RegExp(/([a-z])([A-Z])/g);
  str = str.replace(regExp, `$1 $2`);
  return str.replace(/[\s_]/g, '-').toLowerCase();
}

export {spinalCase};
