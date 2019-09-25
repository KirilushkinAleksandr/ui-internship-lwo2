/**
 * @example
 * // return "Dolce &amp; Gabbana"
 * convertHTML("Dolce & Gabbana")
 * function convertHTML converts the characters
 * in a string to their corresponding HTML entities
 * @param {String} input, string with incorrect HTML entities
 * @return {String} returns string with correct HTML entities
 */
function convertHTML(input) {
  return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
}

export {convertHTML};
