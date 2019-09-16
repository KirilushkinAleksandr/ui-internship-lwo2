function findLongestWord(str) {
  const words = str.split(' ');
  return words.reduce(
      (longest, current) => Math.max(longest, current.length),
      0
  );
}

export {findLongestWord};
