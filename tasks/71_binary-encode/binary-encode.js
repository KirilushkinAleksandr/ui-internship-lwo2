/**
 * @example
 * // return '01101110 01100110 01101001 01110010 01100101'
 * binaryEncode("fire")
 * function binaryEncode returns a string consists from binary codes
 * of each letter from passed English sentence or word
 * @param {String} input, passed string
 * @return {String} binary string
 */
function binaryEncode(input) {
  if (!input) {
    return '';
  }
  const chars = input.split('');
  const res = chars.map((item, i) => {
    const binary = parseInt(item.charCodeAt(0)).toString(2);
    return '0'.repeat(8 - binary.length) + binary;
  });
  return res.join(' ');
}

export {binaryEncode};
