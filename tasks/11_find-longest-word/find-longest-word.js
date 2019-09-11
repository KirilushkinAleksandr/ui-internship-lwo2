function findLongestWord(str) {
  const words = str.split(' ');
  return words.reduce(function(longest, current) {
    if (current.length > longest) {
      return current.length;
    }
    return longest;
  }, 0);
}

export {findLongestWord};
