/**
 * @example
 * // return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
 * pairElement("ATCGA")
 * function pairElement takes each DNA character, gets its pair,
 * and returns the result as a 2d array
 * @param {String} input, passed DNA string
 * @return {Array} 2d array
 */
function pairElement(input) {
  const res = input.split('');
  return res.map(returnPair);
}
/**
 * @example
 * // return ['A', 'T']
 * returnPair('A')
 * function returnPair returns DNA pair with passed item
 * @param {String} item, passed DNA character
 * @return {Array} an array with DNA pair
 */
function returnPair(item) {
  switch (item) {
    case 'A': return ['A', 'T'];
    case 'T': return ['T', 'A'];
    case 'C': return ['C', 'G'];
    case 'G': return ['G', 'C'];
  }
}

export {pairElement};
