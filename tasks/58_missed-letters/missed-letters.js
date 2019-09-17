function findLetter(str) {
  const lets = str.split('');
  const start = lets.charCodeAt(0);
  for (let i = 1; i < lets.length; i++) {
    if (lets.charCodeAt(i) !== start + i) {
      lets.splice(i, 0,
          missed(lets.charCodeAt(i),
              lets.charCodeAt(i-1)
          )
      );
    }
  }
  return lets.join('');
}

function missed(start, end) {
  const res = [];
  for (let i = start + 1; i < end; i++) {
    res.push(String.fromCharCode(i));
  }
  return res.join('');
}

export {findLetter};
