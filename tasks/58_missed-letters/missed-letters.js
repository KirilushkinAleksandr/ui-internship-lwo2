function findLetter(str) {
  const letters = str.split('');
  const startCode = letters[0].charCodeAt(0);
  for (let i = 1; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) !== startCode + i) {
      return String.fromCharCode(startCode + i);
    }
  }
}

export {findLetter};
