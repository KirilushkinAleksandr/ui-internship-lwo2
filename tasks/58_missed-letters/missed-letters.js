function findLetter(str) {
  const lets = str.split('');
  const startCode = lets[0].charCodeAt(0);
  for (let i = 1; i < lets.length; i++) {
    if (lets[i].charCodeAt(0) !== startCode + i) {
      return String.fromCharCode(startCode + i);
    }
  }
}

export {findLetter};
