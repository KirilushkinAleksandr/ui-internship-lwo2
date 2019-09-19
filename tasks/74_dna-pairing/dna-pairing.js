function pairElement(input) {
  const res = input.split('');
  return res.map(returnPair);
}

function returnPair(item) {
  switch (item) {
    case 'A': return ['A', 'T'];
    case 'T': return ['T', 'A'];
    case 'C': return ['C', 'G'];
    case 'G': return ['G', 'C'];
  }
}

export {pairElement};
