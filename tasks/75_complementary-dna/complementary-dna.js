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
