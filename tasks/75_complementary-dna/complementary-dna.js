/**
 * @example
 * // return TAACG
 * pairElement('ATTGC')
 * function DNAStrand returns the other complementary side
 * of passed DNA chain
 * @param {String} input, passed DNA chain string
 * @return {String} complementary DNA string
 */
function DNAStrand(input) {
  const res = input.split('');
  return res.map(returnPair).join('');
}

function returnPair(item) {
  switch (item) {
    case 'A': return 'T';
    case 'T': return 'A';
    case 'C': return 'G';
    case 'G': return 'C';
  }
}

export {DNAStrand};
