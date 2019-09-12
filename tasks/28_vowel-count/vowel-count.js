function getVowelCount(str) {
  const regex = /[aeiou]/g;
  const count = str.match(regex);
  return count ? count.length : 0;
}

export {getVowelCount};
