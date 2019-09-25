/**
 * @example
 * // return "eightway"
 * translatePigLatin("eight")
 * function translatePigLatin translates the provided string to 'pig latin'.
 * @param {String} input, a word being translated
 * @return {String} returns translated word
 */
export function translatePigLatin(input) {
  const res = input.split('');
  const vowelsRegEx = /[aeiou]/;
  const firstVowelIndex = input.indexOf(input.match(vowelsRegEx));
  if (firstVowelIndex === 0) {
    return input + 'way';
  }
  for (let i = 0; i < firstVowelIndex; i++) {
    res.shift(input[i]);
    res.push(input[i]);
  }
  return res.join('') + 'ay';
}
