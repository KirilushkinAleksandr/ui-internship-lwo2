/**
 * @example
 * // return ' boni!'
 * binaryDecode('00100000 01100010 01101111 01101110 01101001 00100001');
 * function binaryDecode returns an English translated sentence
 * of the passed binary string
 * @param {String} str, passed binary string
 * @return {String} passed string translated to english
 */
function binaryDecode(str) {
  if (!str) {
    return '';
  }
  const chars = str.split(' ');
  const res = chars.map((item) => {
    return String.fromCharCode(parseInt(item, 2));
  }
  );
  return res.join('');
}

export {binaryDecode};
